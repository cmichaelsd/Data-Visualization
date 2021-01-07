/**
 * Processes animations for each iteration.
 */
function processIterationAnimations(): void {
    const iterations: NumberTupleLengthTwo[][] = State.iterations;
    
    if (iterations.length < 0) {
        return;
    }

    const iterationSpan: HTMLElement = document.getElementById(R.IDs.iteration);
    let previousIterationDelay: number = 0;
    let totalSwaps: number = 0;
    let totalSwapless: number = 0;
    
    /**
     * Update iteration counter as the iterations come in from the sorting handler. 
     */
    for (let iteration: number = 0; iteration < iterations.length; ++iteration) {
        const bucket: NumberTupleLengthTwo[] = iterations[iteration];
        const delayCalc: number = iteration + bucket.length;
        const currentIterationDelay: number = (delayCalc < previousIterationDelay) ? (previousIterationDelay + 1) : delayCalc;

        previousIterationDelay = currentIterationDelay;

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
        State.setTimeoutIds(function (): void {
            if (bucket.length) {
                for (let tupleIndex: number = 0; tupleIndex < bucket.length; ++tupleIndex) {
                    const tuple: NumberTupleLengthTwo = bucket[tupleIndex];
                    const animationDelay: number = iteration + tupleIndex;

                    ++totalSwaps;

                    /**
                     * Due to the nature of nested setTimeouts all that matters is that the parent setTimeouts greater than the previous
                     * the children of the parent timeout can be and incremental value and will fire before the next parent timeout is called.
                     */
                 
                    processSwapAnimations(tuple, animationDelay, totalSwaps);
                  
                }
            } else {
                ++totalSwapless;

                processSwaplessIterationAnimation(iteration, totalSwapless);
            }

            // iterationSpan.innerHTML = format(getString(Strings.iterationsSpanText), iteration + 1);
            iterationSpan.innerHTML = R.Strings.format(
                R.Strings.getString(R.Strings.iterationsSpanText),
                iteration + 1
            );
        }, currentIterationDelay);
    }
}