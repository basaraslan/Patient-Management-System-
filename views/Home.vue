<template>
  <div class="home">
    
    <Diseases msg="Diseases and Their Symptoms"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Diseases from '@/components/Diseases.vue'

export default {
  name: 'Home',
  components: {
    Diseases
  }
}
</script>
