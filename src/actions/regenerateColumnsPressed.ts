/**
 * Regenerates columns with current range value. 
 */
function regenerateColumns() {
    const currentNumberOfColumns: number = Number((document.getElementById('columnAmount') as HTMLSelectElement).value);
    
    generateColumns(currentNumberOfColumns);
}
