<template>
  <div id="app">
    <div class="w-full text-white flex bg-red-600 p-4 shadow-md cursor-pointer">
      <div class="mr-4" @click="toggleStart()">{{'ReStart'}}</div>
      <div>{{mouseX}}, {{mouseY}}</div>
    </div>
    <svg class="w-screen h-screen bg-gray-400" @click="onMouseOver">
      <g v-for="(shape,i) in shapes" :key="i">
        <RectShape :weight="shape.weight" fill="green" :x="shape.x" :y="shape.y" />
      </g>

      <RectShape
        :weight="this.rightWeight"
        fill="blue"
        :x="1100"
        :y="560+this.rightWeight*8"
        :rotate="this.rightWeight*3"
      />
      <SeeSaw
        :x="centerSeeSaw()"
        :y="seeSawY"
        :width="seeSawWidth"
        :rightWeight="this.rightWeight"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      shapes: [],
      selected: null,
      rightWeight: 8,
      lefttWeight: 2,
      seeSawWidth: 900,
      seeSawY: 600,
      isStart: true,
      y: 0,
      gravity: 0.02,
      speed: 0.001,
      mouseX: 0,
      mouseY: 0
    };
  },
  mounted() {},
  methods: {
    onMouseOver(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.selected = {
        weight: Math.ceil(Math.random() * 10),
        type: Math.ceil(Math.random() * 3),
        y: 0,
        x: this.mouseX
      };
      this.shapes.push(this.selected);
      this.move();
    },
    centerSeeSaw() {
      return window.screen.width / 2 - this.seeSawWidth / 2;
    },
    toggleStart() {
      this.rightWeight = Math.ceil(Math.random() * 10);
      this.shapes = [];
    },
    move() {
      const interval = setInterval(() => {
        this.selected.y += this.speed;
        this.speed += this.gravity;
        if (this.selected.y > 560) {
          this.speed = 0.001;
          clearInterval(interval);
        }
      }, 1);
    },
    getLeftWeight() {
      return this.shapes
        .filter(item => item.y > 560)
        .reduce((p, c) => p + c, 0);
    }
  }
};
</script>

<style>
@import "./assets/tailwind.css";

* {
  padding: 0px;
  margin: 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
