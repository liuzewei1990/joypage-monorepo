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
                            { elId: "30001", x: 12, y: 0, w: 12, h: 11, i: "30001", elStyle: {}, coType: "vue", coName: "Table", coProps: {}, coEvent: [], coMethods: [], moved: false },
                            { elId: "30002", x: 0, y: 0, w: 12, h: 11, i: "30002", elStyle: {}, coType: "vue", coName: "Table", coProps: {}, coEvent: [], coMethods: [], moved: false },
                            {
                                elId: "30003",
                                x: 2,
                                y: 11,
                                w: 4,
                                h: 3,
                                i: "30003",
                                elStyle: {},
                                coType: "vue",
                                coName: "Button",
                                coProps: { type: "primary", text: "提交" },
                                coEvent: [],
                                coMethods: [],
                                moved: false
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
