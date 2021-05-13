<template>
 
  <router-view/>
</template>

<script>

export default {
  components :{
  
  }
}
</script>

<style>
#container{
  display:flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  margin-top: 3%;
  align-items: center;
  justify-content: space-between;
}
#logo{
  size: 3020px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
