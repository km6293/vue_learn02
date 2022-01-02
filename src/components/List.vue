<template>
  <div v-for="(num,i) in blog" :key="i" >
    <h5 @click="$router.push('/detail/'+i)">{{blog[i].title}}</h5>
    <p>{{blog[i].date}}</p>    
  </div>
</template>

<script>
export default {
  name: 'list',
  props : {
    blog : Array
  }
}
</script>

<style>

</style>