<script setup lang="ts">
import {RouterView} from "vue-router";
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col>
        <v-sheet class="ma-2 pa-2">
          <router-link to="/NodeTestMain">节点demo</router-link>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="ma-2 pa-2">
          <router-link to="/NodeTestMain">节点demo</router-link>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <div>
      <RouterView></RouterView>
    </div>
  </v-container>

</template>

<style scoped>

/*aa*/

</style>
