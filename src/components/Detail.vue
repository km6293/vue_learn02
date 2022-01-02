<template>
  <div>
    <h4>Detail Page</h4>
    <h5>{{blog[$route.params.id].title}}</h5>
    <p>{{blog[$route.params.id].content}}</p>

    <button class="btn btn-outline-success">Comment</button>
    <h6 @click="$router.push('/detail/'+$route.params.id+'/comment')">Open Comment</h6>
    <h6 @click="$router.push('/detail/'+$route.params.id)">Close Comment</h6>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "detail",
  data(){
    return{
      comment : true,
    }
  },
  props : {
    blog : Array
  },
}
</script>

<style>

</style>