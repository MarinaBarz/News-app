<template>
  <div
    :style="[{ width: `${width}px` }, { height: `${height}px` }]"
    class="flex-shrink-0"
  >
    <div
      class="w-100 h-100 card-img-top rounded-lg bg-image"
      :class="classes"
      :style="{
        background: `url('${imageSrc}') center center / cover no-repeat`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["imageSrc", "classes", "width", "height"],
};
</script>
<style lang="scss">
.bg-image {
  z-index: 2;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: inherit;
    border-radius: inherit;
  }

  &::after {
    z-index: 2;
    background: inherit;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  &::before {
    z-index: 1;
    backdrop-filter: blur(10px);
  }
}
</style>