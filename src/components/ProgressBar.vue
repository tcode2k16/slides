<template>
  <div class="bar flex">
      <div class="block">
        <i class="fa fa-chevron-left leftbt" @click="before()" aria-hidden="true"></i>
      </div>
      <div class="block">
        <i class="fa fa-chevron-right rightbt" @click="next()" aria-hidden="true"></i>
      </div>
  </div>
</template>

<script>
export default {
  props: ['before', 'next'],
};
</script>

<style>

.bar {
  background-color: #000;
  bottom: 0;
  width: 100vw;
  height: 6vh;
  z-index: 10;
  position: absolute;
  opacity: 0.3;
  transition: all 0.3s;
}

.bar:hover, .bar:active {
  opacity: 0.8;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rightbt, .leftbt {
  padding: 10px;
  color: #fff;
}
</style>

