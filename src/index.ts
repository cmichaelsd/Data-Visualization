// Types
type NumberTupleLengthTwo = [number, number];

type SortingCallback = (data: SortAnimationAction) => void;

type SortingFunction = (arr: number[], cb: SortingCallback) => void;

type StringMap = Record<string, string>;

// Interfaces
interface SortAnimationAction {
    action: string;
    payload?: NumberTupleLengthTwo | NumberTupleLengthTwo[];
};

interface GlobalState {
    delay: number,
    timeoutIds: number[],
    iterations: NumberTupleLengthTwo[][]
};

// Driver function for the program. 
(function main(): number {
    bindStrings();
    generateColumns(10);

    return 0;
})();
