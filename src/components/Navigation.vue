<template>
  <div class="container">
    <Logo/>
  <div class="nav">
    <router-link to="/">Skoon</router-link> |
    <router-link to="/Profil">Profil</router-link> |
    <router-link to="/Evenement">Evenement</router-link> |
    <router-link to="/Connexion">Connexion</router-link> |
  </div>
  <router-view/>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
export default {
name : 'Navigation',
components : {
  Logo,
}

}
</script>

<style>
.nav{
  display:flex;
  flex-direction: row;
  width: 40%;
  height: 80%;
  margin-top: 3%;
  margin-left: 18%;
  align-items: center;
  justify-content: space-between;
  font-size: 175%;
}

.container{
  display:flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  margin-top: 3%;
}
</style>

