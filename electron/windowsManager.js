const { BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");

function debounce(fn, sleep) {
	let timer = null;
	return function () {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, sleep);
	};
}

class WindowsManager {
	static #positionFile = path.join(__dirname, "./data/position.json");
	static #sizeFile = path.join(__dirname, "./data/size.json");

	static #live2d;
	static #msg;
	static #main;

	static init() {
		this.loadLive2d();
		this.loadMsg();
		this.loadMain();
	}

	static loadLive2d() {
		let position;
		try {
			position = JSON.parse(
				fs.readFileSync(this.#positionFile).toString() || "{}"
			);
		} catch (error) {
			position = {};
		}

		this.#live2d = new BrowserWindow({
			width: 180,
			height: 300,
			// width: 900,
			// height: 600,
			x: position?.live2d?.[0],
			y: position?.live2d?.[1],
			icon: path.join(__dirname, "../lian.ico"),
			frame: false, // 无框窗口
			transparent: true,
			resizable: false,
			webPreferences: {
				preload: path.join(__dirname, "proload/live2d/preload.js"),
				nodeIntegration: true,
				webviewTag: true
			}
		});

		// 窗口置顶
		this.#live2d.setAlwaysOnTop(true);

		// 不遮挡底部事件
		this.#live2d.setIgnoreMouseEvents(false, { forward: true });

		// 隐藏任务栏图标
		this.#live2d.setSkipTaskbar(true);

		this.#live2d.loadFile(
			path.join(__dirname, "../src/pages/live2d/live2d.html")
		);

		// this.#live2d.webContents.openDevTools();
	}

	static loadMsg() {
		let position;
		try {
			position = JSON.parse(
				fs.readFileSync(this.#positionFile).toString() || "{}"
			);
		} catch (error) {
			position = {};
		}

		this.#msg = new BrowserWindow({
			// width: 600,
			// height: 300,
			width: 210,
			height: 160,
			x: position?.msg?.[0],
			y: position?.msg?.[1],
			frame: false,
			transparent: true,
			resizable: false,
			webPreferences: {
				preload: path.join(__dirname, "proload/msg/msgload.js"),
				nodeIntegration: true
			}
		});

		this.#msg.setSkipTaskbar(true);
		this.#msg.setAlwaysOnTop(true);
		this.#msg.setIgnoreMouseEvents(false, { forward: true });
		this.#msg.loadFile(path.join(__dirname, "../src/pages/msg/msg.html"));
		// this.#msg.hide();
		// 打开调试面板
		// this.#msg.webContents.openDevTools();
	}

	static loadMain() {
		let position;
		let size;
		try {
			position = JSON.parse(
				fs.readFileSync(this.#positionFile).toString() || "{}"
			);
		} catch (error) {
			position = {};
		}

		try {
			size = JSON.parse(fs.readFileSync(this.#sizeFile).toString() || "{}");
		} catch (error) {
			size = {};
		}

		this.#main = new BrowserWindow({
			width: size?.width ?? 800,
			height: size?.height ?? 500,
			x: position?.main?.[0],
			y: position?.main?.[1],
			// frame: false,
			frame: true,
			resizable: true,
			webPreferences: {
				preload: path.join(__dirname, "proload/main/mainload.js"),
				nodeIntegration: true
			}
		});

		this.#main.setSkipTaskbar(true);
		// this.#main.setAlwaysOnTop(true);
		this.#main.setIgnoreMouseEvents(false, { forward: true });
		this.#main.loadFile(path.join(__dirname, "../src/pages/main/home.html"));

		this.#main.hide();
		// 打开调试面板
		this.#main.webContents.openDevTools();

		// 监听窗口的 resize 事件
		this.#main.on("resize", () => {
			// 将窗口大小保存为 JSON 文件
			const data = {
				width: this.#main.getSize()[0],
				height: this.#main.getSize()[1]
			};
			const jsonData = JSON.stringify(data);
			fs.writeFileSync(this.#sizeFile, jsonData);
		});
	}

	static changeMainPage(pageName) {
		this.#main.loadFile(
			path.join(__dirname, `../src/pages/main/${pageName}.html`)
		);
	}

	static getWinID(winName = "live2d") {
		if (winName === "live2d") {
			return this.#live2d.id;
		} else if (winName === "msg") {
			return this.#msg.id;
		} else if (winName === "main") {
			return this.#main.id;
		}
	}

	static getWinPosition(winName = "live2d") {
		if (winName === "live2d") {
			return this.#live2d.getPosition();
		} else if (winName === "msg") {
			return this.#msg.getPosition();
		} else if (winName === "main") {
			return this.#main.getPosition();
		}
	}

	static #writePosition(winName, x, y) {
		fs.readFile(this.#positionFile, (err, data) => {
			fs.mkdirSync(path.join(__dirname, "./data"), { recursive: true });
			let position = JSON.parse(data?.toString() || "{}");
			position[winName] = [x, y];
			fs.writeFileSync(this.#positionFile, JSON.stringify(position));
		});
	}
	static #writePositionTemp = debounce(this.#writePosition, 2000);

	static setWinPosition(winName = "live2d", x, y) {
		this.#writePositionTemp(winName, x, y);

		if (winName === "live2d") {
			return this.#live2d.setPosition(x, y);
		} else if (winName === "msg") {
			return this.#msg.setPosition(x, y);
		} else if (winName === "main") {
			return this.#main.setPosition(x, y);
		}
	}

	static hideWin(winName = "live2d") {
		if (winName === "live2d") {
			return this.#live2d.hide();
		} else if (winName === "msg") {
			return this.#msg.hide();
		} else if (winName === "main") {
			return this.#main.hide();
		}
	}

	static showWin(winName = "live2d") {
		if (winName === "live2d") {
			return this.#live2d.show();
		} else if (winName === "msg") {
			return this.#msg.show();
		} else if (winName === "main") {
			return this.#main.show();
		}
	}
}

module.exports = {
	WindowsManager
};
