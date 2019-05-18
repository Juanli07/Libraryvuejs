<template>
  <div>
    <nav>
      <h3><b>AGREGAR LIBRO</b></h3>
      <input v-model="book.title" placeholder="Titulo" value="Titulo">
      <p><b>* </b> Titulo del libro: </p>
      <input v-model="book.author" placeholder="Autor" value="Autor">
      <p><b>* </b>Nombre del autor:</p>
      <input v-model="book.editorial" placeholder="Editorial" value="Editorial">
      <p><b>* </b>Nombre de la editorial: </p>
      <input v-model="book.subject" placeholder="Materia" value="Materia">
      <p><b>* </b>Nombre de la materia: {{ subject }}</p>
      <input v-model="book.price" placeholder="Precio" value="8">
      <p><b>* </b>Precio del libro: </p>
      <button class="btn" @click.prevent="hacerPost"><b>Agregar</b></button>

      <!--- Metodo update--->
       <p><h3><b>ACTUALIZAR LIBRO</b></h3>
      <input v-model="book.id" placeholder="ID">
      <p><b>* </b>ID del libro:</p>
      <input v-model="book.title" placeholder="Titulo nuevo">
      <p><b>* </b>Titulo del libro:</p>
      <input v-model="book.author" placeholder="Autor Nuevo">
      <p><b>* </b>Nombre del autor:</p>
      <input v-model="book.editorial" placeholder="Editorial Nuevo">
      <p><b>* </b>Nombre de la editorial: </p>
      <input v-model="book.subject" placeholder="Materia Nueva">
      <p><b>* </b>Nombre de la materia: </p>
      <input v-model="book.price" placeholder="Precio Nuevo">
      <p><b>* </b>Precio del libro: </p>
      <button class="btn" @click.prevent="hacerPut"><b>Actualizar</b></button>
      <!--Eliminar libro-->
      <p><h3><b>ELIMINAR LIBRO</b></h3>
      <input v-model="book.id" placeholder="ID a Eliminar">
      <p><b>* </b>ID del libro: </p>
      <button class="btn" @click.prevent="hacerDelete"><b>Eliminar</b></button>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      book: {
        id: null,
        title: '',
        author: '',
        editorial: '',
        subject: '',
        price: ''
      },
      url: "http://localhost:3000/books"
    };
  },
  methods: {
    hacerPost() {
      console.log(this.book);
      axios
        .post(this.url, this.book)
        .then((response) => { //usea arrow functions (funciones flecha)
        console.log(response);
        alert("Libro agregado, a continuacion registre al provedor")
        this.$router.push('/addprovider');
          console.log(this.$router)
        })
        .catch((error) => { //
          console.log(error);
        });
    },
    hacerPut() {
      console.log(this.book);
      axios
        .put(this.url + "/" + this.book.id, this.book)
        .then(function(response) {
          console.log(response);
          alert("Libro Actualizado");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    hacerDelete() {
      console.log(this.book);
      axios.delete(this.url + "/" + this.book.id, this.book)
        .then(function(response) {
          console.log(response);
          alert("Libro Eliminado");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
  
<style scoped>
nav{
  background-color: #f1d4db
}
h3 {
  color: rgb(83, 5, 77);
  font-size: 40 px;
  font-style: oblique;
}
div {
  align-items: center;
}
p{
  color: crimson;
}
button{
background-color: #ad005f;
border:2px solid #a35781;
color:rgb(255, 255, 255);
}
input{
   text-align: center;

}
</style>