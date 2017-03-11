<template>

<svg xmlns="http://www.w3.org/2000/svg" width="466" height="466" id="YinYang">
	<circle cx="233" cy="233" r="231"/>
	<path d="M 233,459 a 226 226 0 0 1 0,-452 a 113 113 0 0 1 0,226 z" fill="#fff"/>
	<circle cx="233" cy="346" r="113" fill="#000"/>
	<circle cx="233" cy="120" r="30"/>
	<circle cx="233" cy="346" r="30" fill="#fff"/>
</svg>

</template>

<style>

#YinYang {
	display: block;
	position: relative;
	transform: rotate(0deg) scale(0.5);
}

.animation.anim1 #YinYang{
	animation: spin 1s ease normal;
  animation-fill-mode: forwards;
}

</style>
