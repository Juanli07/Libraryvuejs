<template>
  <div class="container-fluid" id="app">
    <h1 align="center">BookStore</h1>

    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <label>¿Qué estas bucando?</label>
        <div class="input-group">
          <input class="form-control" v-model="nombreLibro">
          <button class="btn btn-dark" type="submit">OK</button>
        </div>
      </div>
    </form>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Titulo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td>{{ book }}</td>
          <!--<td>{{ books.title }}</td>
          <td>{{ movie.description }}</td>
          <td>{{ movie.director }}</td>
          <td>{{ movie.release_date }}</td>
          <td>{{ movie.rt_score }}</td>-->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  data () {
    return {
      books: [],
      url: "localhost:3000/books"
    };
  },
created() {
  this.consumirAPI();
},
methods: {
    consumirAPI () {
      axios.get(this.url).then(response => {
        this.books = response.data;
        console.log("yes");
      }).catch(error => {
        console.log(error)
      });
    }
}
};
</script>

