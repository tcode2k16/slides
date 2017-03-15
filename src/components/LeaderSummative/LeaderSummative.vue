<template>
<div id='LeaderSummative'>
<AnimatedSwipeView :bar="true" :svg="svg">

<div class="view gradient">
  <div class="Vcontainer">
    <div class="Vcontainer Card">
      <h1>Leader’s pride</h1>
      <RedFlower></RedFlower>
      <h3>The key element to success</h3>
    </div>
  </div>
</div>

<div class="view">
  <div class="Hcontainer">
    <div class="HalfCard Vcontainer">
      <div class="Vcontainer">
        <Quote>"If you build an army of 100 lions and their leader is a dog, in any fight, the lions will die like a dog. But if you build an army of 100 dogs and their leader is a lion, all dogs will fight like a lion"<br>&emsp;&emsp;- <b>Napoleon Bonaparte</b></Quote>
      </div>
    </div>
    <img src="./assets/napoleon.jpg" alt="" class="halfImage">
  </div>
</div>


<div class="view" data-animation-count="1">
  <div class="Hcontainer" style="align-items: center; top: 0;position: absolute; z-index: 10;">
    <YinYang></YinYang>
  </div>
  <div class="Hcontainer">
    <div class="Half Vcontainer" style="background-color: #000; color: #fff; justify-content: flex-start; padding-top: 30vh;">
      <h3>Succeeful Leader</h3>
      <ul style="margin: 50px 150px; font-size: 2rem;">
        <li>Confident</li>
        <li>Possess pride</li>
        <li>Humble</li>
      </ul>
    </div>
    <div class="Half Vcontainer" style="background-color: #fff; justify-content:  flex-start; padding-top: 30vh;">
      <h3>Failed Leader</h3>
      <ul style="margin: 50px 150px; font-size: 2rem;">
        <li>Too ambitious</li>
        <li>Drowns in pride</li>
      </ul>
    </div>
  </div>
</div>

<div class="view">
  <div class="Hcontainer">
    <div class="HalfCard Vcontainer">
      <div class="Vcontainer">
        <RedFlower></RedFlower>
        <h5>Oedipus turned from a great leader to a leader that failed because he was not able to control his pride and turned it from his advantage to the very thing that led to his downfall.</h5>
        <RedFlower></RedFlower>
      </div>
    </div>
    <img src="./assets/oedipus.jpg" alt="" class="halfImage">
  </div>
</div>

<div class="view">
  <div class="Hcontainer">
    <div class="HalfCard Vcontainer">
      <div class="Vcontainer">
        <Quote>“I must follow the people for I am their leader”<br>&emsp;&emsp;- <b>Mahatma Gandhi</b></Quote>
        <br><br>
        <Quote>“Even when [Gandhi] was fighting what was in effect a color war, he did not think of people in terms of race or status.”<br>&emsp;&emsp;- <b>George Orwell</b></Quote>
      </div>
    </div>
    <img src="./assets/gandhi.jpg" alt="" class="halfImage">
  </div>
</div>

<div class="view">
  <div class="Hcontainer">
    <div class="HalfCard Vcontainer">
      <div class="Vcontainer">
        <RedFlower></RedFlower>
        <h5>Marissa Mayer <br><br> the former executive of Google and current CEO of Yahoo</h5>
        <RedFlower></RedFlower>
      </div>
    </div>
    <img src="./assets/mayer.jpg" alt="" class="halfImage">
  </div>
</div>

<div class="view gradient" data-animation-count="1">
  <div class="Hcontainer">
    <FlipView class="Card" style="height: 315px !important; width: 560px !important; padding: 0px;background-color: transparent;">
      <div slot="front">
        <div class="Hcontainer">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jaKoMCujc2k?start=838" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div slot="back">
        <div class="Hcontainer">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NEEug_1XEcc?start=110" frameborder="0" allowfullscreen></iframe>
        </div>
        
      </div>

    </FlipView>
  </div>
</div>

<!--<div class="view leader">

  <div class="Vcontainer Card">
    <h3>a great leader should be confident and possess pride, but at the same time he or she shouldn’t be consumed by it. </h3>
  </div>

</div>-->

<div class="view" data-animation-count="1">
  <div class="Vcontainer" style="position: absolute; z-index: 10;">
    <div class="Vcontainer Card popup">
      <RedFlower></RedFlower>
      <h3>A successful leader should be confident enough to lead the people, while still remains humble when facing challenges.</h3>
      <RedFlower></RedFlower>
    </div>
  </div>
  <div class="Hcontainer">
    <img src="./assets/oedipus.jpg" alt="" style="width:33.333333%;">
    <img src="./assets/gandhi.jpg" alt="" style="width:33.333333%;">
    <img src="./assets/mayer.jpg" alt="" style="width:33.333333%;">
  </div>

</div>

<div class="view">
  <div class="Hcontainer">
      <div class="Vcontainer Half">
        <img src="./assets/leader1.jpg" alt="" style="height: 50%">
        <img src="./assets/leader2.jpg" alt="" style="height: 50%">
      </div>
      <div class="Vcontainer Half">
        <img src="./assets/leader3.jpg" alt="" style="height: 50%">
        <div style="height: 50%">
          <div class="Vcontainer">
            <RedFlower></RedFlower>
            <h3>Leaders are everwhere</h3>
            <RedFlower></RedFlower>
            
          </div>
        </div>
        
      </div>
    </div>
</div>


<div class="view city">

  <div class="Vcontainer Card">
    <h3>Be a confident and humble leader</h3>

    <br><br>
    <h5>Thank you!</h5>
  </div>

</div>

<div class="view">

<div class="Vcontainer">
  <h5 id="cited">Work Cited</h5>
  <br>
  <ul id="cited">

<li>Hamilton, Neil. "Mohandas Gandhi." World History: The Modern Era, ABC-CLIO, 2017, worldhistory.abc-clio.com/Search/Display/314689. Accessed 22 Feb. 2017.</li>

<li>James, Geoffrey. "Marissa Mayer's Top 10 Leadership Mistakes." Inc.com. Inc., 10 Jan. 2016. Web. 05 Mar. 2017.</li>

<li>“Marissa Mayer's IIT Commencement Address. Perf. Marissa Mayer. Youtube. Google, 16 May 2009. Web. 4 Mar. 2017.</li>

<li>“Mohandas Gandhi: Quote on Leadership." World History: The Modern Era, ABC-CLIO, 2017, worldhistory.abc-clio.com/Search/Display/343631. Accessed 22 Feb. 2017.</li>

<li>Myatt, Mike. "Marissa Mayer: A Case Study In Poor Leadership." Forbes. Forbes Magazine, 13 Dec. 2015. Web. 04 Mar. 2017.</li>

<li>"Napoleon Bonaparte Quotes." Quotes.net. STANDS4 LLC, 2017. Web. 6 Mar. 2017.</li>
<li>Orwell, George. "Reflections on Gandhi." George Orwell: Reflections on Gandhi. N.p., Jan. 1949. Web. 23 Feb. 2017.</li>

<li>Sophocles, Robert Fagles, and Bernard Knox. The Three Theban Plays ; Antigone ; Oedipus the King ; Oedipus. Harmondsworth, Middlesex, England: Penguin, 1984. Print.</li>

<li>Yahoo CEO Marissa Mayer Talks Verizon Deal and Her Future at the Company. Perf. Marissa Mayer. Youtube. Bloomberg, 25 July 2016. Web. 4 Mar. 2017.</li>

  </ul>
</div>

</div>

</AnimatedSwipeView>
</div>
</template>

<script>

// import Vivus from 'vivus';

import AnimatedSwipeView from '../_blocks/Views/AnimatedSwipeView';
import FlipView from '../_blocks/Views/FlipView';
import RedFlower from '../_blocks/LineBreaks/RedFlower';
import Quote from '../_blocks/Quote';
import YinYang from './YinYang';
import King from './King';

export default {
  name: 'LeaderSummative',
  components: {
    AnimatedSwipeView,
    RedFlower,
    Quote,
    YinYang,
    FlipView,
    King,
  },
  data() {
    return {
      svg: {
        test: null,
      },
    };
  },
  mounted() {
    // this.svg.test = new Vivus('test', {
    //   duration: 2000,
    //   file: 'static/test.svg',
    //   type: 'sync',
    // });
  },
};
</script>

<style scoped>

.view {
  background-color: #fff;
  /*background: linear-gradient(45deg, rgba(222,61,33,1) 0%, rgba(0,178,60,1) 100%);*/
  /*background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);*/
  position: relative;
}

.gradient {
  background: linear-gradient(45deg, rgba(222,61,33,1) 0%, rgba(55,125,230,1) 100%);
}

.view h1, .view h3, .view h5 {
  text-align: center;
  opacity: 0;
}

.view ul {
  opacity: 0
}

.animation h1, .animation h3, .animation ul, .animation h5 {
  animation: fadeIn 1s ease 0.6s;
  animation-fill-mode: forwards;
}

.animation .Card {
  animation: fadeIn 1s ease;
  animation-fill-mode: forwards;
}

.animation .popup {
  animation: none !important;
  opacity: 0 !important;
}

.animation.anim1 .popup {
  animation: fadeIn 1s ease !important;
  animation-fill-mode: forwards !important;
}


.halfImage {
  /*max-width:100%;
  height: 100vh;*/
  width: 50%;
}

img {
  object-fit: cover;
}

iframe {
  margin: auto;
}

.Card {
  width: 75vw !important;
  height: auto !important;
  background-color: #fff;
  margin: auto;
  padding: 70px 50px;
  box-shadow: 0px 4px 60px -5px rgba(0,0,0,0.9);
  opacity: 0;
}

.HalfCard {
  background-color: #fff;
  padding: 0px 30px;
  box-shadow: 30px 0px 75px -30px rgba(0,0,0,0.9);
  z-index: 2;
  width: 50%;
}

.Half {
  width: 50%;
}

.leader {
  background-image: url("./assets/leader.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.city {
  background-image: url("./assets/city.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

}

.leader .Card, .city .Card {
  width: 30vw !important;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
}


#cited {
  /*max-width: 1000px;*/
  width: 80%;
  align-self: center;
  text-align: left;
}
</style>
