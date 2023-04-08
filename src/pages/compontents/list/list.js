customElements.define(
	"xtt-list",
	class xttListElement extends HTMLElement {
		static get observedAttributes() {
			return ["height-style"];
		}

		#templatePromise = {
			resolve: null,
			reject: null,
			promise() {
				return new Promise((resolve, reject) => {
					this.resolve = resolve;
					this.reject = reject;
				});
			}
		};

		#shadowRoot;

		constructor() {
			super();

			this.#templatePromise.promise();

			this.#shadowRoot = this.attachShadow({ mode: "open" });

			fetch(window.pages.srcPath + "pages/compontents/list/list.html")
				.then((res) => {
					return res.text();
				})
				.then((html) => {
					const template = document.createElement("template");
					template.innerHTML = html;

					this.#shadowRoot.appendChild(template.content);
					this.#templatePromise.resolve();
				});
		}

		get #container() {
			return this.#shadowRoot.querySelector("#container");
		}
		get #list() {
			return this.#shadowRoot.querySelector("#list");
		}

		attributeChangedCallback(name, oldValue, newValue) {
			this.#templatePromise.promise().then(() => {
				if (name === "height-style") {
					this.#list.classList.add(newValue);
				}
			});
		}
	}
);
