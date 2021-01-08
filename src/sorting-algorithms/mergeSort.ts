/**
 * Sorts a number array and uses a callback function to perserve animation information.
 * 
 * @param arr number[]
 * @param cb SortingCallback
 */
function mergeSort(arr, cb: SortingCallback) {
    if (arr.length > 1) {
        const middleIndex = Math.floor(arr.length / 2);

        const left = arr.slice(0, middleIndex);
        const right = arr.slice(middleIndex, arr.length);

        mergeSort(left, cb);
        mergeSort(right, cb);

        let i = 0;
        let j = 0;
        let k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                arr[k] = left[i];
                ++i;
            } else {
                arr[k] = right[j];
                ++j;
            }

            ++k;
        }

        while (i < left.length) {
            arr[k] = left[i];
            ++i;
            ++k;
        }

        while (j < right.length) {
            arr[k] = right[j];
            ++j;
            ++k;
        }
    }
}