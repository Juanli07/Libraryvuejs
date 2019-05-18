<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <label><b>多QUE ESTAS BUSCANDO?</b></label>
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
          <th>Telefono</th>
          <th>Sitio web</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="provider in  providers" :key="provider.name">
          <td>{{ provider.id }}</td>
          <td>{{ provider.name }}</td>
          <td>{{ provider.address }}</td>
          <td>{{ provider.tel }}</td>
          <td>{{ provider.website }}</td>
        </tr>
      </tbody>
    </table>
    <router-link tag="a" to="/provideredit" class="scroll-suave">Agregar -- Actualizar -- Eliminar  Provedores</router-link>
</nav>
  

     
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      name : '',
      providers : [],
      url: "http://localhost:3000/providers/"
    };
  },
  created() {
  this.consumirAPI();
  },
  methods: {
    consumirAPI () {
      axios.get(this.url + this.name).then(response => {
        console.log("passs")
        this.providers = response.data;
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
  background-color: rgb(119, 9, 9)
}
a{
color:honeydew;
}
label{
  color:rgb(255, 255, 255)
}
button{
  background-color: rgb(243, 171, 171);
  border:2px solid #000000;
}
table{
  background-color: #ff0000;
  color: aliceblue;
}
</style>