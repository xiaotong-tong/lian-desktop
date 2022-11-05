import { createRouter, createWebHashHistory } from "vue-router";
import Live2d from "../page/live2d/live2d.vue";
import Msg from "../page/msg/msg.vue";

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
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
