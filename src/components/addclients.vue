<template>
  <div>
    <nav>
      <h3><b>AGREGAR CLIENTE</b></h3>
       <input v-model="user.username" placeholder="Nombre">
      <p><b>* </b>Nombre del usuario:</p>
      <input v-model="user.address" placeholder="Direccion">
      <p><b>* </b>Direccion del usuario:</p>
      <input v-model="user.municipality" placeholder="Municipio">
      <p><b>* </b>Municipio del usuario: </p>
      <input v-model="user.cp" placeholder="CP">
      <p><b>* </b>Codigo postal: </p>
      <input v-model="user.tel" placeholder="Telefono">
      <p><b>* </b>Numero de telefono: </p>
      <button  @click.prevent="hacerPost"><b>Agregar</b></button>

      <!--- Metodo update--->
      <p><h3><b>ACTUALIZAR CLIENTE</b></h3>
      <input v-model="user.id" placeholder="Id">
      <p><b>* </b>ID del usuario:</p>
      <input v-model="user.username" placeholder="Nombre">
      <p><b>* </b>Nombre del usuario:</p>
      <input v-model="user.address" placeholder="Direccion">
      <p><b>* </b>Direccion del usuario:</p>
      <input v-model="user.municipality" placeholder="Municipio">
      <p><b>* </b>Municipio del usuario: </p>
      <input v-model="user.cp" placeholder="CP">
      <p><b>* </b>Codigo postal: </p>
      <input v-model="user.tel" placeholder="Telefono">
      <p><b>* </b>Numero de telefono: </p>
      <button  @click.prevent="hacerPut"><b>Actualizar</b></button>
      <!--Eliminar libro-->
      <p><h3><b>ELIMINAR CLIENTE</b></h3>
      <input v-model="user.id" placeholder="Id">
      <p><b>* </b>ID del cliente: </p>
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
      user: {
        id: null,
        username: '',
        address: '',
        municipality: '',
        cp: '',
        tel: ''
      },
      url: "http://localhost:3000/users"
    };
  },
  methods: {
    hacerPost() {
      console.log(this.book);
      axios
        .post(this.url, this.user)
        .then((response) => { //usea arrow functions (funciones flecha)
        console.log(response);
        alert("Usuario Agregado")
        this.$router.push('/clients');
          console.log(this.$router)
        })
        .catch((error) => { //
          console.log(error);
        });
    },
    hacerPut() {
      console.log(this.user);
      axios
        .put(this.url + "/" + this.user.id, this.user)
        .then(function(response) {
          console.log(response);
          alert("Usuario Actualizado");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    hacerDelete() {
      console.log(this.user);
      axios.delete(this.url + "/" + this.user.id, this.user)
        .then(function(response) {
          console.log(response);
          alert("Usuario Eliminado");
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
  color: rgb(0, 221, 136);
  font-size: 40 px;
}
div {
  align-items: center;
}
nav{
  background-color: rgb(5, 95, 61);
}
p{
  color: rgb(134, 247, 204);
}
input{
   text-align: center;
}
button{
background-color:rgb(0, 49, 30);
border:2px solid rgb(11, 212, 135);
color:rgb(255, 255, 255);
}
</style>