<template>
  <svg>
    <circle :cx="weight*20+20" :cy="weight*20+20" :r="weight*5+20" :fill="fill" />
    <text class="text-xs" v-if="weight" :x="weight*20+10" :y="weight*20+20" fill="white">{{weight}} kg</text>
  </svg>
</template>

<script>
export default {
  name: "CircleShape",
  props: {
    fill: { default: "black" },
    width: { default: 50 },
    height: { default: 50 },
    weight: { default: 0 },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
