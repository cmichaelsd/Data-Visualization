/**
 * Partitions and swaps elements based on a low and high input, a callback is used to
 * perserve animation data.
 * 
 * @param arr number[]
 * @param low number
 * @param high number
 * @param cb (a: number, b: number) => void
 * @return number
 */
function partition(
    arr: number[], 
    low: number, 
    high: number, 
    cb: (a: number, b: number) => void
): number {
    const x: number = arr[high];
    let i: number = (low - 1);

    for (let j: number = low; j <= high-1; ++j) {
        if (arr[j] <= x) {
            ++i;

            cb(i, j);

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    cb(i+1, high);

    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];

    return (i+1);
}

/**
 * Sorts a number array and uses a callback function to perserve animation information. 
 * 
 * @param arr number[]
 * @param cb (a: number, b: number) => void
 */
function quickSort(arr, cb: (a: number, b: number) => void) {
    if (arr.length <= 1) {
        return;
    }
    
    // Create an auxiliary stack
    const stack: number[] = [];
    let low: number = 0;
    let high: number = arr.length-1;
    let top: number = -1;

    // Add low and high to stack
    top += 1;
    stack[top] = low;
    top += 1;
    stack[top] = high;

    // While items on stack
    while (top >= 0) {
        // Pop low and high
        high = stack[top];
        top -= 1;
        low = stack[top];
        top -= 1;

        const p: number = partition(arr, low, high, cb);

        if (p-1 > low) {
            top += 1;
            stack[top] = low;
            top += 1;
            stack[top] = p-1;
        }

        if (p+1 < high) {
            top += 1;
            stack[top] = p+1;
            top += 1;
            stack[top] = high;
        }
    }
}