<template>
    <!-- 表示路由页面根节点 -->
    <section>
        <!-- 可以是多个视图 pages -->
        <keep-alive>
            <component :is="currView"></component>
        </keep-alive>
    </section>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import WorkView from "./WorkView.vue";

    export default defineComponent({
        name: "work",
        components: { WorkView },
        setup() {
            const currView = ref("WorkView");

            // 通过work对象来通知{currView变量}渲染哪个WorkView
            return { currView };
        }
    });
</script>

<style scoped></style>
