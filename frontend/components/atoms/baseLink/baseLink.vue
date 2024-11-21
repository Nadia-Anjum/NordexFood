<template>
    <NuxtLink :to="model?.route?.path ? model?.route?.path : model?.url " :target="model?.target" :title="model?.title" class="a-base-link">
        <slot />
    </NuxtLink>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
    model: Object as PropType<BaseLink>
});

</script>