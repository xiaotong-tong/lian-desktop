customElements.define(
	"xtt-page-nav",
	class xttPageNavElement extends HTMLElement {
		#shadowRoot;

		constructor() {
			super();

			this.#shadowRoot = this.attachShadow({ mode: "open" });

			fetch(window.pages.srcPath + "pages/compontents/pagenav/nav.html")
				.then((res) => {
					return res.text();
				})
				.then((html) => {
					const template = document.createElement("template");
					template.innerHTML = html;

					this.#shadowRoot.appendChild(template.content);
				});
		}

		connectedCallback() {
			this.classList.add("xtt-can-drag");
		}
	}
);
