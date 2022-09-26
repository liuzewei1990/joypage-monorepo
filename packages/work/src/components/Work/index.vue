<template>
    <!-- 表示路由页面根节点 -->
    <section>
        <!-- 可以是多个视图 pages -->
        <work-view></work-view>
    </section>
</template>

<script>
    import { ref } from "vue";

    export default {
        name: "work",
        setup() {
            const currView = ref("work-wiew");

            // 通过work对象来通知{currView变量}渲染哪个WorkView
            return { currView };
        }
    };
</script>

<style scoped></style>
