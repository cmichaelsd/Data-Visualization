/**
 * Processes animations for each pair of column indicies. 
 * 
 * @param animationsTuple NumberTupleLengthTwo
 * @param animationIndex number
 */
function processSwapAnimations(animationsTuple: NumberTupleLengthTwo, animationDelay: number, totalSwaps: number): void {
    if (animationsTuple === undefined || animationsTuple === null || animationDelay < 0) {
        return;
    }

    const swapSpan: HTMLElement = document.getElementById(R.IDs.swap);
    const columns: HTMLCollectionOf<Element> = document.getElementsByClassName('column');

    const [ a, b ] = animationsTuple;
    const columnA: HTMLElement = columns[a] as HTMLElement;
    const columnB: HTMLElement = columns[b] as HTMLElement;

    /**
     * Highlight columns to be swapped with swapping color, delay 
     * animation by i * 10 so each animation happens after the next by
     * a fixed amount of time. 
     */
    State.setTimeoutIds(function(): void {
        columnA.style.backgroundColor = R.Colors.SWAPPING_COLOR;
        columnB.style.backgroundColor = R.Colors.SWAPPING_COLOR;
    }, animationDelay);

    /**
     * Highlight columns which have been swapped with swapped colors, delay 
     * animation by (i + 1) * 10 so animations happen a fixed time after the 
     * first animation; allow users to understand visually what is going on. 
     */
    State.setTimeoutIds(function(): void {
        const columnAHeight: string = columnA.style.height;
        const columnBHeight: string = columnB.style.height;
        const columnAValue: string = columnA.getAttribute('data-value');
        const columnBValue: string = columnB.getAttribute('data-value');

        columnA.style.height = columnBHeight;
        columnB.style.height = columnAHeight;

        columnA.style.backgroundColor = R.Colors.SWAPPED_COLOR;
        columnB.style.backgroundColor = R.Colors.SWAPPED_COLOR;

        columnA.dataset.value = columnBValue;
        columnB.dataset.value = columnAValue;

        swapSpan.textContent = R.Strings.format(
            R.Strings.getString(R.Strings.swapsSpanText),
            totalSwaps
        );
    }, animationDelay + 1);
}