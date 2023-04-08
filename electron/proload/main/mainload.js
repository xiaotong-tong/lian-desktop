const { ipcRenderer, contextBridge } = require("electron");
const fs = require("fs");

const showMsg = async (msg) => {
	const winID = await ipcRenderer.invoke("getWindowID", "msg");
	ipcRenderer.sendTo(winID, "show-message", msg);
};
contextBridge.exposeInMainWorld("msg", {
	showMsg: showMsg
});

const changePage = async (pageName) => {
	ipcRenderer.send("changeMainPage", pageName);
};
contextBridge.exposeInMainWorld("pages", {
	changePage: changePage
});

let dragging = false;
let mouseX = 0;
let mouseY = 0;
window.addEventListener("mousedown", (e) => {
	dragging = true;
	const { pageX, pageY } = e;
	mouseX = pageX;
	mouseY = pageY;

	changePosition = async (e) => {
		document.documentElement.style.opacity = ".6";
		if (dragging) {
			const { pageX, pageY } = e;
			const pos = await ipcRenderer.invoke("getWinPosition", "main");
			pos[0] = pos[0] + pageX - mouseX;
			pos[1] = pos[1] + pageY - mouseY;
			ipcRenderer.send("setWinPosition", "main", pos[0], pos[1]);
		}
	};

	window.addEventListener("mousemove", changePosition);

	window.addEventListener("mouseup", () => {
		dragging = false;
		document.documentElement.style.opacity = "1";
		window.removeEventListener("mousemove", changePosition);
	});
});