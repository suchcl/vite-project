<template>
    <h3>测试vueuse的鼠标坐标</h3>
    <h4>Mouse: {{ x }} x {{ y }}</h4>
</template>

<script>
import { defineComponent } from "vue";
import { useMouse } from "@vueuse/core";

export default defineComponent({
    name: 'VueUse',
    setup() {
        const { x, y } = useMouse();
        return {
            x,
            y
        }
    }
});
</script>