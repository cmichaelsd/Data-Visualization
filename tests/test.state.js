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

    suite('#setIterations()', () => {
        test('should add empty array to #iterations property given an action of "ITERATION"', () => {
            const data = {
                action: 'iteration',
                payload: []
            };

            expect(State.iterations).to.eql([]);
            State.setIterations(data);
            expect(State.iterations).to.eql([[]]);
        });
    });
});