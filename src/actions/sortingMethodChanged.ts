/**
 * Regenerates columns with current range value when selected sorting 
 * method changes and columns are currently sorted. 
 */
function onSelectChange(): void {
    const arr: number[] = nodeListToNumberArray();

    if (checkNumberArrayIsSorted(arr)) {
        regenerateColumns();
    }
}