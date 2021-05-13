<template>
    <div class= "slogan"> 
       <h1>{{ slg }}</h1>
    </div>
     
</template>

<script>
export default {
    name: 'IntroSite',
    props: {
      slg: String
    }
}
</script>

<style scoped>

.slogan {
  color:goldenrod;
}

</style>