suite('State', () => {

    suite('#timeoutIds', () => {
        test('should be initialized as an empty array', () => {
            expect(State.timeoutIds).to.eql([]);
        });
    });

    suite('#iterations', () => {
        test('should be initialized as an empty array', () => {
            expect(State.iterations).to.eql([]);
        });
    });

    suite('#clientLanguage', () => {
        test('should be initialized as "en"', () => {
            expect(State.clientLanguage).to.equal('en');
        });
    });
});