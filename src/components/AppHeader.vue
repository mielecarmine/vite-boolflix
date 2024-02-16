<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="d-flex pt-3 justify-content-between align-items-center">
        <div class="logo">
          <h2 class="mb-0 mt-0">BOOLFLIX</h2>
        </div>
        <div class="search-bar d-flex">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  height: 100px;
  background-color: #333;

  .logo {
    color: red;
  }
}
</style>
