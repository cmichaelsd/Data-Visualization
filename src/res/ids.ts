namespace R {
    export const IDs: StringMap = {};
}

(function init(): void {
    const ids = document.querySelectorAll('*[id]');

    for (let item of ids) {
        R.IDs[item.id] = item.id;
    }
})();