function sortArray(itemsArray, sortingArr) {
    return itemsArray.sort((a: number, b: number) => sortingArr.indexOf(a) - sortingArr.indexOf(b));
}
