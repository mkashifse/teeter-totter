<template>
  <div id="app">
    <svg class="w-full h-full bg" width="500" height="500">
      <SeeSaw />
    </svg>
  </div>
</template>

<script>

export default {
  name: "app",
  components: { }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.w-full{
  width: 100%;
}
.h-full{
  height: 100vh;
}

.bg{
  background: rgb(194, 228, 250);
}
</style>
