<template>
  <el-input
    v-model="modelValue"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled"
    :clearable="clearable"
    class="app-input"
    @input="handleInput"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  placeholder?: string
  type?: 'text' | 'password' | 'textarea'
  disabled?: boolean
  clearable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '请输入',
  type: 'text',
  disabled: false,
  clearable: true
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'input': [value: string]
}>()

const handleInput = (value: string) => {
  emit('update:modelValue', value)
  emit('input', value)
}
</script>

<style scoped>
.app-input {
  width: 100%;
}
</style>
