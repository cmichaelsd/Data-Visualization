const globalState: GlobalState = {
    delay: 20,
    timeoutIds: [],
    iterations: []
};

/**
 * Pushes animation payloads to the iterations queue.
 * 
 * @param data SortAnimationAction
 */
function setIterations(data: SortAnimationAction): void {
    const iterationsQueue = globalState.iterations;

    if (data.action === "iteration") {
        iterationsQueue.push([]);
    }

    if (data.action === "swap") {
        iterationsQueue[iterationsQueue.length - 1].push(data.payload);
    }
}

/**
 * Clears all iterations in the global states iterations queue. 
 */
function clearIterations(): void {
    globalState.iterations = [];
}

/**
 * Pushes setTimeout ids to the global states timeoutIds queue.
 * 
 * @param cb () => void
 * @param delay number
 */
function setTimeoutIds(cb: any, delay: number): void {
    const setTimeoutId = setTimeout(cb, delay * globalState.delay);

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

    globalState.timeoutIds = [];

    clearIterations();
}