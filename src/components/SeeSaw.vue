<template>
  <svg>
    <RectShape :width="width" :x="+x" :y="+y" rotate="54" />
    <polygon :points="this.getPointes()" :style="{'fill':fill}" class="triangle" />
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
    height: { default: 5 },
    size: { default: 50 }
  },
  methods: {
    getPointes() {
      const p = `${+this.x + +this.width/2},${+this.y} ${this.x+this.width/2 - this.size},${this.y + this.size+40} ${this.x+this.width/2 + this.size},${this.y + this.size+40}`;
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