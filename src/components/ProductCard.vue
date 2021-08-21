<template>
    <v-col cols="4">
      
      <v-card @click="handleProductClick(product)">
        <br>
        <v-img class="mx-auto" max-height="150" contain :src="getFullImgPath(product.img)"></v-img>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-text>{{ product.price }} kr</v-card-text>
      </v-card>

    </v-col>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return { }
  },
  methods: {
    handleProductClick(product) {
      console.log(product.name)
    },
    getFullImgPath(imgName) {
      return require("../assets/product_images/" + imgName)
    }
  }
}
</script>

<style>

</style>