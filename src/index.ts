type NumberTupleLengthTwo = [number, number];

type SortingCallback = (data: SortAnimationAction) => void;

type SortingFunction = (arr: number[], cb: SortingCallback) => void;

interface SortAnimationAction {
    action: string;
    payload?: NumberTupleLengthTwo;
};

let global = {
    delay: Number((document.getElementById('delayAmount') as HTMLInputElement).value)
};

/**
 * Driver function for the program. 
 */
(function main(): number {
    generateColumns(10);

    return 0;
})();
