<script setup>
import {ref} from "vue";
import {VueFlow, useVueFlow} from "@vue-flow/core";

import {initialNodes} from './TideNode.js';
import {initialEdges} from './TideEdge.js';
import FileSaver from "file-saver/src/FileSaver";

import Sidebar from './Sidebar.vue'
import useDragAndDrop from "@/components/NodeTest/useDnD.js";
import DropzoneBackground from "@/components/NodeTest/DropzoneBackground.vue";
import ContentNode from "@/components/NodeTest/CustomNode/ContentNode.vue";
import ButtonNode from "@/components/NodeTest/CustomNode/ButtonNode.vue";
import ProgressNode from "@/components/NodeTest/CustomNode/ProgressNode.vue";
import ConditionNode from "@/components/NodeTest/CustomNode/ConditionNode.vue";
import {MiniMap} from "@vue-flow/minimap";


const nodes = ref(initialNodes)
// const nodes = ref([])
const edges = ref(initialEdges)
const dark = ref(false)

const {onInit, onNodeDragStop, onConnect, addEdges, setViewport, toObject, fromObject} = useVueFlow()
const {onDragOver, onDrop, onDragLeave, isDragOver} = useDragAndDrop()

//  节点连线
onConnect(addEdges)


/// 显示所有节点，连线情况
function OnShowInfo() {
  console.log(nodes)
  console.log(nodes.value)
  console.log(nodes.value[0])
  console.log(nodes.value[0].value)
  console.log(initialNodes)
  // console.log(edges)
}

const flowKey = 'vue-flow--save-restore'

/// 保存节点跟连线
function OnSave() {
  //  文件名不能为空
  if (fileName.value.trim()) {
    let json = {"FileName": fileName.value, "NodeData": toObject()}
    console.log(json)
    const str = JSON.stringify(json)

    // 将json转换成字符串
    const blob = new Blob([str], {type: ''});
    FileSaver.saveAs(blob, `${fileName.value}.json`);

    // localStorage.setItem(flowKey, str)
    // alert("保存成功")
  } else {
    alert("请填写文件名")
  }
}

const handleFileSelect = (file) => {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const jsonData = JSON.parse(e.target.result);
      console.log('解析成功:', jsonData);
      // 在这里处理解析后的 JSON 数据
      if (jsonData) {
        fileName.value = jsonData.FileName
        fromObject(jsonData.NodeData)
      }
    } catch (error) {
      console.error('JSON 解析失败', error);
    }
  };
  reader.readAsText(file);
};

const fileName = ref("")

const upFile = ref(null)

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-card>
          <v-card-title>Title</v-card-title>
          <v-card-item>
            <v-text-field label="名称"></v-text-field>
          </v-card-item>
        </v-card>
      </v-col>
      <!--      <v-divider class="mx-3" inset vertical ></v-divider>-->
      <v-col cols="10">
        <!--        <div>测试标题</div>-->
        <div class="d-flex flex-wrap ga-3">
          <v-sheet class="pa-0 ma-0" style="width: 10%">
            <v-text-field class="w-1" variant="outlined" label="文件名称" v-model="fileName"
                          suffix=".json"></v-text-field>
          </v-sheet>

          <v-btn @click="OnShowInfo">打印信息</v-btn>
          <v-btn @click="OnSave">保存</v-btn>
          <v-sheet class="pa-0 ma-0" style="width: 20%">
            <v-file-input @update:model-value="handleFileSelect" :model-value="upFile" accept=".json"
                          label="选择json文件"></v-file-input>
          </v-sheet>
          <!--          <v-btn @click="OnLoad">加载</v-btn>-->

        </div>
        <v-divider class="border-opacity-50" :thickness="3" color="info"></v-divider>
        <div class="dnd-flow" @drop="onDrop">

          <VueFlow v-model:nodes="nodes" v-model:edges="edges" @dragover="onDragOver" @dragleave="onDragLeave"
                   :default-edge-options="{style: { stroke: '#4f46e5', strokeWidth: 3 },markerEnd: { type: 'arrowclosed', color: '#4f46e5' }}">
            <DropzoneBackground
                :style="{backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',transition: 'background-color 0.2s ease',}">
              <p v-if="isDragOver">Drop here</p>
            </DropzoneBackground>
            <MiniMap pannable zoomable/>
            <template #node-Content="contentNodeProps">
              <ContentNode v-bind="contentNodeProps"/>
            </template>
            <template #node-Button="buttonNodeProps">
              <ButtonNode v-bind="buttonNodeProps"/>
            </template>
            <template #node-Progress="progressNodeProps">
              <ProgressNode v-bind="progressNodeProps"/>
            </template>
            <template #node-Condition="conditionNodeProps">
              <ConditionNode v-bind="conditionNodeProps"/>
            </template>

          </VueFlow>
          <Sidebar/>

        </div>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
/* @import '../../../node_modules/@vue-flow/core/dist/style.css'; */

/*@import '@vue-flow/core/dist/style.css';*/
</style>