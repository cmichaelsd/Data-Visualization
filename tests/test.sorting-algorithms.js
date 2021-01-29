function sortingCallback() { }

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
        { title: 'Bubble Sort', func: 'bubbleSort', args: [sortingCallback] },
        { title: 'Quick Sort', func: 'quickSort', args: [sortingCallback] }
    ];

    for (let { title, func, args } of suites) {
        suite(title, () => {
            test('should return a sorted array', () => {
                // Additional arguments can be dynamically supplied 
                window[func].call(this, arr, ...args);
                expect(JSON.stringify(arr)).to.equal(JSON.stringify(sorted));
            });
        });
    }
});