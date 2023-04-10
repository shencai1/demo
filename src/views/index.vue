<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header class="">Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style lang="less" module></style>
