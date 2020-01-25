<template>
  <svg>
    <RectShape :width="width" :x="+x" :y="+y" rotate="54" />
    <TriangleShape :x="width/2+ +x - height/2" :y="+y+10" :size="height"  />
  </svg>
</template>

<script>
export default {
  name: "SeeSaw",
  props: {
    leftWeight: { default: 2 },
    rightWeight: { default: 2 },
    x: { default: 0 },
    y: { default: 0 },
    width: { default: 400 },
    height: { default: 50 }
  }
};
</script>

<style>
.rotate {
  transform: rotate(90deg);
}
</style>