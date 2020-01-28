function newElement(tagName, className, id, innerHTML, style) {
    //this function creates a new element with the parameters.
    let ele = document.createElement(tagName);
    ele.id = id ? id : "";
    ele.className = className ? className : "";
    ele.innerHTML = innerHTML ? innerHTML : "";
    ele.style = style ? style : ele.style;

    return ele;
}