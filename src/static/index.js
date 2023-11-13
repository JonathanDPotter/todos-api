class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkName = this.getAttribute("link-name") || "broken";
    this.innerHTML = `
    <header>
      <h1>Todo API</h1>
            <a href="/${linkName}">${linkName}</a>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <span>Jonathan Potter 2023</span>

    </footer>`;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);

const routes = { "/": { GET: "Returns the home page." } };

const routesContainer = document.getElementsByTagName("pre")[0];
routesContainer.textContent = JSON.stringify(routes);

const buttons = Array.from(document.getElementsByTagName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    window.open(button.dataset.href, "_blank").focus()
  );
});
