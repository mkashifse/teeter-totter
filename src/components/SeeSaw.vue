<template>
  <svg>
    <RectShape :width="width" height="10" :x="+x" :y="+y"  />
    <TriangleShape :x="width/2+ +x - height/2" :y="+y+10" :size="height" />
  </svg>
</template>

<script>
export default {
  name: "SeeSaw",
  props: {
    x: { default: 0 },
    y: { default: 0 },
    width: { default: 400 },
    height: { default: 50 }
  }
};
</script>

<style>
</style>