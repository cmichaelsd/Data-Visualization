/**
 * Returns a number inclusively within a min and max range. 
 * 
 * @param min number 
 * @param max number 
 * @return number 
 */
function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a number array created from the data value of each column div element. 
 * 
 * @return number[]
 */
function nodeListToNumberArray(): number[] {
    const columns: HTMLCollectionOf<Element> = document.getElementsByClassName('column');
    const arr: number[] = [];

    if (columns.length === 0) {
        return arr;
    }

    for (let i: number = 0; i < columns.length; ++i) {
        const value: number = Number(columns[i].getAttribute('data-value'));
    
        arr.push(value);
    }

    return arr;
}

/**
 * Returns a boolean of true is a number array is sorted and 
 * false if it is not. 
 * 
 * @param arr number[] 
 * @return boolean 
 */
function checkNumberArrayIsSorted(arr: number[]): boolean {
    if (arr === undefined || arr === null) {
        return false;
    }

    if (arr.length <= 1) {
        return true;
    }

    for (let i: number = 0; i < arr.length-1; ++i) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }

    return true;
}

/**
 * A buttons disabled state is set to the given boolean state.
 * 
 * @param id string
 * @param state boolean
 */
function toggleButtonDisabled(id: string, state: boolean): void {
    if (id === null || id === undefined || state === null || state === undefined) {
        return;
    }

    const button: HTMLButtonElement = document.getElementById(id) as HTMLButtonElement;

    button.disabled = state;
}