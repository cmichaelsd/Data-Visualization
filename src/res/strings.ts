namespace R {
    // An enum of strings used throughout the application.
    export enum Strings {
        // English
        // Counts
        iterationsSpanText = 'Iterations: {0}',
        swaplessIterationsSpanText = 'Swapless Iterations: {0}',
        swapsSpanText = 'Swaps: {0}',

        // Action Item Text
        columnsSpanText = 'Columns',
        beginSortingButtonText = 'Begin Sorting',
        ScrambleColumnsButtonText = 'Scramble Columns',
        bubbleSortOptionText = 'Bubble Sort',
        quickSortOptionText = 'Quick Sort',


        // Korean
        // Counts
        iterationsSpanText_kr = '반복: {0}',
        swaplessIterationsSpanText_kr = '무교체 반복: {0}',
        swapsSpanText_kr = '교체: {0}',

        // Action Item Text
        columnsSpanText_kr = '막대',
        beginSortingButtonText_kr = '분류',
        ScrambleColumnsButtonText_kr = '셔플',
        bubbleSortOptionText_kr = '버블 정렬',
        quickSortOptionText_kr = '퀵 정렬',
    };
     
    export namespace Strings {
        /**
         * Gets string resouces from the string object and handles clients browser language.
         * 
         * @param key string
         * @return string
         */
        export function getString(value: string): string {
            /**
             * This function could either be large in time or space. I chose time.
             * I could make a mirror image of the Strings object and by value get key and see if
             * key has a match for browser language in constant time.
             */
            if (value === null || value === undefined) {
                return '';
            }

            const language: string = State.getClientLanguage();

            if (language !== 'en') {

                // Reverse-mapping for string enums does not currently exist native to TS.
                for (let key in Strings) {
                    const regionalKey: string = `${key}_${language}`;

                    if (Strings[key] === value && Strings[regionalKey]) {
                        return Strings[`${key}_${language}`];
                    }
                }
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
        export function format(format: string, ...args: any[]): string {
            if (format === null || format === undefined) {
                return '';
            }

            return format.replace(/{(\d+)}/g, function (match: string, number: number) {
                return args[number];
            });
        };
    }
}

(function init(): void {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('bindString');

    for (let i: number = 0; i < elements.length; ++i) {
        const element = elements[i] as HTMLOptionElement;
        const initialValue: string = element.dataset.initialValue;
        const stringKey: string = element.textContent.slice(1, element.textContent.length);
        const content: string = initialValue ?
            R.Strings.format(
                R.Strings.getString(R.Strings[stringKey]),
                initialValue
            )
            : R.Strings.getString(R.Strings[stringKey]);

        element.innerHTML = content;
    }
})();