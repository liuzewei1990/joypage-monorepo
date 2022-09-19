<template>
    <!-- 表示路由页面根节点 -->
    <section class="work">
        <!-- 可以是多个视图 pages -->
        <WorkView></WorkView>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import WorkView from "./WorkView.vue";

    export default defineComponent({
        components: { WorkView },
        setup() {
            return {};
        }
    });
</script>

<style scoped></style>
