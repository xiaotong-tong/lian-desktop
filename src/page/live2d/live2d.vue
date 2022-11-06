<template>
	<canvas id="live2d" width="170" height="340" class="live2d"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const loadModel = (resourcePath, modelNames) => {
	live2dLoader.resourcesConfig.setResourcesPath(resourcePath);
	live2dLoader.resourcesConfig.setModelNames(modelNames);
	live2dLoader.start();
	window.msg.showMsg("【当前时间】");
};

onMounted(() => {
	loadModel("live2d/models/", ["nami"]);
});
</script>

<style>
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Helvetica, Arial, sans-serif;
	margin: 0;
	overflow: hidden;
	height: 290px;
}
.live2d {
	width: 170px;
	height: 320px;
}
</style>
