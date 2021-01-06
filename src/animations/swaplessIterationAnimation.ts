/**
 * Processes animations for an iteration which has no swaps. 
 * 
 * @param animationDelay number
 * @param totalSwapless number
 */
function processSwaplessIterationAnimation(animationDelay: number, totalSwapless: number): void {
    const swaplessSpan: HTMLElement = document.getElementById('swapless');

    setTimeoutIds(function (): void {
        swaplessSpan.innerHTML = format(getString(Strings.swaplessIterationsSpanText), totalSwapless);
    }, animationDelay);
}