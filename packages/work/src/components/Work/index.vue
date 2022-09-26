<template>
    <!-- 表示路由页面根节点 -->
    <section class="work">
        <!-- 可以是多个视图 pages -->
        <!-- {{ views[currViewIndex] }} -->
        <work-view :workViewItem="views[currViewIndex]"></work-view>
    </section>
</template>

<script setup>
    import { computed, ref, watchEffect } from "vue";

    const props = defineProps({
        workItem: {
            type: Object,
            default() {
                return {};
            }
        }
    });

    const work = computed(() => props.workItem);
    const currViewIndex = computed(() => props.workItem.viewIndex);
    const views = computed(() => props.workItem.views);
</script>

<style scoped></style>
