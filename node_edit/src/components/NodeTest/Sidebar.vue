<script setup>
import useDragAndDrop from './useDnD'

const {onDragStart} = useDragAndDrop()
</script>

<template>
  <aside>
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="nodes">

      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'Empty')">空节点</div>
      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'Content')">内容节点</div>
      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'Button')">按钮节点</div>
      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'Progress')">倒计时节点</div>
      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'Condition')">条件节点</div>
    </div>
  </aside>
</template>
