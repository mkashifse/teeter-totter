<template>
  <svg>
    <rect :x="x" :y="y" :width="width" :height="height" :style="{'fill':fill}" />
    <text v-if="weight" :x="width/5" :y="height/2 + 5 " fill="white">{{weight}} kg</text>
  </svg>
</template>

<script>
export default {
  name: "RectShape",
  props: {
    fill: { default: "black" },
    x: { default: 0 },
    y: { default: 0 },
    width: { default: 50 },
    height: { default: 50 },
    weight: { default: 0 }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
