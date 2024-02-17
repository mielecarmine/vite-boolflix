<script>
import { store } from "../store/index";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppCard },
};
</script>
<template>
  <div class="body">
    <div class="container">
      <div class="row gx-3 gy-3">
        <div class="col">
          <app-card />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.body {
  background-color: #999;
  height: calc(100vh - 85px);
}
</style>
