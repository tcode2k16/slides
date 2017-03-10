<template>
  <SwipeView :bar="bar" :onChange="onAnimate">
    <slot></slot>
  </SwipeView>
</template>

<script>
import $ from 'jquery';

import SwipeView from './SwipeView';

export default {
  name: 'AnimatedSwipeView',
  props: ['bar', 'onChange', 'svg'],
  components: {
    SwipeView,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    onAnimate(current, next) {
      const views = $('.view');
      const currentView = views[-current];
      const nextView = views[-next];

      const currentCount = currentView.dataset.animationCount ?
                            currentView.dataset.animationCount :
                            0;
      const nextCount = nextView.dataset.animationCount ?
                          nextView.dataset.animationCount :
                          0;


      const movingForward = (current - next) >= 0;


      if (movingForward) {
        if (this.currentIndex >= currentCount) {
          // next page

          $(currentView).removeClass(`anim${currentCount}`);
          $(nextView).addClass('anim0');
          this.currentIndex = 0;


          this.flipPage(currentView, nextView);
          return true;
        }

        // currentView.nextView();
        $(currentView).addClass(`anim${this.currentIndex + 1}`);
        $(currentView).removeClass(`anim${this.currentIndex}`);
        this.currentIndex += 1;
      } else {
        if (this.currentIndex <= 0) {
          // before page
          $(currentView).removeClass('anim0');
          $(nextView).addClass(`anim${nextCount}`);
          this.currentIndex = nextCount;

          this.flipPage(currentView, nextView);
          return true;
        }
        // currentView.beforeView();
        $(currentView).addClass(`anim${this.currentIndex - 1}`);
        $(currentView).removeClass(`anim${this.currentIndex}`);
        this.currentIndex -= 1;
      }
      return false;
    },

    addAnimationTag(current, next) {
      $(current).removeClass('animation');
      $(next).addClass('animation');
    },

    restartSvg() {
      if (this.svg) {
        // eslint-disable-next-line
        for (const each of Object.keys(this.svg)) {
          if (this.svg[each]) {
            this.svg[each].stop()
            .reset()
            .play();
          }
        }
      }
    },
    flipPage(current, next) {
      this.addAnimationTag(current, next);
      this.restartSvg();
      if (this.onChange) {
        this.onChange();
      }
    },
  },
};
</script>

<style scoped>

</style>
