namespace State {
    const DELAY_BY = 20;
    export const timeoutIds = [];
    export const iterations = [];
    export let clientLanguage = 'en';

    // Actions which the application can fire.
    export const enum Actions {
        ITERATION = "iteration",
        SWAP = "swap"
    };

    /**
     * Pushes animation payloads to the iterations queue.
     * 
     * @param data SortAnimationAction
     */
    export function setIterations(data: SortAnimationAction): void {
        const iterationsQueue: NumberTupleLengthTwo[][] = iterations;

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
    export function clearIterations(): void {
        const iterationsQueue: NumberTupleLengthTwo[][] = iterations;

        iterationsQueue.splice(0, iterationsQueue.length);
    }

    /**
     * Pushes setTimeout ids to the global states timeoutIds queue.
     * 
     * @param cb () => void
     * @param delay number
     */
    export function setTimeoutIds(cb: () => void, delay: number): void {
        const setTimeoutId: number = setTimeout(cb, delay * DELAY_BY);

        timeoutIds.push(setTimeoutId);
    }

    /**
     * Clears all timeout ids in the global states timeoutIds queue.
     */
    export function clearTimeoutids(): void {
        const timeoutIdsQueue: number[] = timeoutIds;

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
    export function setClientLanguage(language: string): void {
        clientLanguage = language;
    }

    /**
     * Gets the clients browser language from the global state.
     * 
     * @return string
     */
    export function getClientLanguage(): string {
        return clientLanguage;
    }
}

