<template>
  <div class="swipe">
  
    <div class="main">
      <slot></slot>

    </div>
    <div class="mainbt" v-if="haveBt()">
      <div class="bt" @click="next">
        Next
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
    <ProgressBar v-if="bar" :before="before" :next="next"></ProgressBar>
  </div>
</template>

<style scoped>

.title {
  text-align: center;
}

.text {
  text-align: center;
  position: absolute;
  display: block;
  top: 70%;
  width: 100vw;
  /*padding-left: 20px;
  padding-right: 20px;*/

  z-index: 100;
}

.white {
  color: #fff;
}

.view {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.swipe {
  display: block;
  position: relative;
  background: black;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.main {
  display: flex;
  height: 100vh;
  transition: transform 0.3s;
  
}

.mainbt {
  text-align: center;
  position: absolute;
  display: block;
  top: 80%;
  width: 100vw;
  z-index: 101;
}


/*from http://codepen.io/thejamespower/pen/OVNYLL*/
.bt {
  margin: 10px auto;
  padding: 1vw;
  /*vertical-align: middle;*/
  border: 2px solid #f7f7f7;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: .3s;
  max-width: 300px;
  width: 20vw;
  min-width: 100px;
  color: #f7f7f7;
}
.bt:after {
  position: absolute;
  transition: .3s;
  content: '';
  width: 0;
  left: 50%;
  bottom: 0;
  height: 3px;
  background: #f7f7f7;
}
.bt:hover {
  cursor: pointer;
}
.bt:hover:after {
  width: 100%;
  left: 0;
}

.link {
  outline: none;
  border: none;
  text-decoration:  none;
}



</style>

<script>

import $ from 'jquery';
import Hammer from 'hammerjs';
import ProgressBar from './ProgressBar';

export default {
  components: { ProgressBar },
  props: ['bar', 'bt', 'bn'],
  data() {
    return {
      main: null,
      len: 0,
      transform: 0,
    };
  },
  mounted() {
    this.main = new Hammer($('.swipe')[0]);
    this.len = $('.main>.view').length;
    $('.main').css('width', `${this.len}00vw`);


    this.main.on('swipeleft', this.next);

    this.main.on('swiperight', this.before);

    $(window).keydown(this.onKeydown.bind(this));
  },
  methods: {
    onKeydown(e) {
      if (e.keyCode === 39) {
        this.next();
      } else if (e.keyCode === 37) {
        this.before();
      }
    },
    before() {
      this.transform = Math.min(0, this.transform + 1);
      this.update();
    },
    next() {
      this.transform = Math.max(-this.len + 1, this.transform - 1);
      this.update();
    },
    update() {
      $('.main').css('transform', `translate(${this.transform}00vw,0px)`);
    },
    haveBt() {
      return this.bt && this.transform !== this.bn;
    },
  },
};


</script>
