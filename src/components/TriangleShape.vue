<template>
  <svg>
    <polygon :points="this.getPointes()" :style="{'fill':fill}" class="triangle" />
    <text class="text-xs" v-if="weight" :x="this.x + getWeight()*0.5 - 10" :y="this.y + getWeight()*0.7" fill="white">{{weight}} kg</text>
  </svg>
</template>

<script>
export default {
  name: "TriangleShape",
  props: {
    fill: { default: "black" },
    x: { default: 0 },
    y: { default: 0 },
    weight: { default: 0 }
  },
  methods: {
    getWeight(){
      return this.weight*15+25;
    },
    getPointes() {
      const p = `${+this.getWeight() / 2 + +this.x},${0 + +this.y} ${+this.x},${+this
        .getWeight() + +this.y} ${+this.getWeight() + +this.x},${+this.getWeight() + +this.y}`;
      return p;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
