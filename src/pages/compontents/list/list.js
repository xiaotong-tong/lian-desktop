const templateContent = `<link rel="stylesheet" href="../../compontents/list/list.css">
<div type="container" id="container">
	<ul type="list" id="list">
	<slot></slot>
	</ul>
</div>
`;

customElements.define(
	"xtt-list",
	class xttListElement extends HTMLElement {
		static template() {
			const template = document.createElement("template");
			template.innerHTML = templateContent;

			return template.content.cloneNode(true);
		}

		static get observedAttributes() {
			return ["height-style"];
		}

		#shadowRoot;
		#observer;

		constructor() {
			super();

			this.#shadowRoot = this.attachShadow({ mode: "open" });
			this.#shadowRoot.appendChild(xttListElement.template());

			this.#observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					this.#setListHeight(mutation.addedNodes);
				});
			});
		}

		get #container() {
			return this.#shadowRoot.querySelector("#container");
		}
		get #list() {
			return this.#shadowRoot.querySelector("#list");
		}

		attributeChangedCallback(name, oldValue, newValue) {
			if (name === "height-style") {
				this.#list.classList.add(newValue);
			}
		}

		connectedCallback() {
			this.#observer.observe(this, {
				childList: true
			});
		}

		#setListHeight(lists) {
			if (!this.#list.classList.contains("waterfall")) {
				return;
			}

			lists.forEach((list) => {
				const height = list.offsetHeight;
			});
		}
	}
);
