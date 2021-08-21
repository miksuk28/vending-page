<template>
    <v-col cols="4">
      
      <v-card @click="addToCart(product)">
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
    return {
      tempCart: []
    }
  },
  methods: {
    handleProductClick(product) {
      console.log(product.name)
    },
    getFullImgPath(imgName) {
      return require("../assets/product_images/" + imgName)
    },
    addToCart(product) {
      for (const index of $cart) {
        console.log(index)
      }
    }
  }
}
</script>

<style>

</style>