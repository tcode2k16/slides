<template>
  <div id="Quote">
    <blockquote>
      <slot></slot>
    </blockquote>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

blockquote {
  text-align: left;
  border-left: 3px solid #d94362;
  padding-left: 20px;
  font-size: 2.2rem;
  margin: 0px 100px;
  opacity: 0;
  max-width: 55vw;
}

#Quote {
  width: 100%;
  display: flex;
  justify-content: center;
}

.animation blockquote {
  animation: text 1s ease 0.6s;
  animation-fill-mode: forwards;
}

</style>
