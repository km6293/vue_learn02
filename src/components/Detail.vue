<template>
  <div>
    <h4>Detail Page</h4>
    <h5>{{blog[$route.params.id].title}}</h5>
    <p>{{blog[$route.params.id].content}}</p>
  </div>
</template>

<script>
export default {
  name: "detail",
  props : {
    blog : Array
  }
}
</script>

<style>

</style>