suite('State', () => {

    const dataIteration = {
        action: 'iteration',
        payload: []
    };

    const dataSwap = {
        action: 'swap',
        payload: [1, 2]
    };

    function populateTimeoutIds() {
        for (let i = 0; i < 10; ++i) {
            State.setTimeoutIds(setTimeout(function () { }), 10);
        }
    }

    setup(() => {
        State.iterations = [];
        State.timeoutIds = [];
        State.clientLanguage = 'en';
    });

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

    suite('#clearIterations()', () => {
        test('should clear #iterations array when called', () => {
            State.setIterations(dataIteration);
            State.setIterations(dataSwap);
            State.setIterations(dataIteration);
            State.setIterations(dataIteration);
            State.setIterations(dataSwap);
            State.clearIterations();
            expect(State.iterations).to.eql([]);
        });
    });

    suite('#setTimeoutIds()', () => {        
        test('should add timeout ids to the #timeoutIds property', () => {
            populateTimeoutIds();
            expect(State.timeoutIds.length).to.equal(10);
        });
    });

    suite('#clearTimeoutIds()', () => {
        test('should clear timeout ids from the #timeoutIds property', () => {
            populateTimeoutIds();
            expect(State.timeoutIds.length).to.equal(10);
            State.clearTimeoutIds();
            expect(State.timeoutIds.length).to.equal(0);
        });
    });

    suite('#setClientLanguage()', () => {
        test('should set #clientLanguage property to a given string', () => {
            expect(State.clientLanguage).to.equal('en');
            State.setClientLanguage('test');
            expect(State.clientLanguage).to.equal('test');
        });
    });

    suite('#getClientLanguage()', () => {
        test('should get #clientLanguage property', () => {
            expect(State.getClientLanguage()).to.equal('en');
            State.setClientLanguage('test');
            expect(State.getClientLanguage()).to.equal('test');
        });
    });

});