<template>
  <div id="app">
    <div class="w-full text-white flex bg-red-600 p-4 shadow-md cursor-pointer">
      <div
        class="mr-4"
        @click="toggleStart()"
        @mousedown="move()"
      >{{this.isStart ? 'Start' :'Stop'}}</div>
    </div>
    <svg class="w-screen h-screen bg-gray-400">
      <RectShape v-for="(item,i) in [1,2,3,4,5,6,7,8,9,10]" :key="i" :weight="item" fill="blue" :x="200+i*100" :y="50" />
      <CircleShape v-for="(item,i) in [1,2,3,4,5,6,7,8,9,10]" :key="i" :weight="item" fill="blue" :x="200+i*100" :y="500" />
      <SeeSaw :y="seeSawY" :width="seeSawWidth" height="100" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      seeSawWidth: 600,
      seeSawY:600,
      isStart: true,
      y: 0,
      gravity: 0.02,
      speed: 0.001
    };
  },
  mounted() {},
  methods: {
    centerSeeSaw() {
      return window.screen.width / 2 - this.seeSawWidth / 2;
    },
    toggleStart() {
      this.isStart = !this.isStart;
    },
    move() {
      const interval = setInterval(() => {
        this.y += this.speed;
        this.speed += this.gravity;
        if (this.y > 800) {
          this.speed = -this.speed;
          this.speed *= 0.9;
          if(this.speed === 0){
            clearInterval(interval);
          }
        }
      }, 1);
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
