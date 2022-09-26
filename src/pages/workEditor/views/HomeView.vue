<template>
    <div class="home">
        <p>测试</p>
        <base-select></base-select>
        <Table></Table>
        <work></work>
        <work-view></work-view>
        <work-wiew-component></work-wiew-component>
        <a-space>
            <a-button type="primary">Primary</a-button>
            <a-button>Secondary</a-button>
            <a-button type="dashed">Dashed</a-button>
            <a-button type="outline">Outline</a-button>
            <a-button type="text">Text</a-button>
        </a-space>
    </div>
</template>

<script>
    import { defineComponent } from "vue";
    export default defineComponent({
        name: "HomeView",
        components: {
            // HelloWorld
        }
    });
</script>
