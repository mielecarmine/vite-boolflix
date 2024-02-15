import { reactive } from "vue";

export const store = reactive({
  api: {
    uri: "https://api.themoviedb.org/3",
    key: "d412bfcc96af738b7acab8717a83e0ff",
  },

  films: [],
});
