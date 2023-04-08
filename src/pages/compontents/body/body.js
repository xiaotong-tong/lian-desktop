customElements.define(
	"xtt-body",
	class xttBodyElement extends HTMLBodyElement {
		#shadowRoot;

		constructor() {
			super();

			this.#shadowRoot = this.attachShadow({ mode: "open" });

			fetch(window.pages.srcPath + "pages/compontents/body/body.html")
				.then((res) => {
					return res.text();
				})
				.then((html) => {
					const template = document.createElement("template");
					template.innerHTML = html;

					this.#shadowRoot.appendChild(template.content);
				});
		}
	},
	{ extends: "body" }
);
