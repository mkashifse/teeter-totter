<template>
  <svg :width="width" :height="height">
    <circle cx="25" cy="25" r="25" :fill="fill" />
    <text v-if="weight" :x="width/5" :y="height/2 + 5 " fill="white">{{weight}} kg</text>
  </svg>
</template>

<script>
export default {
  name: "CircleShape",
  props: {
    fill: { default: "black" },
    width: { default: 50 },
    height: { default: 50 },
    weight: { default: 0 }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
