customElements.define(
	"xtt-l-link",
	class lianLinkElement extends HTMLElement {
		#shadowRoot;

		static get observedAttributes() {
			return ["href"];
		}

		constructor() {
			super();

			this.#shadowRoot = this.attachShadow({ mode: "open" });

			const template = document.createElement("template");
			template.innerHTML = `<a id="link" part="link"><slot></slot></a>`;

			this.#shadowRoot.appendChild(template.content);

			this.#linkHandlerEvent();
		}

		get #link() {
			return this.#shadowRoot.querySelector("#link");
		}

		connectedCallback() {}

		#linkHandlerEvent() {
			const link = this.#link;

			link.addEventListener("click", (e) => {
				e.preventDefault();
				if (!this.href) {
					return;
				}
				window.pages.changePage(this.href);
			});
		}

		get href() {
			return this.getAttribute("href");
		}
		set href(value) {
			if (value === null) {
				this.removeAttribute("href");
				return;
			}

			this.setAttribute("href", value);
		}
	}
);
