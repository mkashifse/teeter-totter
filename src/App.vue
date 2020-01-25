<template>
  <div id="app">
    <svg class="w-full h-full bg">
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
  methods: {
    centerSeeSaw() {
      return window.screen.width / 2 - this.seeSawWidth/2;
    }
  }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.w-full {
  width: 100%;
}
.h-full {
  height: 100vh;
}

.bg {
  background: rgb(194, 228, 250);
}
</style>
