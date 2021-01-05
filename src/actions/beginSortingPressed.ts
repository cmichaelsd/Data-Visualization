/**
 * Begins sorting with currently selected sorting method. 
 */
function beginSorting(): void {
    const arr: number[] = nodeListToNumberArray();
    const selectMenu: HTMLSelectElement = document.getElementById('sortingMethod') as HTMLSelectElement;
    const selectMethod: string = selectMenu.options[selectMenu.selectedIndex].value;
    let sortFunction: SortingFunction = null;

    switch(selectMethod) {
        case 'bubbleSort':
        case 'quickSort':
            sortFunction = window[selectMethod];
            break;
        default:
            // Value from select menu is invalid, return from function. 
            return;
    }

    if (!checkNumberArrayIsSorted(arr)) {
        // Disable begin sorting button.
        toggleButtonDisabled('beginSortingButton', true);
        // Begin selected sort function on columns. 
        sortFunction(arr, (data: SortAnimationAction): void => {
            /**
             * Will record each iteration
             * Not every iteration will include a swapping of values
             * 
             * Could build an array, index is iteration
             * Swap order isnt always based on iteration variable (let i = 0)
             * 
             * I.E. 
             * let i = 0;
             * let j = 0;
             * for i is 1 {
             *     for j is 9 {
             *         swap() iteration: 9 swap: [2,3]
             *     }
             *     swap() iteration: 9 swap: [4,5]
             * }
             * 
             * Nested swaps should happen before swap after nested for loop, if based on iteration variable (let i = 0)
             * this would happen out of order.
             * 
             * For sake of animation this swap should happen with the last declared iteration (let j = 0)
             * so animation happens in order and iterations are still the correct number.
             * 
             * Solution: hoist for loop iteration variable declaration, access nested for loop iteration variable in parent scope
             * and append parent swap to same iteration of previous child for loop variable.
             * Issue: The above solution isnt true, j will reset to zero, there must be a running total of all iterations
             * Solution: I could always push to iterations at head of nested loop and then append at the last index of iterations
             * array
             */

            setIterations(data);
        });
        
        processIterationAnimations();
    }
}