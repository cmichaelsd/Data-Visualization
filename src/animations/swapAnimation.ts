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

    const SWAPPING_COLOR: string = 'tomato';
    const SWAPPED_COLOR: string = 'deepskyblue';
    const swapSpan: HTMLElement = document.getElementById('swap');
    const columns: HTMLCollectionOf<Element> = document.getElementsByClassName('column');

    const [ a, b ] = animationsTuple;
    const columnA: HTMLElement = columns[a] as HTMLElement;
    const columnB: HTMLElement = columns[b] as HTMLElement;

    /**
     * Highlight columns to be swapped with swapping color, delay 
     * animation by i * 10 so each animation happens after the next by
     * a fixed amount of time. 
     */
    setTimeoutIds(function(): void {
        columnA.style.backgroundColor = SWAPPING_COLOR;
        columnB.style.backgroundColor = SWAPPING_COLOR;
    }, animationDelay);

    /**
     * Highlight columns which have been swapped with swapped colors, delay 
     * animation by (i + 1) * 10 so animations happen a fixed time after the 
     * first animation; allow users to understand visually what is going on. 
     */
    setTimeoutIds(function(): void {
        const columnAHeight: string = columnA.style.height;
        const columnBHeight: string = columnB.style.height;
        const columnAValue: string = columnA.getAttribute('data-value');
        const columnBValue: string = columnB.getAttribute('data-value');

        columnA.style.height = columnBHeight;
        columnB.style.height = columnAHeight;

        columnA.style.backgroundColor = SWAPPED_COLOR;
        columnB.style.backgroundColor = SWAPPED_COLOR;

        columnA.dataset.value = columnBValue;
        columnB.dataset.value = columnAValue;

        swapSpan.innerHTML = format(Strings.swapsSpanText, totalSwaps);
    }, animationDelay + 1);
}