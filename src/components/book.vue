<template>
  <div>
    <nav>
      <h2>Agregar Libro</h2>
      <input v-model="book.title" placeholder="Titulo" value="Titulo">
      <p>Titulo del libro: </p>
      <input v-model="book.author" placeholder="Autor" value="Autor">
      <p>Nombre del autor:</p>
      <input v-model="book.editorial" placeholder="Editorial" value="Editorial">
      <p>Nombre de la editorial: </p>
      <input v-model="book.subject" placeholder="Materia" value="Materia">
      <p>Nombre de la materia: {{ subject }}</p>
      <input v-model="book.price" placeholder="Precio" value="8">
      <p>Precio del libro: </p>
      <button class="btn btn-dark" @click.prevent="hacerPost">Agregar</button>

      <!--- Metodo update--->
      <h2>Actualizar Libro</h2>
      <input v-model="book.id" placeholder="ID">
      <p>ID del libro:</p>
      <input v-model="book.title" placeholder="Titulo nuevo">
      <p>Titulo del libro:</p>
      <input v-model="book.author" placeholder="autor nuevo">
      <p>Nombre del autor:</p>
      <input v-model="book.editorial" placeholder="Editorial nuevo">
      <p>Nombre de la editorial: </p>
      <input v-model="book.subject" placeholder="Materia nueva">
      <p>Nombre de la materia: </p>
      <input v-model="book.price" placeholder="Precio nuevo">
      <p>Precio del libro: </p>
      <button class="btn btn-dark" @click.prevent="hacerPut">Actualizar</button>
      <!--Eliminar libro-->
      <h2>Eliminar libro</h2>
      <input v-model="book.id" placeholder="ID a eliminar">
      <p>ID del libro: </p>
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