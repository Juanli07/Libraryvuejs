<template>
  
  <div class="container-fluid" id="app">
     <h1 align="center">BookStore</h1>
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
</style>



