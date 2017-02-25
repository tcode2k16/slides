<template>
<!--from http://codepen.io/orrybaram/pen/NqvVeX?editors=1100-->
<div class="warp">
  <div class="earth">
    <div class="earth--shadow"></div>
  </div>
</div>

</template>

<style scoped>

.earth {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #3380B5;
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 2;
  box-shadow: inset -30px 0 rgba(0, 0, 0, 0.2), 0 0 0 120px rgba(20, 106, 221, 0.1), 0 0 0 300px rgba(20, 106, 221, 0.1), 0 0 0 500px rgba(20, 106, 221, 0.1);
}

/* Land */
.earth:before {
  content: "";
  position: absolute;
  background: #85C567;
  height: 30px;
  width: 75px;
  left: 0;
  top: 50px;
  display: block;
  border-radius: 40px;
  -webkit-animation: rotateElement linear 25s infinite;
          animation: rotateElement linear 25s infinite;
  box-shadow: 0px 75px 0 -5px #85C567, 5px 35px 0 -3px #85C567, 35px 125px 0 -9px #85C567, 120px -15px 0 -7px #85C567, 135px -55px 0 -9px #85C567, 150px 25px 0 7px #85C567, 220px 70px 0 -2px #85C567, 235px -35px 0 -3px #85C567, 280px 85px 0 3px #85C567, 320px 30px 0 1px #85C567, 400px 0 0 0 #85C567, 400px 75px 0 -5px #85C567, 405px 35px 0 -3px #85C567, 435px 125px 0 -9px #85C567, 520px -15px 0 -7px #85C567, 535px -55px 0 -9px #85C567, 550px 25px 0 7px #85C567, 620px 70px 0 -2px #85C567, 635px -35px 0 -3px #85C567, 680px 85px 0 3px #85C567, 720px 30px 0 1px #85C567;
}

/* Clouds */
.earth:after {
  content: "";
  position: absolute;
  background: white;
  height: 20px;
  width: 60px;
  left: 0px;
  top: 50px;
  display: block;
  border-radius: 40px;
  -webkit-animation: rotateElement linear 15s infinite;
          animation: rotateElement linear 15s infinite;
  box-shadow: 10px 50px 0 3px white, 50px -15px 0 2px white, 70px 70px 0 -1px white, 100px 25px 0 1px white, 110px 105px 0 -4px white, 140px 75px 0 -3px white, 250px -25px 0 -1px white, 210px 50px 0 1px white, 340px 130px 0 1px white, 400px 0px 0 0 white, 410px 50px 0 3px white, 500px 25px 0 1px white, 450px -15px 0 2px white, 470px 70px 0 -1px white, 540px 75px 0 -3px white, 510px 105px 0 -4px white, 650px -25px 0 -1px white, 610px 50px 0 1px white, 740px 130px 0 1px white;
}

.earth--shadow {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  background-color: transparent;
  z-index: 4;
  box-shadow: inset -30px 0 rgba(0, 0, 0, 0.1);
}

@-webkit-keyframes rotateElement {
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(-400px, 0);
            transform: translate(-400px, 0);
  }
}

@keyframes rotateElement {
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(-400px, 0);
            transform: translate(-400px, 0);
  }
}

.warp {
  width: 100vw;
  height: 70vh;
  align-items: center;
}

</style>
