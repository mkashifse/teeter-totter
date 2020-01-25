<template>
  <div id="app">
    <div class="w-full text-white flex bg-red-600 p-4 shadow-md cursor-pointer">
      <div class="mr-4">Start</div>
      <div>Stop</div>
    </div>
    <svg class="w-screen h-screen bg-gray-400">
      <CircleShape />
      <SeeSaw :x="centerSeeSaw()" y="600" :width="seeSawWidth" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      seeSawWidth: 600
    };
  },
  mounted() {
    
  },
  methods: {
    centerSeeSaw() {
      return window.screen.width / 2 - this.seeSawWidth / 2;
    }
  }
};
</script>

<style>
@import './assets/tailwind.css';

* {
  padding: 0px;
  margin: 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

</style>
