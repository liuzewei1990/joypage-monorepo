<template>
    <div>
        <work :workItem="work"></work>
        <!-- <work-view></work-view> -->
    </div>
</template>

<script>
    import { reactive } from "vue";

    export default {
        setup() {
            const work2 = reactive({
                workId: "10001",
                workMode: "",
                title: "",
                width: "100%",
                height: "100%",
                coverImg: "",
                viewIndex: 0,
                views: [
                    {
                        viewId: "20001",
                        title: "",
                        elements: [
                            {
                                elId: "30001",
                                elStyle: {},
                                coType: "vue",
                                coName: "Table",
                                coProps: {},
                                coEvent: [],
                                coMethods: []
                            },
                            {
                                elId: "30001",
                                elStyle: {},
                                coType: "vue",
                                coName: "BaseSelect",
                                coProps: {},
                                coEvent: [],
                                coMethods: []
                            },
                            {
                                elId: "30001",
                                elStyle: {},
                                coType: "vue",
                                coName: "Button",
                                coProps: { type: "primary" },
                                coEvent: [],
                                coMethods: []
                            }
                        ]
                    }
                ]
            });

            const work = reactive({
                workId: "10001",
                workMode: "",
                title: "",
                width: "100%",
                height: "100%",
                coverImg: "",
                viewIndex: 0,
                views: [
                    {
                        viewId: "20001",
                        title: "",
                        elements: [
                            {
                                elId: "30001",
                                elStyle: {},
                                coType: "vue",
                                coName: "Table",
                                coProps: {},
                                coEvent: [],
                                coMethods: []
                            },
                            {
                                elId: "30001",
                                elStyle: {},
                                coType: "vue",
                                coName: "BaseSelect",
                                coProps: {},
                                coEvent: [],
                                coMethods: []
                            },
                            {
                                elId: "30001",
                                elStyle: {},
                                coType: "vue",
                                coName: "Button",
                                coProps: { type: "primary", text: "提交" },
                                coEvent: [],
                                coMethods: []
                            },
                            {
                                elId: "30001",
                                elStyle: {},
                                coType: "vue",
                                coName: "work",
                                coProps: { workItem: work2 },
                                coEvent: [],
                                coMethods: []
                            }
                        ]
                    }
                ]
            });

            return { work };
        }
    };
</script>

<style lang="scss" scoped></style>
