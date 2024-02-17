<script>
import axios from "axios";
import { store } from "./store/index";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
      // input_text: "",
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    getFilms(input_production) {
      axios
        .get(`${store.api.uri}/search/movie`, {
          params: {
            api_key: store.api.key,
            query: input_production,
          },
        })
        .then((res) => {
          store.films = res.data.results.map((film) => {
            return {
              title: film.title,
              original_title: film.original_title,
              original_language: film.original_language,
              vote_avrg: Math.floor(film.vote_average),
              poster: film.poster_path,
            };
          });
          console.log(store.films);
        });
    },

    getTvSeries(input_production) {
      axios
        .get(`${store.api.uri}/search/tv`, {
          params: {
            api_key: store.api.key,
            query: input_production,
          },
        })
        .then((res) => {
          store.tvSeries = res.data.results.map((tvSerie) => {
            return {
              title: tvSerie.name,
              original_title: tvSerie.original_name,
              original_language: tvSerie.original_language,
              vote_avrg: tvSerie.vote_average,
              poster: tvSerie.poster_path,
            };
          });
        });
    },

    mapVoteAvrg(vote) {
      vote = vote / 2;
      return Math.floor(vote);
    },

    getFlag(langCode) {
      if (langCode == "en")
        return new URL("./assets/img/eng.jpg", import.meta.url).href;
      if (langCode == "it")
        return new URL("./assets/img/it.png", import.meta.url).href;
      return "bandiera default";
    },

    performSearch(input_production) {
      this.getFilms(input_production);
      this.getTvSeries(input_production);
    },
  },
};
</script>

<template>
  <app-header @search="performSearch" />
  <app-main />
  <!-- <div class="container">
    <div class="input-group mb-3 mt-5">
      <span class="input-group-text" id="inputGroup-sizing-default"
        >Search</span
      >
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        v-model="input_text"
        @keyup.enter="performSearch()"
      />
      <button @click="performSearch()" class="btn btn-primary">Cerca</button>
    </div>
    <ul v-for="(film, index) in store.films" class="list-group pb-3">
      <h3>Film</h3>
      <li class="list-group-item"><b>Titolo:</b> {{ film.title }}</li>
      <li class="list-group-item">
        <b>Titolo originale:</b> {{ film.original_title }}
      </li>
      <li class="list-group-item">
        <img :src="getFlag(film.original_language)" alt="" />
      </li>
      <li class="list-group-item">
        <font-awesome-icon
          v-for="i in 5"
          :icon="
            i <= mapVoteAvrg(film.vote_avrg)
              ? 'fa-solid fa-star'
              : 'fa-regular fa-star'
          "
        />
      </li>
      <li class="list-group-item">
        <img
          :src="`${store.api_img}${store.img_width}${film.poster}`"
          alt="Copertina"
        />
      </li>
    </ul>

    <ul v-for="(tvSerie, index) in store.tvSeries" class="list-group pb-3">
      <h3>Serie Tv</h3>
      <li class="list-group-item"><b>Titolo:</b> {{ tvSerie.title }}</li>
      <li class="list-group-item">
        <b>Titolo originale:</b> {{ tvSerie.original_title }}
      </li>
      <li class="list-group-item">
        <img :src="getFlag(tvSerie.original_language)" alt="" />
      </li>
      <li class="list-group-item">
        <font-awesome-icon
          v-for="i in 5"
          :icon="
            i <= mapVoteAvrg(tvSerie.vote_avrg)
              ? 'fa-solid fa-star'
              : 'fa-regular fa-star'
          "
        />
      </li>
      <li class="list-group-item">
        <img
          :src="`${store.api_img}${store.img_width}${tvSerie.poster}`"
          alt="Copertina"
        />
      </li>
    </ul>
  </div> -->
</template>

<style lang="scss">
@use "./styles/general.scss";
img {
  width: 50px;
}
</style>
