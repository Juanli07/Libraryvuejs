<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <label>¿Qué estas bucando?</label>
        <div class="input-group">
          <input v-model="title" class="form-control">
          <button class="btn btn-dark" @click="consumirAPI">OK</button>
        </div>
      </div>
    </form>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Editorial</th>
          <th>Materia</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in  books" :key="book.title">
          <td>{{book.id}}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{book.editorial}}</td>
          <td>{{book.subject}}</td>
          <td>${{book.price}}</td>
        </tr>
      </tbody>
    </table>
</nav>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
 data () {
   return {
     title: '',
     books : [],
     url : "http://localhost:3000/books/"
   }
 },
created() {
  this.consumirAPI();
},
methods: {
    consumirAPI () {
      axios.get(this.url + this.title).then(response => {
        console.log("passs")
        this.books = response.data;
        console.log("yes");
      }).catch(error => {
        console.log(error)
      });
    }
    
}
};
</script>
<style>
table{
  border :blue;
}
th{
  border : 5px blue;
}
</style>