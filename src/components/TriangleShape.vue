<template>
  <svg>
    <polygon :points="this.getPointes()" :style="{'fill':fill}" class="triangle" />
  </svg>
</template>

<script>
export default {
  name: "TriangleShape",
  props: {
    fill: { default: "black" },
    size: { default: 50 },
    x: { default: 0 },
    y: { default: 0 }
  },
  methods: {
    getPointes() {
      const p = `${+this.size / 2 + +this.x},${0 + +this.y} ${+this.x},${+this.size +
        +this.y} ${+this.size + +this.x},${+this.size + +this.y}`;
      return p;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
