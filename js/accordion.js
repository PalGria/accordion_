class Accordion {
    constructor(data) {
        this.container = document.getElementById(data.container);
        this.container.classList += "custom__accordion"
        this.id = data.container;
        this.mainTitle = data.mainTitle;
        this.panels = data.panels;
        //Call to init and refresh accordion
        this.initAccordion();
    }
    onClick = (ev, i) => {
        if (document.getElementById(this.id + "panel__content" + i).style.display != "none") {
            document.getElementById(this.id + "panel__content" + i).style.display = "none";
        } else {
            document.getElementById(this.id + "panel__content" + i).style.display = "initial";
        }
    }
    createPanel = (panel, i) => {
            let domPanel = newElement("div", "accordion__panel", "panel" + i);
            domPanel.appendChild(newElement("h4", "panel__title", "", panel.title));
            domPanel.appendChild(newElement("h5", "panel__subtitle", "", panel.subtitle));
            //Button for collapse / uncollapse 
            let button = newElement("div", "panel__arrow", "", "<i class='material-icons'> keyboard_arrow_down </i>")
            button.addEventListener('click', ev => this.onClick(ev, i));
            domPanel.appendChild(button);
            domPanel.appendChild(newElement("div", this.id + "panel__content", this.id + "panel__content" + i, panel.content, "display:none"));
            return domPanel;
        }
        //This function inits and refresh the accordion
    initAccordion = () => {
        //First we clean the container
        this.container.innerHTML = "";
        //Then we add the title to the Accordion
        this.container.appendChild(newElement("div", "accordion__title", "", this.mainTitle));
        //First iterates the panels
        for (let i = 0; i < this.panels.length; i++) {
            let panel = this.panels[i];
            //for each panel we write in the DOM a new DIV, with the title, the subtitle, the content and the action button. 
            this.container.appendChild(this.createPanel(panel, i));
        }
    }
}