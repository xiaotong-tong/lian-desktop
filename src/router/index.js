import { createRouter, createWebHashHistory } from "vue-router";
import Live2d from "../page/live2d/live2d.vue";
import Msg from "../page/msg/msg.vue";
import Home from "../page/main/home.vue";

const routes = [
	{
		path: "/live2d",
		name: "Live2d",
		component: Live2d
	},
	{
		path: "/msg",
		name: "Msg",
		component: Msg
	},
	{
		path: "/home",
		name: "Home",
		component: Home
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
