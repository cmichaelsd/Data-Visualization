suite('Helpers', () => {

    suite('#checkNumberArrayIsSorted()', () => {
        let arr = null;

        setup(() => {
            arr = generateArray();
        });

        test('should correctly determine if a number array is unsorted', () => {
            expect(checkNumberArrayIsSorted(arr)).to.be.false;
        });

        test('should correctly determine if a number array is sorted', () => {
            const sorted = arr.sort((a, b) => a - b);

            expect(checkNumberArrayIsSorted(sorted)).to.be.true;
        });
    });
});