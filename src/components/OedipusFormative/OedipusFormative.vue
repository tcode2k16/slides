<template>

<SwipeView :bar="true" :onChange="updateAnimation">

<div class="view">
  <div class="Vcontainer">
    <h1>Pride and Success</h1>
    <RedFlower></RedFlower>
    <h3>What makes a leader successful?</h3>
  </div>
</div>

<div class="view">
  <div class="Hcontainer">

    <div class="side Vcontainer">
      <RedFlower></RedFlower>
      <div class="container">
        <h1>Claim</h1>
        <br>
        <h3>A great leader should be confident to lead his people while being humble and modest in his actions.</h3>
      </div>
      <RedFlower></RedFlower>
    </div>
    <svg id="intro" data-name="Layer 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1036.4 1255.6"><title>octopusnew</title><path fill="none" stroke="#34495e" stroke-miterlimit="10" stroke-width="8" d="M5.4 807l212-60.7v-67.7l100-67 26-89.2-41.3-95.6 3-89.2 39-30.4V191.6l91.6-80 115-21.8 152 39 117 113.2 28.4 69.6-17.8 100L813 542l-45.7 104.3 80.5 39.2 26 56.5-19.5 21.7 67.4 67.4 107.6 27L713 1252H189L5.5 807z"/><path fill="none" stroke="#34495e" stroke-miterlimit="10" stroke-width="8" d="M428.4 399l-25.7 102.4 56.7 14m-194 131.2v182l80.2 67.7 119.5-13 383-197.8"/><path fill="none" stroke="#f1c40f" stroke-miterlimit="10" stroke-width="8" d="M343.3 287.6L465 268l137 45.7 222.4 142.6 6-44.7-163-156.6L487 196.3l-144-4.7v96z"/><path fill="none" stroke="#f1c40f" stroke-miterlimit="10" stroke-width="8" d="M343.3 191.3l11-121.2 27.2 101 17.3-135 25 137L465 18l30.6 163 91.2-134.7 8.8 167.4 84.7-115.2v143l87-99.5-8.7 156.5 71.8-107-21.8 159.2 71.8-115.2-50 176"/><path fill="none" stroke="#34495e" stroke-miterlimit="10" stroke-width="8" d="M611.8 374.6l-25 54.3 25 37-12.5 63-42.8 74 41.3 43 52-35M176 807l19.6 141L313 1061h118l113-127M332 563l28-5.3 49-9.6 87 63 34 160"/><path fill="none" stroke="#34495e" stroke-miterlimit="10" stroke-width="8" d="M464.5 589l-24.3 57.6-86-30.6 15-60m-9.5 24l95.3 31.6m-73.5 14l-7.7 182"/><path fill="none" stroke="#34495e" stroke-miterlimit="10" stroke-width="8" d="M440.2 807.6L413.5 637l26.7 9.6 89.4 125-40.3 36H373.8L313 753.2 354.4 616m-37-4.4L313 753.2m35.6-377.6s33.2-21.2 50.8-.8m55.6 1.5s38.6-8.2 48 17"/><circle cx="377.7" cy="393.4" r="5" fill="#34495e" stroke="#34495e" stroke-miterlimit="10" stroke-width="10"/><circle cx="469.6" cy="398.4" r="5" fill="#34495e" stroke="#34495e" stroke-miterlimit="10" stroke-width="10"/></svg>

  </div>
</div>

<div class="view">
  <div class="Hcontainer">

    <div class="side Vcontainer">
      <RedFlower></RedFlower>
      <div class="container">
        <h1>Oedipus: initial success</h1>
        <br>
        <blockquote>
          “But we do rate you first of men, both in the common crises of our lives and face-to-face encounters with the gods” (43)
        </blockquote>
      </div>
      <RedFlower></RedFlower>
    </div>
    <svg id="king" data-name="Layer 7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1028.4 1226.3"><title>octopusclimb</title><path d="M536.8 1096.2h43s-30.2-82.3-21.5-84.5 21.5-100 21.5-100l24-176-76-126L634.3 564l37 13 15.2-28-17.5-35 37-32.7 54.5 17.4 13 41.3-37 37 13 30.4 32.6 17.4 16 30.4L732 764l52 24.8 4.5 131.6 26 8.7-54.3 29 2.2-130h-32.8l-30.2 39-41.4 23-28 85-19.6 121.5-4.3 35-63-15z" fill="none" stroke="#2C3E52" stroke-miterlimit="10" stroke-width="8"/><path fill="none" stroke="#2C3E52" stroke-miterlimit="10" stroke-width="8" d="M573.8 633.2h41L594.3 677l-20.5-43.8zm6 278.5l78.5-21.7m13-313.2l43.5 37.4h48.5l-13.8 62.5-34.7 63.3v32.2l15 55M38.8 1224l67.3-92.7 94-84.8 11-52.2L385 901l54.2-59 61-15 101-68M748 738l102-20 98-33 79-8.5m0 289l-84 41.5-100 30.4-95.3 65.2-36 45.6-117.2 28.3-223-8.8-141.3-74"/><path d="M943 1007.4s-39-52.2-45.6-52.2-104.2-14.8-104.2-14.8m-32.4-.2h-119M830 890l80.4-30.4 116.4-15.3m-1024 76l55.5-53 15.2-61 43.4-20.7 19-26.2 74-51.8L230 501l-30.4-32.7 6.5-58.7 114-50 224 52 143.6 87m61 67.4l130 74 50.7 52" fill="none" stroke="#2C3E52" stroke-miterlimit="10" stroke-width="8"/><path fill="none" stroke="#2C3E52" stroke-miterlimit="10" stroke-width="8" d="M306 537.8l82.7-43.5 93.5-24 204.3 79 50 27.7M106 973.8l98-42.5 54.3-76 106.5 12v-129l82.6-46.3 126.4 46.3 6 35M447.4 692l-7.7-210.7M251.4 175l-32.6-41.5V94.2l32.6-19.4L277.8 90v35.2L251.4 175z"/><path d="M165.8 75.5L144.6 110l22.2 15v41l-11 43.4 26 39V290l37 28 11 80.8 32-14.2V329l27 2v42l31-13.6 23-48 65.4 48S382.8 374 391 376l136.8 32 114-9.5 59.5-50 35.2-80.5-19.2-82.4-30.8-60.6h-28.7l13.5 17-13 2.2 28.3 30.6 30.7 89-46 80.4-43 26-107 11L528 340l87 11-72-50-76-106.7-61-19.4-61.5-40-38.7 19.2v-30l.3-33L293 57l-26-30h-19L219 5l-24 22-15 32.5z" fill="none" stroke="#2C3E52" stroke-miterlimit="10" stroke-width="8"/><path fill="none" stroke="#2C3E52" stroke-miterlimit="10" stroke-width="8" d="M166.8 166.2l37 67.3 44.5 30.4 29.5-49 28-60v41l37 54 78.5 52 106.5 37"/><path fill="none" stroke="#2C3E52" stroke-miterlimit="10" stroke-width="8" d="M218.8 318.3l43.8-15.3 28.3-26 36-48.5"/></svg>
  </div>
</div>
<div class="view">
  <div class="Hcontainer">

    <div class="side Vcontainer">
      <RedFlower></RedFlower>
      <div class="container">
        <h1>Oedipus: downfall</h1>
        <br>
        <blockquote>“You pray to the gods? Let me grant your prayers” (245)</blockquote>
        <br>
        <blockquote>“You’re blind to the corruption of your life, to the house you live in, those you live with” (471)</blockquote>
      </div>
      <RedFlower></RedFlower>
    </div>
    <svg id="fall" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 815.4 1219.7"><title>octopusfall</title><path fill="none" stroke="#2c3e50" stroke-miterlimit="10" stroke-width="8" d="M6.2 1215.7l164.2-363.2 97.8-61 74-110.7L98.5 533l6.6-280.4L222.8 70 366 4.8l152.2 145.6-24 50L640 252.6l-19.6 52.2 30.4 97.8 78.3 65.2L603 522l-65.2 56.7L553 763.5l95.6 43.3 161 409H6z"/><path fill="none" stroke="#2c3e50" stroke-miterlimit="10" stroke-width="8" d="M268.2 791.6L461.7 907 603 1104.7l37 111H481l-100-259-210.8-104.3 97.8-61zm-97.8-215l41.3-211L277 204.8l131-160m-20.2 220.8l20-58.7 60.4-43.8"/><path d="M309.5 378.7s-34.8-15.2-41.3-15.2-32.6 47.8-32.6 47.8L289 481l85.7 10.7m43.5-10.7l82.6 23.8 153-4.6" fill="none" stroke="#2c3e50" stroke-miterlimit="10" stroke-width="8"/><path id="blood" fill="none" stroke="#e74c3c" stroke-miterlimit="10" stroke-width="8" d="M457.3 254.8l50 67.3L529 440l17.5 84.7-61 100 50 239.2 76.2 32.5 15.2 61"/><path fill="none" stroke="#2c3e50" stroke-miterlimit="10" stroke-width="8" d="M357.3 1080.8l-39 26-63 19.7m-111-82.5L90 1070l-32.7 76M636 354.7l-41.7 35-13 28M440 837.4l-93.5-89.2"/></svg>

  </div>
</div>
<div class="view">
  <div class="Vcontainer">
    <h1>The End</h1>
    <RedFlower></RedFlower>
    <h3>Thank you</h3>
  </div>
</div>

</SwipeView>

</template>

<script>
import $ from 'jquery';
import Vivus from 'vivus';
import SwipeView from '../_blocks/Views/SwipeView';
import RedFlower from '../_blocks/LineBreaks/RedFlower';

export default {
  components: { SwipeView, RedFlower },
  data() {
    return {
      svg: {
        fallSvg: null,
        king: null,
        intro: null,
      },
    };
  },
  mounted() {
    // eslint-disable-next-line
    this.svg.fallSvg = new Vivus('fall', { duration: 300 });
    this.svg.king = new Vivus('king', { duration: 300 });
    this.svg.intro = new Vivus('intro', { duration: 300 });
  },
  methods: {
    updateAnimation(_, transform) {
      const views = $('.view');

      // eslint-disable-next-line
      for (const each of Object.keys(this.svg)) {
        if (this.svg[each]) {
          this.svg[each].stop()
          .reset()
          .play();
        }
      }

      for (let i = 0; i < views.length; i += 1) {
        const el = $(views[i]);
        if (i === -transform) {
          el.addClass('animation');
        } else if (el.hasClass('animation')) {
          el.removeClass('animation');
        }
      }
      return true;
    },
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

.animation h1, .animation h3, .animation blockquote {
  animation: text 1s ease 0.6s;
  animation-fill-mode: forwards;
}

svg{
  width: 40vw;
}

.animation #blood {
  animation: drip 2s linear 5s infinite;
  /*animation-fill-mode: forwards;*/
}

@keyframes drip {
  from { stroke-dasharray: 1 1000; }
  to { stroke-dasharray: 1000 1000; }
}



blockquote {
  text-align: left;
  border-left: 3px solid #d94362;
  padding-left: 20px;
  font-size: 2.2rem;
  margin: 0px 100px;
  opacity: 0;
}
</style>
