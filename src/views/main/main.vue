<!--
 * @Author: liruihong
 * @Date: 2022-04-30 21:15:07
 * @LastEditTime: 2022-05-01 09:40:52
 * @LastEditors: liruihong
 * @Description: test flex layout  last columns
-->

<template>
  <div>
    <div class="box">
      <template v-for="(item, index) in 11" :key="index">
        <div class="box-item">
          {{ index }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 600px;
  padding: 20px 6px 20px 30px;
  border: 1px solid #000;
}
.box-item {
  width: calc((100% - 24px * 4) / 4);
  margin-right: 24px;
  margin-bottom: 30px;
  height: 140px;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 4px 4px 4px #ccc;
}
.box::after {
  content: "";
  flex: 1;
}
</style>
