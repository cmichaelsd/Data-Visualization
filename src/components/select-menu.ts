/**
 * Create styled select menu
 */
function createSelectMenu(cb) {
    // Look for any elements with the class "select-menu":
    const selectMethod = document.getElementsByClassName('select-menu');

    for (let i = 0; i < selectMethod.length; ++i) {

        const selectElement = selectMethod[i].getElementsByTagName('select')[0];
        const selectedItem = document.createElement('div');
        const optionsList = document.createElement('div');
        // For each element, create a new DIV that will act as the selected item:
        selectedItem.setAttribute('class', 'select-selected');
        selectedItem.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
        selectMethod[i].appendChild(selectedItem);
        // For each element, create a new DIV that will contain the option list:
        optionsList.setAttribute('class', 'select-items select-hide');

        for (let j = 1; j < selectElement.length; ++j) {
            /** 
             * For each option in the original select element,
             * create a new DIV that will act as an option item: 
             */
            const optionItem = document.createElement('div');
            optionItem.innerHTML = selectElement.options[j].innerHTML;

            optionItem.addEventListener('click', function (e) {
                /**
                 * When an item is clicked, update the original select box,
                 * and the selected item: 
                 */
                const selectElement = (this.parentNode.parentNode as HTMLElement).getElementsByTagName('select')[0];
                const selectItem = (this.parentNode.previousSibling as HTMLElement);

                for (let i = 0; i < selectElement.length; ++i) {

                    if (selectElement.options[i].innerHTML === this.innerHTML) {
                        const sameSelect = (this.parentNode as HTMLElement).getElementsByClassName('same-as-selected');
                        selectElement.selectedIndex = i;
                        selectItem.innerHTML = this.innerHTML;

                        for (let k = 0; k < sameSelect.length; ++k) {
                            sameSelect[k].removeAttribute('class');
                        }

                        this.setAttribute('class', 'same-as-selected');
                        break;
                    }
                }
                
                cb(this);
                selectItem.click();
            });

            optionsList.appendChild(optionItem);
        }

        selectMethod[i].appendChild(optionsList);

        selectedItem.addEventListener('click', function (e) {
            /** 
             * When the select box is clicked, close any other select boxes, 
             * and open/close the current select box: 
             */
            e.stopPropagation();
            closeAllSelect(this);
            (this.nextSibling as HTMLElement).classList.toggle('select-hide');
            this.classList.toggle('select-arrow-active');
        });
    }
}


/**
 * A function that will close all select boxes in the document, 
 * except the current select box. 
 * 
 * @param element HTMLElement
 */
function closeAllSelect(element) {
    const arr = [];
    const selectItems = document.getElementsByClassName('select-items');
    const selectSelected = document.getElementsByClassName('select-selected');
    for (let i = 0; i < selectSelected.length; ++i) {
        if (element === selectSelected[i]) {
            arr.push(i)
        } else {
            selectSelected[i].classList.remove('select-arrow-active');
        }
    }
    for (let i = 0; i < selectItems.length; ++i) {
        if (arr.indexOf(i)) {
            selectItems[i].classList.add('select-hide');
        }
    }
}

/** 
 * If the user clicks anywhere outside the select box, 
 * then close all select boxes:
 */
document.addEventListener('click', closeAllSelect);