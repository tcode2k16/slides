<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Raleway');


html, body {
  background-color: #ecf0f1;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.Vcontainer, .Hcontainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.Vcontainer {
  flex-direction: column;
}

.Hcontainer {
  flex-direction: row;
}
</style>
