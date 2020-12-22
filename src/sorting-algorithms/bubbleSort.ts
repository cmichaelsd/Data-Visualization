/**
 * Sorts a number array and uses a callback function to perserve animation information. 
 * 
 * @param arr number[]
 * @param cb (a: number, b: number) => void
 */
function bubbleSort(arr: number[], cb: (a: number, b: number) => void) {
    // For the number of elements (0 based index). 
    for (let i = 0; i < arr.length-1; ++i) {
        let swapped = false;
        // For the number of elements minus current iteration. 
        for (let j = 0; j < arr.length-i-1; ++j) {
            // Swap elements if current is greater than next. 
            if (arr[j] > arr[j+1]) {
                cb(j, j+1);

                swapped = true;

                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

        if (!swapped) {
            break;
        }
    }
}
