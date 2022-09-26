<template>
    <!-- 表示页面中的一个视图 -->
    <section class="work-view">
        <!-- 视图中的组件模块 -->
        <div v-for="item in workComponents" :key="item.elId">
            <work-component :workComponentItem="item"></work-component>
        </div>
    </section>
</template>

<script setup>
    import { computed } from "vue";

    const props = defineProps({
        workViewItem: {
            type: Object,
            default() {
                return {};
            }
        }
    });

    const workView = computed(() => props.workViewItem);
    const workComponents = computed(() => props.workViewItem.elements);
</script>

<style scoped></style>
