<template>
  
  <div class="container-fluid" id="app">
     <img src="./assets/libro.png">
     <h1>{{ msg }}</h1>
    <nav class="menu-principal">
        <router-link tag="a" to="/home" class="scroll-suave">Inicio</router-link>
        <router-link tag="a"  to="/book" class="scroll-suave">Libros</router-link>
        <router-link tag="a" to="/provider" class="scroll-suave">Provedores</router-link>
        <router-link tag="a" to="/clients" class="scroll-suave">Clientes</router-link>
        <a href="#contacto" class="scroll-suave">Contacto</a>
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
  margin-top: 60px;
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
  color: #e66a39;
}

</style>



