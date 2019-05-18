<template>
  <div>
    <nav>

      <!--- Metodo update--->
      <h3><b>ACTUALIZAR PROVEDOR</b></h3>
      <input v-model="provider.id" placeholder="ID muevo">
      <p><b>* </b>ID del provedor: {{ id }}</p>
    <input  v-model="provider.id_book" placeholder="ID del libro">
      <p><b>* </b>Id del libro adquirido: {{ id_book }}</p>
      <input v-model="provider.name" placeholder="Nombre del provedor">
      <p><b>* </b>Nombre del provedor: {{ name }}</p>
      <input v-model="provider.address" placeholder="Direccion">
      <p><b>* </b>Direccion del provedor: {{ address }}</p>
      <input v-model="provider.tel" placeholder="Telefono">
      <p><b>* </b>Telefono del provedor: {{ tel }}</p>
      <input v-model="provider.website" placeholder="Sitio web">
      <p><b>* </b>Sitio web: {{ website }}</p>
      <button @click.prevent="hacerPut"><b>Actualizar</b></button>

      <!--Eliminar libro-->
      <p><h3><b>ELIMINAR PROVEDOR</b></h3>
      <input v-model="provider.id" placeholder="ID a eliminar">
      <p><b>* </b>ID del provedor: {{ id }}</p>
      <button  @click.prevent="hacerDelete"><b>Eliminar</b></button>
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
          alert("Provedor A単adido");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    hacerPut() {
      console.log(this.provider);
      axios
        .put(this.url + "/" + this.provider.id, this.provider)
        .then((response) => {
          console.log(response);
          alert("Provedor Actualizado");
          this.$router.push('/provider')
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
          alert("Provedor Eliminado");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
  
<style scoped>
h3 {
  color: #421a68;
  font-size: 40 px;
}
div {
  align-items: center;
}
nav{
  background-color: rgb(217, 177, 255)
}
p{
  color: rgb(112, 0, 187);
}
input{
   text-align: center;
}
button{
background-color: #610139;
border:2px solid #be508d;
color:rgb(255, 255, 255);
}
</style>