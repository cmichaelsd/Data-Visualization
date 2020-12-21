/**
 * Generates a variable number of columns of a variable height and appends 
 * them to the sorting container element. 
 * 
 * @param number columns
 */
function generateColumns(columns: number) {
    /**
     * Becomes too difficult to see columns when width is (1000 / 500+)
     * also columns should not be a negative number. 
     */
    if (columns < 5 || columns > 100) {
        return;
    }

    const sortingContainer = document.getElementById('sortingContainer');
    const MIN_COLUMN_HEIGHT = 1;
    const MAX_COLUMN_HEIGHT = sortingContainer.offsetHeight;
    const SORTING_CONTAINER_WIDTH = sortingContainer.offsetWidth;

    // Clear currently existing columns if they exist. 
    sortingContainer.innerHTML = "";

    for (let i = 0; i < columns; ++i) {
        const column = document.createElement('div');
        const value = generateRandomNumber(MIN_COLUMN_HEIGHT, MAX_COLUMN_HEIGHT);

        column.className = 'column';
        column.style.width = `${SORTING_CONTAINER_WIDTH / columns}px`;
        column.style.height = `${value}px`;
        column.dataset.value = `${value}`;
        sortingContainer.appendChild(column);
    }
}

/**
 * Returns a number inclusively within a min and max range. 
 * 
 * @param min number 
 * @param max number 
 * @return number 
 */
function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a number array created from the data value of each column div element. 
 * 
 * @return number[]
 */
function nodeListToNumberArray(): number[] {
    const columns = document.getElementsByClassName('column');
    const arr: number[] = [];

    for (let i = 0; i < columns.length; ++i) {
        const value = Number(columns[i].getAttribute('data-value'));
    
        arr.push(value);
    }

    return arr;
}

/**
 * Processes animations for each pair of column indicies. 
 * 
 * @param arr number[][]
 */
function processAnimations(animations: number[][]) {
    const DELAY = 20;
    const SWAPPING_COLOR = 'orchid';
    const SWAPPED_COLOR = 'lightcoral';
    const columns = document.getElementsByClassName('column');
    
    for (let i = 0; i < animations.length; ++i) {
        const [ a, b ] = animations[i];
        const columnA = columns[a] as HTMLElement;
        const columnB = columns[b] as HTMLElement;

        /**
         * Highlight columns to be swapped with swapping color, delay 
         * animation by i * 10 so each animation happens after the next by
         * a fixed amount of time. 
         */
        setTimeout(() => {

            columnA.style.backgroundColor = SWAPPING_COLOR;
            columnB.style.backgroundColor = SWAPPING_COLOR;
            
        }, i * DELAY);

        /**
         * Highlight columns which have been swapped with swapped colors, delay 
         * animation by (i + 1) * 10 so animations happen a fixed time after the 
         * first animation; allow users to understand visually what is going on. 
         */
        setTimeout(() => {
            const columnAHeight = columnA.style.height;
            const columnBHeight = columnB.style.height;
            const columnAValue = columnA.getAttribute('data-value');
            const columnBValue = columnB.getAttribute('data-value');

            columnA.style.height = columnBHeight;
            columnB.style.height = columnAHeight;

            columnA.style.backgroundColor = SWAPPED_COLOR;
            columnB.style.backgroundColor = SWAPPED_COLOR;

            columnA.dataset.value = columnBValue;
            columnB.dataset.value = columnAValue;
        }, (i + 1) * DELAY);
    }
}

/**
 * Returns a boolean of true is a number array is sorted and 
 * false if it is not. 
 * 
 * @param arr number[] 
 * @return boolean 
 */
function checkNumberArrayIsSorted(arr: number[]): boolean {

    for (let i = 0; i < arr.length-1; ++i) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }

    return true;
}

/**
 * Begins sorting with currently selected sorting method. 
 */
function beginSorting() {
    const arr: number[] = nodeListToNumberArray();
    const animations: number[][] = [];
    const selectMenu = document.getElementById('sortingMethod') as HTMLSelectElement;
    const selectMethod = selectMenu.options[selectMenu.selectedIndex].value;
    let sortFunction = null;

    switch(selectMethod) {
        case 'bubbleSort':
            sortFunction = window[selectMethod];
            break;
        default:
            // Value from select menu is invalid, return from function. 
            return;
    }

    sortFunction(arr, (a: number, b: number) => {
        animations.push([a, b]);
    });
    
    processAnimations(animations);
}

/**
 * Regenerates columns with current range value when selected sorting 
 * method changes. 
 */
function onSelectChange() {
    const range = document.getElementById('columnAmount');

    console.log(range);
}

/**
 * Driver function for the program. 
 */
(function main() {
    createSelectMenu((option) => {
        const columnsAmount = Number((document.getElementById('columnAmount') as HTMLInputElement).value);
        generateColumns(columnsAmount);
    });

    generateColumns(10);
})();
