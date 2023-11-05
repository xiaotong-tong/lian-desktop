import style from "./body.css" assert { type: "css" };

customElements.define(
	"xtt-body",
	class xttBodyElement extends HTMLBodyElement {
		#shadowRoot;
		#observer;

		constructor() {
			super();

			this.#shadowRoot = this.attachShadow({ mode: "open" });

			const template = document.createElement("template");
			template.innerHTML = `
					<slot name="nav"></slot>
					<slot name="main"></slot>
					<slot></slot>`;

			this.#shadowRoot.appendChild(template.content);

			this.#shadowRoot.adoptedStyleSheets = [style];

			this.#observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === "childList") {
						mutation.addedNodes.forEach((node) => {
							if (node.nodeType === 1) {
								this.#setDefaultSlot(node);
							}
						});
					}
				});
			});
		}

		connectedCallback() {
			this.#observer.observe(this, {
				childList: true
			});
		}

		#setDefaultSlot(el) {
			if (el.getAttribute("slot")) {
				return;
			}
			if (el.tagName.toLowerCase() === "xtt-page-nav") {
				el.slot = "nav";
			} else if (el.tagName.toLowerCase() === "main") {
				el.slot = "main";
			}
		}
	},
	{ extends: "body" }
);
