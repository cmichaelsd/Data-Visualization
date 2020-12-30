/**
 * Regenerates columns with current range value. 
 */
function regenerateColumns(): void {
    const currentNumberOfColumns: number = Number((document.getElementById('columnAmount') as HTMLSelectElement).value);

    clearApplication();
    // Generate columns.
    generateColumns(currentNumberOfColumns);
}
