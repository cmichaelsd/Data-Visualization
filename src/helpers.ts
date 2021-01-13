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
    const iteration: HTMLElement = document.getElementById(R.IDs.iteration);
    const swapless: HTMLElement = document.getElementById(R.IDs.swapless);
    const swap: HTMLElement = document.getElementById(R.IDs.swap);

    // Clear currently existing iteration count.
    iteration.textContent = R.Strings.format(
        R.Strings.getString(R.Strings.iterationsSpanText),
        iteration.dataset.initialValue
    );
    // Clear currently existing swapless count.
    swapless.textContent = R.Strings.format(
        R.Strings.getString(R.Strings.swaplessIterationsSpanText),
        swapless.dataset.initialValue
    );
    // Clear currently existing swap count. 
    swap.textContent = R.Strings.format(
        R.Strings.getString(R.Strings.swapsSpanText),
        swapless.dataset.initialValue
    );
    // Enable begin sort button. 
    toggleButtonDisabled(R.IDs.beginSortingButton, false);
    // Clear any iterations from queue if they exist.
    State.clearIterations();
    // Clear all pending and running timeouts.
    State.clearTimeoutIds();
}

/**
 * Returns the language used by the clients browser. 
 */
function initClientLanguageFromBrowser(): void {
    State.setClientLanguage(navigator.language.split('-')[0]);
}