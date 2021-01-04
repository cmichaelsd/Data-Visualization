type NumberTupleLengthTwo = [number, number];

type SortingCallback = (data: SortAnimationAction) => void;

type SortingFunction = (arr: number[], cb: SortingCallback) => void;

type Action = string;

interface SortAnimationAction {
    action: string;
    payload?: NumberTupleLengthTwo;
};

interface GlobalState {
    delay: number,
    timeoutIds: number[],
    iterations: NumberTupleLengthTwo[][]
};

// Constants used in the application.
const ITERATION: Action = "iteration";

const SWAP: Action = "swap";

/**
 * Driver function for the program. 
 */
(function main(): number {
    generateColumns(10);

    return 0;
})();
