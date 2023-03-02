function editElement(element, partToReplace, nameForReplacement) {
    element.innerText = element.innerText.split(partToReplace).join(nameForReplacement);
}