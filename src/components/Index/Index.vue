<template>
  <SwipeView :bar="false" :bt="true" :bn="-3">
    <div class="view v1">
      <Christmas></Christmas>
      <div class="text white">
        <h4>Daily Challenge</h4>
      </div>
    </div>
    <div class="view v2">
      <Christmas></Christmas>
      <div class="text white">
        <h4 style="padding-left: 10px; padding-right: 10px;">Step 1: recycle something that relates to Christmas</h4>

      </div>
    </div>
    <div class="view v3">
      <Christmas></Christmas>
      <div class="text white">
        <h4>Step 2: take a photo or video of it</h4>

      </div>
    </div>
    <div class="view v4">
      <Christmas></Christmas>
      <div class="text white">
        <h4>Step 3: share it :)</h4>
      </div>
      <div style="top: 80%; width: 100vw; position: absolute;">
        <div class="bt" @click="share">
        </div>
      </div>
    </div>
  </SwipeView>
</template>

<script>
import SwipeView from '../_blocks/SwipeView';
import Christmas from './Christmas';

export default {
  components: { SwipeView, Christmas },
  methods: {
    share() {

    },
  },
};
</script>

<style scoped>

.v1, .v2, .v3, .v4 {
  background-color: #1B2B2F;
}

a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  color: #fff;  
}

</style>

