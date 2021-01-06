// Global state object for the application.
const globalState: GlobalState = {
    clientLanguage: 'en',
    delay: 20,
    timeoutIds: [],
    iterations: []
};

// Actions which the application can fire.
const Actions: Readonly<StringMap> = {
    ITERATION: "iteration",
    SWAP: "swap"
};

Object.freeze(globalState);
Object.freeze(Actions);


/**
 * Pushes animation payloads to the iterations queue.
 * 
 * @param data SortAnimationAction
 */
function setIterations(data: SortAnimationAction): void {
    const iterationsQueue: NumberTupleLengthTwo[][] = globalState.iterations;

    switch (data.action) {
        case Actions.ITERATION:
            iterationsQueue.push(data.payload as NumberTupleLengthTwo[]);
            break;
        case Actions.SWAP:
            iterationsQueue[iterationsQueue.length - 1].push(data.payload as NumberTupleLengthTwo);
            break;
        default:
            break;
    }
}

/**
 * Clears all iterations in the global states iterations queue. 
 */
function clearIterations(): void {
    const iterationsQueue: NumberTupleLengthTwo[][] = globalState.iterations;

    iterationsQueue.splice(0, iterationsQueue.length);
}

/**
 * Pushes setTimeout ids to the global states timeoutIds queue.
 * 
 * @param cb () => void
 * @param delay number
 */
function setTimeoutIds(cb: () => void, delay: number): void {
    const setTimeoutId: number = setTimeout(cb, delay * globalState.delay);

    globalState.timeoutIds.push(setTimeoutId);
}

/**
 * Clears all timeout ids in the global states timeoutIds queue.
 */
function clearTimeoutids(): void {
    const timeoutIdsQueue: number[] = globalState.timeoutIds;

    for (let i: number = 0; i < timeoutIdsQueue.length; ++i) {
        clearTimeout(timeoutIdsQueue[i]);
    }

    timeoutIdsQueue.splice(0, timeoutIdsQueue.length);

    clearIterations();
}

/**
 * Sets the clients browser language to the global state.
 * 
 * @param language
 */
function setClientLanguage(language: string): void {
    globalState.clientLanguage = language;
}

/**
 * Gets the clients browser language from the global state.
 * 
 * @return string
 */
function getClientLanguage(): string {
    return globalState.clientLanguage;
}