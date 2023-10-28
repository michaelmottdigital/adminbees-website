<template>
    <div 
        class="logo-text font-bold"
        :class="locationClass"
        >
        admin bees
    </div>
</template>
<script setup>

const locationClass = computed( () => {
    if ( props.location == "header") {
        return "text-4xl"
    } else {
        return "text-3xl"
    }
})

const props = defineProps({
    location: ""
})

</script>

<style scoped>
.logo-text {
    font-family: "Zen Loop";

}

</style>