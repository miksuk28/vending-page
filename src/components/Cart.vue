<template>
  <v-container>
    <v-navigation-drawer class="pl-2 pr-2" permanent right app color="grey lighten-3" width="30%">
      <v-card class="mx-auto" color="transparent" tile>
        <v-col>
          <v-card-title class="headline">Cart</v-card-title>
        </v-col>
      </v-card>

      <v-card class="mb-6">
        <v-row align="center">
          <v-col cols="3" class="shrink">
            <v-img src="../assets/product_images/cocacola.png" height="150" contain></v-img>
          </v-col>
          <v-col>
            <v-card-title class="font-weight-bold">Coca Cola Classic 0.5 l Flaske</v-card-title>
            <v-card-text class="font-italic">Pris: 35 kr</v-card-text>
          </v-col>
          <v-col class="text-right">
            <v-btn x-large class="mr-5" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="mb-6">
        <v-row align="center">
          <v-col cols="3" class="shrink">
            <v-img src="../assets/product_images/sprite.jpg" height="150" contain></v-img>
          </v-col>
          <v-col>
            <v-card-title class="font-weight-bold">Sprite 0.5l Flaske</v-card-title>
            <v-card-text class="font-italic">Pris: 30 kr</v-card-text>
          </v-col>
          <v-col class="text-right">
            <v-btn x-large class="mr-5" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
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