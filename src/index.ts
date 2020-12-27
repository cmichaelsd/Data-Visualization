type NumberTupleLengthTwo = [number, number];

type SortingCallback = (data: SortAnimationAction) => void;

type SortingFunction = (arr: number[], cb: SortingCallback) => void;

interface SortAnimationAction {
    action: string;
    payload?: NumberTupleLengthTwo;
};

/**
 * Driver function for the program. 
 */
(function main(): number {
    generateColumns(10);

    return 0;
})();
