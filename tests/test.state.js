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
        const dataIteration = {
            action: 'iteration',
            payload: []
        };

        const dataSwap = {
            action: 'swap',
            payload: [1, 2]
        };

        setup(() => {
            State.iterations = [];
        });

        test('should add empty array to #iterations property given an action of "ITERATION"', () => {
            expect(State.iterations).to.eql([]);
            State.setIterations(dataIteration);
            expect(State.iterations).to.eql([[]]);
        });

        test('should add swap tuple to #iterations property correctly given an action of "SWAP"', () => {
            State.setIterations(dataIteration);
            expect(State.iterations).to.eql([[]]);
            State.setIterations(dataSwap);
            expect(State.iterations).to.eql([[[1, 2]]]);
        });
    });
});