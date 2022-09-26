<template>
    <Button type="primary" class="work-btn" v-bind="$attrs">{{ text }}</Button>
</template>

<script setup>
    import { computed } from "vue";
    import { Button, Tooltip } from "@arco-design/web-vue";
    const props = defineProps({
        text: {
            type: String,
            default: ""
        }
    });

    const text = computed(() => props.text);
</script>
<style lang="less" scoped>
    .work-btn {
        width: 100%;
        height: 100%;
    }
</style>
