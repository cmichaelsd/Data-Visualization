// A map of strings used throughout the application.
const Strings: Readonly<StringMap> = {

    // English
    // Counts
    iterationsSpanText: 'Iterations: {0}',
    swaplessIterationsSpanText: 'Swapless Iterations: {0}',
    swapsSpanText: 'Swaps: {0}',

    // Action Item text
    columnsSpanText: 'Columns',
    beginSortingButtonText: 'Begin Sorting',
    ScrambleColumnsButtonText: 'Scramble Columns',
    bubbleSortOptionText: 'Bubble Sort',
    quickSortOptionText: 'Quick Sort',

    // Korean
    iterationsSpanText_kr: 'test',
};

Object.freeze(Strings);

/**
 * Gets string resouces from the string object and handles clients browser language.
 * 
 * @param key string
 * @return string
 */
function getString(value: string): string {
    /**
     * This function could either be large in time or space. I chose time.
     * I could make a mirror image of the Strings object and by value get key and see if
     * key has a match for browser language in constant time.
     */
    const language = getClientLanguage();

    if (language !== 'en') {
        let currentKey = null;

        for (let key in Strings) {
            if (Strings[key] === value) {
                currentKey = key;
            }
        }

        return Strings[`${currentKey}_${language}`] || value;
    }

    return value;
}

/**
 * Formats strings with a list of variables. 
 * I.E. "Hello {0}{1}", "World", "!" = "Hellow World!"
 * 
 * @param format string
 * @param args any[] 
 * @return string
 */
function format(format: string, ...args: any[]): string {
    return format.replace(/{(\d+)}/g, function(match: string, number: number) {
        return args[number];
    });
};