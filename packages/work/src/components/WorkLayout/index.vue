<template>
    <grid-layout :col-num="24" :row-height="30" :is-draggable="true" :is-resizable="true" :vertical-compact="true" :use-css-transforms="true" v-bind="$attrs">
        <slot></slot>
    </grid-layout>
</template>

<script setup>
    import { GridItem, GridLayout, eventBusKey } from "vue-grid-layout-next";
</script>

<style lang="less" scoped></style>
