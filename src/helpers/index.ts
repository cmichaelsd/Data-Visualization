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

/**
 * Clears application state to avoid animation errors and resets button disabled property.
 */
function clearApplication(): void {
    // Enable begin sort button. 
    toggleButtonDisabled('beginSortingButton', false);
    // Clear any iterations from queue if they exist.
    clearIterations();
    // Clear all pending and running timeouts.
    clearTimeoutids();
}

/**
 * Initializes text for the application. 
 */
function bindStrings(): void {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('bindString');

    for (let i: number = 0; i < elements.length; ++i) {
        const element = elements[i] as HTMLOptionElement;
        const initialValue: string = element.dataset.initialValue;
        const stringKey: string = element.textContent.slice(1, element.textContent.length);
        const content: string = initialValue ? format(getString(stringKey), initialValue) : getString(stringKey);
        
        element.innerHTML = content;
    }
}

/**
 * Returns the language used by the clients browser. 
 */
function initClientLanguageFromBrowser(): void {
    setClientLanguage(navigator.language.split('-')[0]);
}