<template>
  <div>
    <nav>
      <h2>Agregar Proveedor</h2>
      <input v-model="provider.id_book" placeholder="edit me">
      <p>Id del libro adquirido: {{ id_book }}</p>
      <input v-model="provider.name" placeholder="edit me">
      <p>Nombre del provedor: {{ name }}</p>
      <input v-model="provider.address" placeholder="edit me">
      <p>Direccion del provedor: {{ address }}</p>
      <input v-model="provider.tel" placeholder="edit me">
      <p>Telefono del provedor: {{ tel }}</p>
      <input v-model="provider.website" placeholder="edit me">
      <p>Sitio web: {{ website }}</p>
      <button class="btn btn-dark" @click.prevent="hacerPost">Agregar</button>

      <!--- Metodo update--->
      <h2>Actualizar provedor</h2>
      <input v-model="provider.id" placeholder="edit me">
      <p>ID del provedor: {{ id }}</p>
    <input v-model="provider.id_book" placeholder="edit me">
      <p>Id del libro adquirido: {{ id_book }}</p>
      <input v-model="provider.name" placeholder="edit me">
      <p>Nombre del provedor: {{ name }}</p>
      <input v-model="provider.address" placeholder="edit me">
      <p>Direccion del provedor: {{ address }}</p>
      <input v-model="provider.tel" placeholder="edit me">
      <p>Telefono del provedor: {{ tel }}</p>
      <input v-model="provider.website" placeholder="edit me">
      <p>Sitio web: {{ website }}</p>
      <button class="btn btn-dark" @click.prevent="hacerPut">Actualizar</button>

      <!--Eliminar libro-->
      <h2>Eliminar provedor</h2>
      <input v-model="provider.id" placeholder="edit me">
      <p>ID del provedor: {{ id }}</p>
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
      provider: {
        id: null,
        id_book : null,
        name: null,
        address: null,
        tel: null,
        website: null
      },
      url: "http://localhost:3000/providers"
    };
  },
  methods: {
    hacerPost() {
      console.log(this.provider);
      axios
        .post(this.url, this.provider)
        .then(function(response) {
          console.log(response);
          alert("Provedor añadido");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    hacerPut() {
      console.log(this.provider);
      axios
        .put(this.url + "/" + this.provider.id, this.provider)
        .then(function(response) {
          console.log(response);
          alert("Provedor actualizado");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    hacerDelete() {
      console.log(this.provider);
      axios.delete(this.url + "/" + this.provider.id, this.provider)
        .then(function(response) {
          console.log(response);
          alert("Provedor eliminado");
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