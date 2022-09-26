<template>
    <!-- 表示页面中的一个视图 -->
    <section class="work-view">
        <work-layout v-model:layout="workComponents">
            <work-component v-for="item in workComponents" :key="item.elId" :workComponentItem="item"></work-component>
        </work-layout>
    </section>
</template>

<script setup>
    import { computed, ref } from "vue";
    import { GridItem, GridLayout, eventBusKey } from "vue-grid-layout-next";

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

<style lang="less" scoped>
    .work-view {
        background: #f9f9f9;

        .box {
            background: #f3f3f3;
        }
    }
</style>
