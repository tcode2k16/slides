<template>
<div id='LeaderSummative'>
<AnimatedSwipeView :bar="true" :svg="svg">

<div class="view">
  <div class="Vcontainer">
    <h1>Leader’s pride</h1>
    <RedFlower></RedFlower>
    <h3>The key element to success</h3>
  </div>
</div>

<div class="view">
  <div class="Vcontainer">
    
    <RedFlower></RedFlower>
    <Quote>If you build an army of 100 lions and their leader is a dog, in any fight, the lions will die like a dog. But if you build an army of 100 dogs and their leader is a lion, all dogs will fight like a lion - <b>Napoleon Bonaparte</b></Quote>
    <RedFlower></RedFlower>
  </div>
</div>
<div class="view" data-animation-count="1">
  <div class="Hcontainer">
    <div class="a Vcontainer">
      <h1 id="baw">hi</h1>
    </div>
    <div class="b Vcontainer">
      <h1 id="baw">hi</h1>
    </div>
  </div>
</div>
<div class="view">
  <div class="Hcontainer">
    <div id="test" style="width: 70%;"></div>
  </div>
</div>
<!--.view*4>.Vcontainer>(RedFlower*2)-->

</AnimatedSwipeView>
</div>
</template>

<script>

import Vivus from 'vivus';

import AnimatedSwipeView from '../_blocks/Views/AnimatedSwipeView';
import RedFlower from '../_blocks/LineBreaks/RedFlower';
import Quote from '../_blocks/Quote';

export default {
  name: 'LeaderSummative',
  components: {
    AnimatedSwipeView,
    RedFlower,
    Quote,
  },
  data() {
    return {
      svg: {
        test: null,
      },
    };
  },
  mounted() {
    this.svg.test = new Vivus('test', {
      duration: 2000,
      file: 'static/test.svg',
      type: 'sync',
    });
  },
};
</script>

<style scoped>

.view {
  background-color: #fff;
}

.view h1, .view h3 {
  text-align: center;
  opacity: 0;
}

.animation h1, .animation h3 {
  animation: text 1s ease 0.6s;
  animation-fill-mode: forwards;
}

svg{
  width: 40vw;
}

.a {
  background-color: #fff;
  width: 50%;
}

.b {
  background-color: #222;
  width: 50%;
}

.b h1 {
  color: #fff;
}

.animation.anim1 #baw {
  animation: text 1s ease 0.6s;
  animation-fill-mode: forwards;
}

.animation #baw {
  animation: none;
  animation-fill-mode: none;
}
</style>
