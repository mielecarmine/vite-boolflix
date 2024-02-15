import { reactive } from "vue";

export const store = reactive({
  api: {
    uri: "https://api.themoviedb.org/3",
    key: "d412bfcc96af738b7acab8717a83e0ff",
  },

  img_width: "w342",
  api_img: "https://image.tmdb.org/t/p/",
  films: [],
  tvSeries: [],
});
