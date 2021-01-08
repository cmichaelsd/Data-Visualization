function merge(arr: number[], leftIndex: number, middleIndex: number, rightIndex: number, cb: SortingCallback): void {
    const leftRange: number = middleIndex - leftIndex + 1;
    const rightRange: number = rightIndex - middleIndex;
    const leftArray: number[] = [];
    const rightArray: number[] = [];

    for (let i: number = 0; i < leftRange; ++i) {
        leftArray[i] = arr[leftIndex + i];
    }

    for (let i: number = 0; i < rightRange; ++i) {
        rightArray[i] = arr[middleIndex + 1 + i];
    }

    let leftArrayIndex: number = 0;
    let rightArrayIndex: number = 0;
    let arrayIndex: number = leftIndex;

    while (leftArrayIndex < leftRange && rightArrayIndex < rightRange) {
        if (leftArray[leftArrayIndex] <= rightArray[rightArrayIndex]) {
            arr[arrayIndex] = leftArray[leftArrayIndex];
            ++leftArrayIndex;
        } else {
            arr[arrayIndex] = rightArray[rightArrayIndex];
            ++rightArrayIndex;
        }

        ++arrayIndex;
    }

    while (leftArrayIndex < leftRange) {
        arr[arrayIndex] = leftArray[leftArrayIndex];
        ++leftArrayIndex;
        ++arrayIndex;
    }

    while (rightArrayIndex < rightRange) {
        arr[arrayIndex] = leftArray[rightArrayIndex];
        ++rightArrayIndex;
        ++arrayIndex;
    }
}

function mergeSort(arr: number[], leftIndex: number, rightIndex: number, cb: SortingCallback): void {
    if (leftIndex < rightIndex) {
        const middleIndex: number = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

        // Sort left
        mergeSort(arr, leftIndex, middleIndex, cb);
        // Sort right
        mergeSort(arr, middleIndex + 1, rightIndex, cb);
        // Merge
        merge(arr, leftIndex, middleIndex, rightIndex, cb);
    }
}