<template>
   <div class="page">
    <Navigation/>
    <div id="Skoony">
    <img alt="first img" src="@/assets/bouteille.jpg"/>
    <IntroSite slg="ENSEMBLE SAUVONS NOTRE PLANETE"/>
  </div>
   </div>
</template>

<script>
import IntroSite from '@/components/IntroSite.vue';
import Navigation from '@/components/Navigation.vue';


export default {
  name: 'Skoon',
  components: {
     IntroSite,
     Navigation,
  },
}
</script>


<style scoped> 
#Slogan {
    color:goldenrod;
    margin-left: 0px;
}

.page {
    background-color: #FCF8F2;
}

</style>