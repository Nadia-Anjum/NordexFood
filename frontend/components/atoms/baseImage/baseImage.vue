<template>
        <NuxtImg v-if="model && model?.url" :src="baseUrl+model?.url + crop" :alt="model?.name" :placeholder="placeholder"/>
</template>

<script  lang="ts">
import { defineComponent,type PropType, computed } from 'vue'

export default defineComponent({
    props: {
        model: Object as PropType<Image>,
        crop: {
            type: String,
            default: ""
        },
        placeholder: {
            type: Array,
            default: null
        }
    },
    setup(props) {
        const config = useRuntimeConfig()
        const baseUrl = computed(() => config.public?.imageBaseUrl);

        // Return the computed property so it can be accessed in the template
        return {
            baseUrl
        }
    },
})
</script>