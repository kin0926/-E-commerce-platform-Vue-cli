<template>
  <div>
    <h1>这是params参数{{$route.params.keyword}}</h1>
    <h1>这是query参数{{$route.query.id}}</h1>
  </div>
</template>

<script>
export default {
    name:'Search',
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>