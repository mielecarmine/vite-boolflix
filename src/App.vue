<script>
import axios from "axios";
import { store } from "./store/index";

export default {
  data() {
    return {
      store,
      input_text: "",
    };
  },

  methods: {
    getFilms() {
      axios
        .get(
          `${store.api.uri}/search/movie?query=${this.input_text}&language=it-IT&api_key=${store.api.key}`
        )
        .then((res) => {
          store.films = res.data.results.map((film) => {
            return {
              title: film.title,
              original_title: film.original_title,
              original_language: film.original_language,
              vote_avrg: Math.floor(film.vote_average),
            };
          });
          console.log(store.films);
        });
    },

    getFlag(langCode) {
      if (langCode == "en")
        return new URL("./assets/img/eng.jpg", import.meta.url).href;
      if (langCode == "it")
        return new URL("./assets/img/it.png", import.meta.url).href;
      return "bandiera default";
    },
  },
};
</script>

<template>
  <div class="container">
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
        @keyup.enter="getFilms()"
      />
      <button @click="getFilms()" class="btn btn-primary">Cerca</button>
    </div>
    <ul v-for="(film, index) in store.films" class="list-group pb-3">
      <li class="list-group-item"><b>Titolo:</b> {{ film.title }}</li>
      <li class="list-group-item">
        <b>Titolo originale:</b> {{ film.original_title }}
      </li>
      <li class="list-group-item">
        <img :src="getFlag(film.original_language)" alt="" />
      </li>
      <li class="list-group-item"><b>Voto medio:</b> {{ film.vote_avrg }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
img {
  width: 50px;
}
</style>
