<template>
  <!--from http://codepen.io/paulrrdiaz/pen/zGyoaW-->
  <div id="logo">
    <div id="tower-1"></div>
    <div id="tower-2"></div>
    <div id="tower-3"></div>
    <div id="wall"></div>
    <div id="floor"></div>
    <div id="cloud"></div>
  </div>
</template>

<style>

#logo {
	position: relative;
  display: block;
	width: 128px;
	height: 110px;
	margin: -20vh auto 0;
}

#logo > * {
	position: absolute;
	background: #fff;
}

#tower-1 {
	bottom: 5px;
	left: 5px;
	width: 34px;
	height: 60px;
	transform: perspective(10em) rotateX(-150deg);
}

#tower-1:before {
	content: '';
	position: absolute;
	top: 60px;
	left: 0;
	width: 0px;
	height: 0px;
	border-radius: 0 0 5px 0;
	border-top: 5px #fff solid;
	border-left: 0 transparent solid;
	border-right: 34px #fff solid;
	border-bottom: 25px transparent solid;
	animation: bounce 1s infinite 0.5s;
}

#tower-2 {
	bottom: 5px;
	left: 50px;
	width: 34px;
	height: 70px;
	transform: perspective(10em) rotateX(-150deg);
}

#tower-2:before {
	content: '';
	position: absolute;
	top: 70px;
	left: 0;
	width: 0px;
	height: 0px;
	border-radius: 0 0 5px 0;
	border-top: 5px #fff solid;
	border-left: 0 transparent solid;
	border-right: 34px #fff solid;
	border-bottom: 25px transparent solid;
	animation: bounce 1s infinite 1s;
}

#tower-3 {
	bottom: 5px;
	left: 95px;
	width: 26px;
	height: 120px;
	border-radius: 5px;
	transform: perspective(10em) rotateX(-150deg);
	animation: shake 2s infinite;
}

#wall {
	width: 80px;
	height: 50px;
	bottom: 10px;
	left: 20px;
}

#floor {
	bottom: 0;
	left: 0;
	width: 128px;
	height: 10px;
}

#cloud {
	top: -10px;
	right: 5px;
	width: 30px;
	height: 20px;
	opacity: 0;
	border-radius: 50%;
	animation: cloud 2s infinite 1.6s;
}

#cloud:before {
	content: '';
	position: absolute;
	top: 3px;
	left: -4px;
	background: #fff;
	width: 20px;
	height: 10px;
	border-radius: 40%;
}

#cloud:after {
	content: '';
	position: absolute;
	top: 5px;
	right: -3px;
	background: #fff;
	width: 15px;
	height: 12px;
	border-radius: 60%;
}

</style>
