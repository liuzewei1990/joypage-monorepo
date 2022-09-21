<template>
    <div class="home">
        <p>测试</p>
        <base-select></base-select>
        <base-table></base-table>
        <!-- <module-table></module-table> -->
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import HelloWorld from "@pageA/components/HelloWorld.vue"; // @ is an alias to /src

    export default defineComponent({
        name: "HomeView",
        components: {
            // HelloWorld
        }
    });
</script>
