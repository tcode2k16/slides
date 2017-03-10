<template>
  <SwipeView :bar="true">
    <div class="view v1">
        <Factory></Factory>
        <div class="text white">
          <h3>Our world is polluted</h3>
        </div>
      </div>
      <div class="view v2">
        <Fox></Fox>
        <div class="text">
          <h3>The animals are dying</h3>
        </div>
      </div>
      <div class="view v3">
        <Tree></Tree>
        <div class="text">
          <h3>The plants are suffering</h3>
        </div>
      </div>
      <div class="view v4">
        <Earth></Earth>
        <div class="text white">
          <h3>You can make a difference</h3>
          <div class="bt" @click="toIndex">Take action</div>
        </div>
      </div>
    </div>
  </SwipeView>
  </div>
</template>

<style scoped>

.v1 {
  background-color: #455;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.v2 {
  background-color: #f9ece8;
}

.v3 {
  background-color: #FEF2D8;
}

.v4 {
  background-color: #1B2B2F;
}

</style>

<script>
import SwipeView from '../_blocks/Views/SwipeView';
import Fox from './Fox';
import Factory from './Factory';
import Earth from './Earth';
import Tree from './Tree';

export default {
  components: { Fox, Factory, Earth, Tree, SwipeView },
  methods: {
    toIndex() {
      this.$router.push('/index');
    },
  },
};


</script>
