<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <label><b>多QUE ESTA BUSCANDO?</b></label>
        <div class="input-group">
          <input v-model="name" class="form-control">
          <button  @click="consumirAPI"><b><i>OK</i></b></button>
        </div>
      </div>
    </form>

    <table class="table table-striped">
      <thead >
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
    <router-link tag="a" to="/addclients" class="scroll-suave">Agregar -- Actualizar -- Eliminar Clientes</router-link>
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
nav{
  background-color: rgb(41, 58, 0)
}
a{
color:honeydew;
}
label{
  color:rgb(255, 255, 255)
}
button{
  background-color: rgb(48, 255, 7);
  border:2px solid #000000;
}
table{
  background-color: #0ea300;
  color: aliceblue;
}
</style>