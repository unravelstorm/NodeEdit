<script setup>
import {Position, Handle} from "@vue-flow/core";

const props = defineProps({
  id: String,
  data: Object,
  type: String,
  position: Object
})

props.data.NodeType = 11
</script>

<template>
  <v-container min-width="300px" style="">
    <Handle type="target" :position="Position.Left"/>
    <v-card variant="tonal">
      <v-card-title>倒计时节点-{{ props.data.NodeType }}</v-card-title>
      <v-card-subtitle>id:{{ props.id }}</v-card-subtitle>

      <v-text-field label="显示内容" variant="outlined" v-model="props.data.ProgressText"></v-text-field>
      <v-text-field label="倒计时" type="number" variant="outlined" v-model="props.data.ProgressValue"></v-text-field>
      <v-text-field label="排序" type="number" variant="outlined" v-model="props.data.Order"></v-text-field>

    </v-card>
    <Handle type="source" :position="Position.Right"/>
  </v-container>
</template>

<style scoped>

</style>