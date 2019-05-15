<template>
  <div>
    <nav>
      <h2>Agregar provedor</h2>
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
      <button class="btn btn-dark" @click.prevent="hacerPost">Agregar</button>

      <!--- Metodo update--->
      <h2>Actualizar Libro</h2>
      <input v-model="book.id" placeholder="edit me">
      <p>ID del libro: {{ id }}</p>
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
      <button class="btn btn-dark" @click.prevent="hacerPut">Actualizar</button>

      <!--Eliminar libro-->
      <h2>Eliminar libro</h2>
      <input v-model="book.id" placeholder="edit me">
      <p>ID del libro: {{ id }}</p>
      <button class="btn btn-dark" @click.prevent="hacerDelete">eliminar</button>
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
        title: null,
        auhor: null,
        editorial: null,
        subject: null,
        price: null
      },
      url: "http://localhost:3000/books"
    };
  },
  methods: {
    hacerPost() {
      console.log(this.book);
      axios
        .post(this.url, this.book)
        .then(function(response) {
          console.log(response);
          alert("Libro añadido");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    hacerPut() {
      console.log(this.book);
      axios
        .put(this.url + "/" + this.book.id, this.book)
        .then(function(response) {
          console.log(response);
          alert("Libro actualizado");
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
          alert("Libro eliminado");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
  
<style scoped>
h2 {
  color: #f44336;
  font-size: 40 px;
}
div {
  align-items: center;
}
</style>