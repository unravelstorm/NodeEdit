<script setup>
import {Position, Handle} from "@vue-flow/core";

const props = defineProps({
  id: String,
  data: Object,
  type: String,
  position: Object
})

props.data.NodeType = 10
</script>

<template>
  <v-container min-width="300px" style="">
    <Handle type="target" :position="Position.Left"/>
    <v-card variant="tonal">
      <v-card-title>按钮节点-{{props.data.NodeType}}</v-card-title>
      <v-card-subtitle>id:{{ props.id }}</v-card-subtitle>
      <v-text-field label="显示内容" variant="outlined" v-model="props.data.ButtonText"></v-text-field>
    </v-card>
    <Handle type="source" :position="Position.Right"/>
  </v-container>
</template>

<style scoped>

</style>