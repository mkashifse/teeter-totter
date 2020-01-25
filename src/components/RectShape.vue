<template>
  <svg>
    <rect
      :transform="this.move()"
      :width="this.getWidth()"
      :height="this.getHeight()"
      :style="{'fill':fill}"
    />
    <text v-if="weight" :x="this.x+this.getWidth()/2 - this.getHeight()/6 - 5" :y="this.y+this.getHeight()*0.5+5" fill="white" class="text-xs">{{weight}} kg</text>
  </svg>
</template>

<script>
export default {
  name: "RectShape",
  data() {
    return {
      factor: 10
    };
  },
  props: {
    fill: { default: "#000" },
    x: { default: 0 },
    y: { default: 0 },
    rotate: { default: 0 },
    width: { default: 5 },
    height: { default: 10 },
    weight: { default: 0 }
  },
  methods: {
    getWidth() {
      return this.weight ? this.weight * this.factor + 30 : this.width;
    },
    getHeight() {
      return this.weight ? this.weight * this.factor + 30: this.height;
    },
    move() {
      return `translate(${this.x + this.getWidth() / 2} ${this.y +
        this.getHeight() / 2}) rotate(${this.rotate}) translate(${-this.getWidth() /
        2} ${-this.getHeight() / 2})`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
