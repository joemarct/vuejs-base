<template>
  <div id="home">

    <nft-card
      url="https://picsum.photos/seed/pic1/300/200"
    />

    <nft-card
      url="https://picsum.photos/seed/pic2/300/200"
    />

  </div>
</template>

<script>
import NftCard from '@/components/NftCard.vue'

export default {
  name: 'Home',
  components: {
    NftCard
  }
}
</script>

<style scoped>
#home {
  float: left;
}
</style>