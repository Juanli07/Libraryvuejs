<template>
  
  <div class="container-fluid" id="app">
     <img src="./assets/libro.png">
     <h1>{{ msg }}</h1>
    <nav class="menu-principal">
        <hr><router-link tag="a" to="/home" class="scroll-suave">   Inicio       </router-link>
        <router-link tag="a"  to="/book" class="scroll-suave">  Libros       </router-link>
        <router-link tag="a" to="/provider" class="scroll-suave">   Provedores  </router-link>
        <router-link tag="a" to="/clients" class="scroll-suave">  Clientes  </router-link>
        <hr>
    </nav>
    
    
<router-view/>
  </div>

  
  
</template>
<script>

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #e6f3aa;
  margin-top:5px;
}

h1 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  font-family:'Times New Roman', Times, serif;
  color: #c04d4d;
  font-size: 25px;
}
hr{
  background-color:coral;
  size: 20px;
}
</style>



