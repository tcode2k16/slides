<template>
<div class="warp">
<div class="bg">
  <div class="table">
    <div class="bowl">
      <div class="cable">
        <div class="leaf-1"></div>
        <div class="leaf-2"></div>
        <div class="leaf-3"></div>
        <div class="leaf-4"></div>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<style scoped>

.warp {
  margin: 13vh auto 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-shrink: 2;

}

.bg {
  position: relative;
  width: 300px;
  height: 300px;
}
.table {
  position: absolute;
  top: 200px;
  left: 50px;
  width: 200px;
  height: 10px;
  background: #fff;
}
.table::before {
  position: absolute;
  left: 50px;
  width: 10px;
  height: 100px;
  background: #fff;
  content: "";
  transform: rotate(30deg);
} 
.table::after {
  position: absolute;
  left: 140px;
  width: 10px;
  height: 100px;
  background: #fff;
  content: "";
  transform: rotate(-30deg);
} 
.bowl {
  position: absolute;
  top: -30px;
  left: 70px;
  width: 60px;
  height: 30px;
  background: #FEE225;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
}
.cable {
  position: absolute;
  top: -110px;
  left: 30px;
  width: 3px;
  height: 110px;
  background: #fff;
}
.leaf-1 {
  position: absolute;
  left: 2px;
  width: 30px;
  height: 20px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  background: #43C4BA;
  animation: voaa 1s infinite alternate ease-in-out;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
}
.leaf-2 {
  position: absolute;
  top: 25px;
  left: -30px;
  width: 30px;
  height: 20px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #43C4BA;
  animation: voaa 1s infinite alternate ease-in-out;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
}
.leaf-3 {
  position: absolute;
  top: 50px;
  left: 2px;
  width: 30px;
  height: 20px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  background: #43C4BA;
  animation: voaa 1s infinite alternate ease-in-out;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
}
.leaf-4 {
  position: absolute;
  top: 75px;
  left: -30px;
  width: 30px;
  height: 20px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #43C4BA;
  animation: voaa 1s infinite alternate ease-in-out;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
}

@keyframes voaa {
  0% {transform: translateY(0px)}
  50% {transform: translateY(2px)}
}

</style>
