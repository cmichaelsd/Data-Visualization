/**
 * Begins sorting with currently selected sorting method. 
 */
function beginSorting(): void {
    const arr: number[] = nodeListToNumberArray();
    const iterationAnimations: SortAnimationAction[] = [];
    const swapAnimations: SortAnimationAction[] = [];
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
        sortFunction(arr, (data: SortAnimationAction) => {
            if (data.action === 'swap') {
                swapAnimations.push(data);
                processSwapAnimations(data.payload, swapAnimations.length - 1);
            }

            if (data.action === 'iteration') {
                iterationAnimations.push(data);
                processIterationAnimations(iterationAnimations.length - 1);
            }
        });
    }
}