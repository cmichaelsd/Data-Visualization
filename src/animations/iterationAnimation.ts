/**
 * Processes animations for each iteration.
 * 
 * @param iteration number 
 */
function processIterationAnimations(iterations: NumberTupleLengthTwo[][]): void {
    if (iterations.length < 0) {
        return;
    }

    const DELAY = 20;
    const iterationCount: HTMLElement = document.getElementById('iterationCount');
    let previousIterationDelay = 0;
    let totalSwaps = 0;
    
    /**
     * Update iteration counter as the iterations come in from the sorting handler. 
     */
    for (let iteration: number = 0; iteration < iterations.length; ++iteration) {
        const bucket = iterations[iteration];
        const delayCalc = iteration + bucket.length;
        const currentIterationDelay = (delayCalc < previousIterationDelay) ? previousIterationDelay : delayCalc;

        /**
         * Issue: Can not just declare timeout as iteration + bucket.length it will result
         * in a situation where a iteration ends sooner than the previous
         * Solution: I will need to preserve the previous timeout and if new generated timeout is less 
         * declare to be previous + 1
         * 
         * I.E.
         * previous = iteration (1) + bucket.length (2, two tuples) = 3
         * current  = iteration (2) + bucket.length (0, empty list) = 2
         * 
         * current = (current < previous) ? previous + 1 : current
         * 
         * This will cause an iteration with no swaps to equal previous and fire at the same time as previous
         * if I want to animate a pulse for swapless iteration I should make previous + 2 or 3 and animate a flash on
         * all columns indicating nothing happened for the user during this iteration.
         */
        setTimeout((): void => {
            for (let tupleIndex: number = 0; tupleIndex < bucket.length; ++tupleIndex) {
                const tuple = bucket[tupleIndex];
                ++totalSwaps;

                processSwapAnimations(tuple, (iteration + tupleIndex) * DELAY, totalSwaps);
            }

            iterationCount.textContent = `${iteration}`;
        }, currentIterationDelay * DELAY);
    }
}