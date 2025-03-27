<script setup>
import {Position, Handle} from "@vue-flow/core";

const props = defineProps({
  id: String,
  data: Object,
  type: String,
  position: Object
})
props.data.NodeType = 99

</script>

<template>
  <v-container min-width="300px" style="">
    <Handle type="target" :position="Position.Left"/>
    <v-card variant="tonal">
      <v-card-title>内容节点-{{ props.data.NodeType}}</v-card-title>
      <v-card-subtitle>id:{{ props.id }}</v-card-subtitle>
      <v-text-field label="条件" variant="outlined" v-model="props.data.Condition"></v-text-field>
    </v-card>
    <Handle type="source" :position="Position.Right"/>
  </v-container>
</template>

<style scoped>

</style>