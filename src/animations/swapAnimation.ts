/**
 * Processes animations for each pair of column indicies. 
 * 
 * @param animationsTuple NumberTupleLengthTwo
 * @param animationIndex number
 */
function processSwapAnimations(animationsTuple: NumberTupleLengthTwo, animationIndex: number): void {
    if (animationsTuple === undefined || animationsTuple === null || animationIndex < 0) {
        return;
    }

    const DELAY: number = 20;
    const SWAPPING_COLOR: string = 'orchid';
    const SWAPPED_COLOR: string = 'lightcoral';
    const swapCount: HTMLElement = document.getElementById('swapCount');
    const columns: HTMLCollectionOf<Element> = document.getElementsByClassName('column');
    
    const a = animationsTuple[0];
    const b = animationsTuple[1];
    const columnA: HTMLElement = columns[a] as HTMLElement;
    const columnB: HTMLElement = columns[b] as HTMLElement;

    /**
     * Highlight columns to be swapped with swapping color, delay 
     * animation by i * 10 so each animation happens after the next by
     * a fixed amount of time. 
     */
    setTimeout((): void => {
        columnA.style.backgroundColor = SWAPPING_COLOR;
        columnB.style.backgroundColor = SWAPPING_COLOR;
    }, animationIndex * DELAY);

    /**
     * Highlight columns which have been swapped with swapped colors, delay 
     * animation by (i + 1) * 10 so animations happen a fixed time after the 
     * first animation; allow users to understand visually what is going on. 
     */
    setTimeout((): void => {
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

        swapCount.textContent = `${animationIndex}`;
    }, (animationIndex + 1) * DELAY);
}