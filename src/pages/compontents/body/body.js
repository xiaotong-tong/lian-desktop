customElements.define(
	"xtt-body",
	class xttBodyElement extends HTMLBodyElement {
		#shadowRoot;
		#observer;

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

		constructor() {
			super();

			this.#shadowRoot = this.attachShadow({ mode: "open" });

			this.#templatePromise.promise();

			fetch(window.pages.srcPath + "pages/compontents/body/body.html")
				.then((res) => {
					return res.text();
				})
				.then((html) => {
					const template = document.createElement("template");
					template.innerHTML = html;

					this.#shadowRoot.appendChild(template.content);

					this.#templatePromise.resolve();
				});

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
			this.#templatePromise.promise().then(() => {});
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
