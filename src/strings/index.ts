// A map of strings used throughout the application.
const Strings: Readonly<StringMap> = {

    // Counts
    iterationsSpanText: 'Iterations: {0}',
    swaplessIterationsSpanText: 'Swapless Iterations: {0}',
    swapsSpanText: 'Swaps: {0}',

    // Action Item text
    columnsSpanText: 'Columns',
    beginSortingButtonText: 'Begin Sorting',
    ScrambleColumnsButtonText: 'Scramble Columns',
    bubbleSortOptionText: 'Bubble Sort',
    quickSortOptionText: 'Quick Sort'

};

Object.freeze(Strings);

/**
 * Formats strings with a list of variables. 
 * I.E. "Hello {0}{1}", "World", "!" = "Hellow World!"
 * 
 * @param format
 * @param args
 * @return string
 */
function format(format: string, ...args: any[]): string {
    return format.replace(/{(\d+)}/g, function(match: string, number: number | undefined) {
        return typeof args[number] !== 'undefined'
            ? args[number]
            : match;
    });
};