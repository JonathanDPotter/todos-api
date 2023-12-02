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

class Routes extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const routes = await (
      await fetch("https://jp-todos-api-22f1a0f56308.herokuapp.com/routes")
    ).json();
    this.innerHTML = `<pre>${JSON.stringify(routes, undefined, 2)}</pre>`;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
customElements.define("routes-component", Routes);

const buttons = Array.from(document.getElementsByTagName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    window.open(button.dataset.href, "_blank").focus()
  );
});
