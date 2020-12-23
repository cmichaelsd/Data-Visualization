/**
 * Processes animations for each iteration.
 * 
 * @param iteration number 
 */
function processIterationAnimations(iteration: number): void {
    if (iteration < 0) {
        return;
    }

    const DELAY: number = 20;
    const iterationCount: HTMLElement = document.getElementById('iterationCount');
    
    /**
     * Update iteration counter as the iterations come in from the sorting handler. 
     */
    setTimeout((): void => {
        iterationCount.textContent = `${iteration}`;
    }, iteration * DELAY);
}