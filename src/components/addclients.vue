<template>
  <div>
    <nav>
      <h2>Agregar Cliente</h2>
       <input v-model="user.username" placeholder="Nombre">
      <p>Nombre del usuario:</p>
      <input v-model="user.address" placeholder="Direccion">
      <p>Direccion del usuario:</p>
      <input v-model="user.municipality" placeholder="Municipio">
      <p>Municipio del usuario: </p>
      <input v-model="user.cp" placeholder="CP">
      <p>Codigo postal: </p>
      <input v-model="user.tel" placeholder="Telefono">
      <p>Numero de telefono: </p>
      <button class="btn btn-dark" @click.prevent="hacerPost">Agregar</button>

      <!--- Metodo update--->
      <h2>Actualizar cliente</h2>
      <input v-model="user.id" placeholder="id">
      <p>ID del usuario:</p>
      <input v-model="user.username" placeholder="nombre">
      <p>Nombre del usuario:</p>
      <input v-model="user.address" placeholder="direccion">
      <p>Direccion del usuario:</p>
      <input v-model="user.municipality" placeholder="municipio">
      <p>Municipio del usuario: </p>
      <input v-model="user.cp" placeholder="CP">
      <p>Codigo postal: </p>
      <input v-model="user.tel" placeholder="Telefono">
      <p>Numero de telefono: </p>
      <button class="btn btn-dark" @click.prevent="hacerPut">Actualizar</button>
      <!--Eliminar libro-->
      <h2>Eliminar cliente</h2>
      <input v-model="user.id" placeholder="id">
      <p>ID del cliente: </p>
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
        alert("Usuario agregado")
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
          alert("Usuario actualizado");
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
          alert("usuario eliminado");
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