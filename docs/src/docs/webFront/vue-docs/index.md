<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

# Vue 语法

---

1. 变量算法
   ::: info

The count is: {{ count }}

<button type="brand" :class="$style.button" @click="count++">点击++</button>

:::

<style lang='less'  module>
.button {
  background: #E9EAFF;
  color: red;
  font-weight: bold;
  padding:5px 10px;
}
</style>
