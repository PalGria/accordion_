class Accordion {
    constructor(data) {
        this.container = document.getElementById(data.container);
        this.mainTitle = data.mainTitle;
        this.panels = data.panels;
        //Call to init and refresh accordion
        this.initAccordion();
    }
    onClick = () => {
            console.log(this);
        }
        //This function inits and refresh the accordion
    initAccordion = () => {
        //First we add the title to the Accordion
        this.container.appendChild(newElement("h3", "accordion__title", "", this.mainTitle));
        //First iterates the panels
        for (let i = 0; i < this.panels.length; i++) {
            let panel = this.panels[i];
            //for each panel we write in the DOM a new DIV, with the title, the subtitle, the content and the action button. 
            let domPanel = newElement("div", "accordion__panel", "panel" + i);
            domPanel.appendChild(newElement("h4", "pannel__title", "", panel.title));
            domPanel.appendChild(newElement("h5", "pannel__subtitle", "", panel.subtitle));
            //Button for collapse / uncollapse 
            let button = newElement("div", "pannel__arrow", "", "<i class='material-icons'>&#xE87C;</i>")
            button.addEventListener('click', ev => this.onClick(ev));
            domPanel.appendChild(button);
            domPanel.appendChild(newElement("div", "pannel__content", "", panel.content));
            this.container.appendChild(domPanel);
        }
    }
}