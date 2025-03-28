<script setup>
import {Position, Handle} from "@vue-flow/core";
import {ref} from "vue";

// const props = defineProps(['label'])
const props = defineProps({
  id: String,
  data: Object,
  type: String,
  position: Object
})

props.data.NodeType = 1

function handleMouseDown(event) {
  event.stopPropagation();
}
function handleMouseMove(event) {
  event.stopPropagation();
}

const slider = ref(0);

</script>

<template>
  <v-container min-width="300px" style="">
    <Handle type="target" :position="Position.Left"/>
    <v-card variant="tonal">
      <v-card-title>内容节点-{{ props.data.NodeType }}</v-card-title>
      <v-card-subtitle>id:{{ props.id }}</v-card-subtitle>
      <!--      <v-card-text style="font-size: small">位置:({{ Math.round(props.position.x) }},{{ Math.round(props.position.y)}})</v-card-text>-->
      <v-row>
        <v-col cols="6">
          <v-text-field label="主体" variant="outlined" v-model="props.data.Agent"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="主体id" variant="outlined" v-model="props.data.AgentId"></v-text-field>
        </v-col>
      </v-row>
      <v-text-field label="显示内容" variant="outlined" v-model="props.data.Content"></v-text-field>
      <v-text-field label="排序" type="number" variant="outlined" v-model="props.data.Order"></v-text-field>

    </v-card>
    <Handle type="source" :position="Position.Right"/>
  </v-container>
</template>

<style scoped>

</style>