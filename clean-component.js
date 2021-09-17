class CleanComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const raiz = document.createElement("span");
    raiz.setAttribute("class", "raiz");

    const style = document.createElement("style");
    style.textContent = `
        .raiz {
            background-color: tomato;
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
    `;

    shadow.appendChild(style);
    shadow.appendChild(raiz);
  }
}

customElements.define("clean-component", CleanComponent);
