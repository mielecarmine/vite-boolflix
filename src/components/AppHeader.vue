<script>
export default {
  data() {
    return {
      input_production: "",
    };
  },
  emits: ["search"],
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
          <input
            type="text"
            placeholder="Search"
            v-model="input_production"
            @keyup.enter="$emit('search', this.input_production)"
          />
          <button
            class="btn btn-primary"
            @click="$emit('search', this.input_production)"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 100px;
  background-color: #333;

  .logo {
    color: red;
  }
}
</style>
