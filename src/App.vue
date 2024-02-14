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
          `https://api.themoviedb.org/3/search/movie?query=${this.input_text}&language=it-IT&api_key=d412bfcc96af738b7acab8717a83e0ff`
        )
        .then((res) => {
          store.films = res.data.results;
          console.log(store.films);
        });
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
      />
      <button @click="getFilms()" class="btn btn-primary">Cerca</button>
    </div>
    <ul v-for="(film, index) in store.films" class="list-group">
      <li class="list-group-item"><b>Titolo:</b> {{ film.title }}</li>
      <li class="list-group-item">
        <b>Titolo originale:</b> {{ film.original_title }}
      </li>
      <li class="list-group-item">
        <b>Lingua originale:</b> {{ film.original_language }}
      </li>
      <li class="list-group-item">
        <b>Voto medio:</b> {{ film.vote_average }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
