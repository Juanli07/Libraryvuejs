<template>
    <nav>
    <h2>Agregar Proveedor</h2>
      <input v-model="provider.id_book" placeholder="ID del libro(existente)">
      <p>Id del libro adquirido: {{ id_book }}</p>
      <input v-model="provider.name" placeholder="Nombre provedor">
      <p>Nombre del provedor: {{ name }}</p>
      <input v-model="provider.address" placeholder="Direccion">
      <p>Direccion del provedor: {{ address }}</p>
      <input v-model="provider.tel" placeholder="Telefono">
      <p>Telefono del provedor: {{ tel }}</p>
      <input v-model="provider.website" placeholder="Sitio we">
      <p>Sitio web: {{ website }}</p>
      <button class="btn btn-dark" @click.prevent="hacerPost">Agregar</button>
    </nav>
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
        .then((response) => {
          console.log(response);
          alert("Provedor añadido");
          this.$router.push('/provider')
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>