const expect = chai.expect;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateArray() {
    const arr = [];
    const randomLength = randomNumber(5, 100);

    for (let i = 0; i < randomLength; ++i) {
        arr[i] = randomNumber(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }

    return arr;
}

suite('Sorting Algorithms', () => {

    let arr = null;
    let sorted = null;

    setup(() => {
        arr = generateArray();
        sorted = arr.slice().sort((a, b) => a - b);
    });

    teardown(() => {
        //
    });

    const suites = [
        { title: 'Bubble Sort', func: 'bubbleSort', args: [() => { }] },
        { title: 'Quick Sort', func: 'quickSort', args: [() => { }] },
        // { title: 'Merge Sort', func: 'mergeSort', args: [0, ] }
    ];

    // Call func with params: any[], bind or call or apply
    for (let { title, func, args } of suites) {
        suite(title, () => {
            test('should return a sorted array', () => {
                window[func].call(null, arr, ...args);
                expect(arr).to.eql(sorted);
            });
        });
    }
});