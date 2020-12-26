/**
 * Processes animations for each iteration.
 * 
 * @param iteration number 
 */
function processIterationAnimations(iterations: NumberTupleLengthTwo[][]): void {
    if (iterations.length < 0) {
        return;
    }

    const iterationCount: HTMLElement = document.getElementById('iterationCount');
    
    /**
     * Update iteration counter as the iterations come in from the sorting handler. 
     */
    for (let iteration: number = 0; iteration < iterations.length; ++iteration) {
        setTimeout((): void => {
            const bucket = iterations[iteration];

            for (let tupleIndex: number = 0; tupleIndex < bucket.length; ++tupleIndex) {
                const tuple = bucket[tupleIndex];

                processSwapAnimations(tuple, iteration);
            }

            iterationCount.textContent = `${iteration}`;
        }, (iteration + 1) * global.delay);
    }
}