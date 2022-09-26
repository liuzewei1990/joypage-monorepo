<template>
    <!-- 表示视图组件,用来解析element -->
    <section class="work-component">
        <component :is="coName" v-bind="coProps"></component>
    </section>
</template>

<script setup>
    import { computed } from "vue";

    const props = defineProps({
        workComponentItem: {
            type: Object,
            default() {
                return {};
            }
        }
    });
    const coName = computed(() => props.workComponentItem.coName);
    const coProps = computed(() => props.workComponentItem.coProps);
    console.log(123, coProps.value);
</script>

<style scoped></style>
