<template>
	<div class="text textborder2">
		<div class="textContent"></div>
	</div>
</template>

<script setup></script>

<style>
body {
	margin: 0;
}

.text {
	position: absolute;
	box-sizing: border-box;
	width: 200px;
	height: 150px;
	padding: 0.8em;
	font-size: 12px;
	overflow: hidden;
}

.textborder2 {
	background-color: #fff;
}
.textborder2::before,
.textborder2::after {
	content: "";
	position: absolute;
	border: thin solid;
}
.textborder2::before {
	inset: 2px;
	border-image: linear-gradient(
			-45deg,
			#333 0%,
			#ddd 40%,
			transparent 40%,
			transparent 60%,
			#ddd 60%,
			#333
		)
		1;
}
.textborder2::after {
	inset: 5px;
	border-image: linear-gradient(
			-45deg,
			transparent 1%,
			#333 1%,
			#ddd 20%,
			transparent 20%,
			transparent 70%,
			#ddd 70%,
			#333 99%,
			transparent 99%,
			transparent
		)
		1;
}
</style>
