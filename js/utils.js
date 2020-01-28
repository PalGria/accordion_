function newElement(tagName, className, id, innerHTML) {
    //this function creates a new element with the parameters.
    let ele = document.createElement(tagName);
    ele.id = id ? id : "";
    ele.className = className ? className : "";
    ele.innerHTML = innerHTML ? innerHTML : "";
    return ele;
}