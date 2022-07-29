class CoutingButtom extends HTMLElement {
    constructor() {
        super();

        let button = document.createElement('button');
        button.innerHTML = 'Times Clicked: ';

        let count = document.createElement('output');
        button.append(count);
        
        let countNum = 0;
        count.textContent = countNum;

        button.addEventListener('click', () => {
            countNum++;
            count.textContent = countNum;
        });

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(button);
    }

}

customElements.define('button-count', CoutingButtom);