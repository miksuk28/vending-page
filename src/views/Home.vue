<template>
  <v-container>
    <Cart/>
    <v-row>
      <ProductCard v-for="product in $products" :key="product.name" :product="product"/>
    </v-row>
  </v-container>
</template>

<script>
  import ProductCard from "../components/ProductCard.vue"
  import Cart from "../components/Cart.vue"

  export default {
    name: 'Home',

    components: { ProductCard, Cart },
    data() {
      return {  }
    },
    methods: {
      handleProductClick() {
        console.log("product clicked")
      }
    }
  }
</script>
brus