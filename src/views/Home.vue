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
      return {
        e: [
          { name: "Coca-Cola", price: 25, img: "cocacola.png" },
          { name: "Sprite", price: 22, img: "sprite.jpg"},
          { name: "Solo Super", price: 25, img: "solosuper.jpg"},
          { name: "Pepsi Max", price: 25, img: "pepsimax.jpg"},
          { name: "Fanta", price: 25, img: "fanta.png"},
          { name: "Villa", price: 25, img: "villa.jpeg"},
          { name: "7up", price: 25, img: "7up.jpg"},
          { name: "Tab X-Tra", price: 25, img: "tabxtra.png"},
          { name: "Urge", price: 25, img: "urge.jpg" },
          { name: "Coca-Cola Uten Sukker", price: 25, img: "colautensukker.jpg"}
        ]  
      }
    },
    methods: {
      handleProductClick() {
        console.log("product clicked")
      }
    }
  }
</script>
brus