<template>
  <v-container>
    <v-navigation-drawer class="pl-2 pr-2" permanent right app color="grey lighten-3" width="30%">
      
      <v-card class="mx-auto" color="transparent" tile>
        <v-col>
          <v-card-title class="headline">Cart</v-card-title>
        </v-col>
      </v-card>

      <!-- cart element(s) -->
      <v-card v-for="product in $products" :key="product.name" class="mb-6">

        <v-row>
          <v-col class="my-auto" cols="4">
            <v-img src="../assets/product_images/cocacola.png" contain width="100"></v-img>
          </v-col>

          <v-col cols="">
            <v-card-title class="">Coca Cola 0.5l</v-card-title>

            <v-card-subtitle>Pris: 35 kr</v-card-subtitle>

            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>

              <v-card-subtitle>3</v-card-subtitle>
              
              <v-btn icon>
                <v-icon>mdi-minus</v-icon>
              </v-btn>

            </v-card-actions>
          </v-col>
          
          <v-col class="mx-auto my-auto">
            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>

      </v-card>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>