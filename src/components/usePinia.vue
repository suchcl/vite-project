<template>
    <div>{{ userStore.name }}</div>
    <input type="text" ref="nname">
    <button @click="updateName">修改姓名</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../store/user";
const userStore = useUserStore();

function updateName() {
    let name = ref("nname");
    userStore.updateName(name.value);
}
</script>