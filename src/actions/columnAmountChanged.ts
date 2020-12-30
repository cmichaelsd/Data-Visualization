/**
 * Generates a variable number of columns of a variable height and appends 
 * them to the sorting container element. 
 * 
 * @param number columns
 */
function generateColumns(columns: number): void {
    /**
     * Becomes too difficult to see columns when width is (1000 / 100+)
     * also columns should not be a negative number. 
     */
    if (columns < 5 || columns > 100 || columns === undefined || columns === null) {
        return;
    }

    const sortingContainer: HTMLElement = document.getElementById('sortingContainer');
    const iterationCount: HTMLElement = document.getElementById('iterationCount');
    const swapCount: HTMLElement = document.getElementById('swapCount');
    const MIN_COLUMN_HEIGHT: number = 1;
    const MAX_COLUMN_HEIGHT: number = sortingContainer.offsetHeight;
    const SORTING_CONTAINER_WIDTH: number = sortingContainer.offsetWidth;

    // Clear currently existing iteration count.
    iterationCount.textContent = '0';
    // Clear currently existing swap count. 
    swapCount.textContent = '0';
    // Clear currently existing columns. 
    sortingContainer.innerHTML = '';

    clearApplication();

    for (let i: number = 0; i < columns; ++i) {
        const column: HTMLElement = document.createElement('div');
        const value: number = generateRandomNumber(MIN_COLUMN_HEIGHT, MAX_COLUMN_HEIGHT);

        column.className = 'column';
        column.style.width = `${SORTING_CONTAINER_WIDTH / columns}px`;
        column.style.height = `${value}px`;
        column.dataset.value = `${value}`;
        sortingContainer.appendChild(column);
    }
}