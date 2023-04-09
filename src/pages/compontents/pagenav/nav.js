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

					this.#listHandlerEvent();
				});
		}

		get #list() {
			return this.#shadowRoot.querySelector("#list");
		}

		connectedCallback() {
			this.classList.add("xtt-can-drag");
		}

		#listHandlerEvent() {
			const list = this.#list;

			list.addEventListener("click", (e) => {
				if (e.target.tagName.toLowerCase() === "xtt-nav-item") {
					window.pages.changePage(e.target.getAttribute("to"));
				}
			});
		}
	}
);
