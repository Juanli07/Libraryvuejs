<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <label><b>多QUE ESTAS BUSCANDO?</b></label>
        <div class="input-group">
          <input v-model="title" class="form-control">
          <button @click="consumirAPI"><b><i>OK</i></b></button>
        </div>
      </div>
    </form>
    <table class="table table-striped">
      <thead >
        <tr>
          <th><i>ID</i></th>
          <th><i>Titulo</i></th>
          <th><i>Autor</i></th>
          <th><i>Editorial</i></th>
          <th><i>Materia</i></th>
          <th><i>Precio</i></th>
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
  border :rgb(0, 113, 165);
}
th{
  border : 5px rgb(196, 255, 240);
}
thead{
background-color: rgb(0, 156, 39);
color: white;
}
button{
  background-color: rgb(31, 48, 3);
  color:yellowgreen;
}
label{
  color: rgb(131, 118, 4)
}
</style>