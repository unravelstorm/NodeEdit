<script lang="ts" setup>
import {Background} from '@vue-flow/background'
</script>

<template>
  <div class="dropzone-background">
    <!--    <Background variant="lines" size="1"/>-->

    <Background variant="lines" :size="2" :gap="20"/>

    <div class="overlay">
      <slot/>
    </div>
  </div>
</template>
