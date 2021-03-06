<template>
  <div id="card">
    <img :src="url" />
  </div>
</template>

<script>
export default {
  name: 'NftCard',
  props: ['url']
}
</script>

<style scoped>
#card {
  margin: 30px;
  width: 300px;
  height: 200px;
  border: 20px solid red;
}
</style>