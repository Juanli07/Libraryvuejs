<template>
<nav>
  <input v-model="book.title" placeholder="edit me">
  <p>Titulo del libro: {{ title }}</p>
  <input v-model="book.author" placeholder="edit me">
  <p>Nombre del autor: {{ author }}</p>
  <input v-model="book.editorial" placeholder="edit me">
  <p>Nombre de la editorial: {{ editorial }}</p>
  <input v-model="book.subject" placeholder="edit me">
  <p>Nombre de la materia: {{ subject }}</p>
  <input v-model="book.price" placeholder="edit me">
  <p>Precio del libro: {{ price }}</p>
  <button class="btn btn-dark" @click.prevent="hacerPost">OK</button>
</nav>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
 data () {
   return {
     book : {
       title : null,
       auhor : null,
       editorial : null,
       subject : null,
       price : null
     },
     url : "http://localhost:3000/books"
   }
 },
methods: {
  hacerPost(){
    console.log(this.book)
    axios.post(this.url, this.book)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}
}
</script>

<style scoped>

</style>