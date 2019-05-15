<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <label>¿Qué estas bucando?</label>
        <div class="input-group">
          <input v-model="name" class="form-control">
          <button class="btn btn-dark" @click="consumirAPI">OK</button>
        </div>
      </div>
    </form>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Direccion</th>
          <th>Municipio</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in  clients" :key="client.username">
          <td>{{ client.id }}</td>
          <td>{{ client.username }}</td>
          <td>{{ client.address }}</td>
          <td>{{ client.municipality }}</td>
          <td>{{ client.tel }}</td>
          
        </tr>
      </tbody>
    </table>
    <router-link tag="a" to="/addclients" class="scroll-suave">Agregar, actualizar y eliminar clientes</router-link>
</nav>
     
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      name : '',
      clients : [],
      url: "http://localhost:3000/users/"
    };
  },
  created() {
  this.consumirAPI();
  },
  methods: {
    consumirAPI () {
      axios.get(this.url + this.name).then(response => {
        console.log("passs")
        this.clients = response.data;
        console.log("yes");
      }).catch(error => {
        console.log(error)
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