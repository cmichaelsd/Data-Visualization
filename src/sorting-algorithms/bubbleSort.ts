/**
 * Sorts a number array and uses a callback function to perserve animation information. 
 * 
 * @param arr number[]
 * @param cb SortingCallback
 */
function bubbleSort(arr: number[], cb: SortingCallback): void {
    if (arr.length <= 1 || arr === undefined || arr === null) {
        return;
    }

    // For the number of elements (0 based index). 
    for (let i: number = 0; i < arr.length-1; ++i) {
        let swapped: boolean = false;
        // For the number of elements minus current iteration. 
        for (let j: number = 0; j < arr.length-i-1; ++j) {
            // Swap elements if current is greater than next. 
            if (arr[j] > arr[j+1]) {
                cb({
                    action: "swap",
                    payload: [j, j+1]
                });

                swapped = true;

                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
            
            cb({ action: "iteration" });
        }

        if (!swapped) {
            break;
        }
    }
}
