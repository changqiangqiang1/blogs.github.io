<script setup>
import { ref } from 'vue'
import TextAnimation from "./cssComponent/index.vue"
const count = ref(0)
</script>

# Vue 语法

---

1. 变量算法
::: info 操作变量

The count is: {{ count }}

<button type="brand" :class="$style.button" @click="count++">点击++</button>

:::

2. vue组件插入
::: info 组件
<TextAnimation/>
:::

<style lang='less'  module>
.button {
  background: #E9EAFF;
  color: red;
  font-weight: bold;
  padding:5px 10px;
}
</style>
