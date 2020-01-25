<template>
  <svg>
    <RectShape :width="width" :x="+x" :y="+y" :rotate="getBalance()" />
    <polygon :points="this.getPointes()" :style="{'fill':fill}" class="triangle" />
  </svg>
</template>

<script>
export default {
  name: "SeeSaw",
  props: {
    leftWeight: { default: 1 },
    rightWeight: { default: 1 },
    fill: { default: 'black' },
    x: { default: 0 },
    y: { default: 0 },
    width: { default: 400 },
    height: { default: 5 },
    size: { default: 50 }
  },
  methods: {
    getBalance() {
      return (this.rightWeight - this.leftWeight)*5;
    },
    getPointes() {
      const p = `${+this.x + +this.width / 2},${+this.y} ${this.x +
        this.width / 2 -
        this.size},${this.y + this.size + 40} ${this.x +
        this.width / 2 +
        this.size},${this.y + this.size + 40}`;
      return p;
    }
  }
};
</script>

<style>
.rotate {
  transform: rotate(90deg);
}
</style>