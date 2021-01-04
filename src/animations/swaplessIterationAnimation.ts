/**
 * Processes animations for an iteration which has no swaps. 
 * 
 * @param animationDelay number
 * @param totalSwapless number
 */
function processSwaplessIterationAnimation(animationDelay: number, totalSwapless: number): void {
    const swaplessCount: HTMLElement = document.getElementById('swaplessCount');

    setTimeoutIds(function (): void {
        swaplessCount.textContent = `${totalSwapless}`;
    }, animationDelay);
}