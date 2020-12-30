/**
 * Regenerates columns with current range value. 
 */
function regenerateColumns(): void {
    const currentNumberOfColumns: number = Number((document.getElementById('columnAmount') as HTMLSelectElement).value);

    // Enable begin sort button. 
    toggleButtonDisabled('beginSortingButton', false);
    // Generate columns.s
    generateColumns(currentNumberOfColumns);
}
