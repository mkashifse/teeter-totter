<template>
  <div id="app">
    <div class="w-full text-white flex bg-indigo-600 p-4 shadow-md cursor-pointer">
      <div class="mr-4" @click="toggleRestart()">{{'ReStart'}}</div>
      <div>{{mouseX}}, {{mouseY}} {{this.rotation()}}</div>
    </div>
    <svg class="w-screen h-screen bg-gray-400" @click="onMouseOver">
      <SeeSaw
        :x="centerSeeSaw()"
        :y="seeSawY"
        :width="seeSawWidth"
        :leftWeight="getLeftWeight()"
        :rightWeight="this.rightWeight"
      />
      <g v-for="(shape,i) in shapes" :key="i">
        <RectShape v-if="shape.type === 1" :rotate="shape.rot" :weight="shape.weight" fill="#6AA84F" :x="shape.x" :y="shape.y" />
        <TriangleShape v-if="shape.type === 2" :rotate="shape.rot" :weight="shape.weight" fill="#FF9900" :x="shape.x" :y="shape.y" />
        <CircleShape v-if="shape.type === 3" :weight="shape.weight" fill="#A676E8" :x="shape.x" :y="shape.y" />
      </g>
      <RectShape :weight="this.rightWeight" fill="#3a668c"  :x="1100" :y="560 + this.rotation()*5" :rotate="this.rotation()*2" />
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
      seeSawWidth: 1500,
      seeSawY: 600,
      isStart: true,
      y: 0,
      gravity: 0.05,
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
    toggleRestart() {
      this.rightWeight = Math.ceil(Math.random() * 10);
      this.shapes = [];
    },
    move() {
      const interval = setInterval(() => {
        this.selected.y += this.speed;
        this.speed += this.gravity;
        if (this.selected.y > 560) {
          this.speed = 0.001;
          
          this.shapes.forEach(item => {
            let b = this.centerSeeSaw() - item.x;
            let rad = this.rotation() * Math.PI / 180
            let y = Math.sin(rad) * (b/Math.cos(rad)) + item.weight*5;
            item.y = 560 + y ;
            item.rot = this.rotation()*2;
          });
          if(Math.abs(this.rotation())>30 || this.getLeftWeight()>20){
            this.toggleRestart();
          }
          clearInterval(interval);
        }
      }, 1);
    },
    getLeftWeight() {
      return this.shapes.length
        ? this.shapes.reduce((p, c) => p + c.weight, 0)
        : 0;
    },
    rotation() {
      const rot = this.rightWeight - this.getLeftWeight();
      return rot;
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
