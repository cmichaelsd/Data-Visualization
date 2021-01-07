/**
 * Processes animations for an iteration which has no swaps. 
 * 
 * @param animationDelay number
 * @param totalSwapless number
 */
function processSwaplessIterationAnimation(animationDelay: number, totalSwapless: number): void {
    const swaplessSpan: HTMLElement = document.getElementById(R.IDs.swapless);

    State.setTimeoutIds(function (): void {
        swaplessSpan.innerHTML = R.Strings.format(
            R.Strings.getString(R.Strings.swaplessIterationsSpanText),
            totalSwapless
        );
    }, animationDelay);
}