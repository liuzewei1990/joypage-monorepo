<template>
    <!-- 表示页面中的一个视图 -->
    <div class="work-view">
        <!-- 视图中的组件模块 -->
        <WorkViewComponent></WorkViewComponent>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import WorkViewComponent from "./WorkViewComponent.vue";

    export default defineComponent({
        components: { WorkViewComponent },
        name: "work-view",
        setup() {
            return {};
        }
    });
</script>

<style scoped></style>
