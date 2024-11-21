<template>
  <div class="button-bar p-5" v-if="model" style="background-color: #6A6A6A;">
    <div v-if="model != null &&model.length>0 " class="flex flex-wrap justify-evenly gap-10">
      <PrimaryButton
        v-for="(link, index) in model"
        :key="index"
        :button-Color="buttonColor"
        :backgroundColor="backgroundColor"
        :reversed="true"
        :model="link"
        :add-base-domain="true"
      >
        {{ link.name }}
      </PrimaryButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
export default defineComponent({
  props: {
    model: Object as PropType<BaseLink[]>, // Array of BaseLink objects
    backgroundColor: String, // Background color of the button bar
    buttonColor: String // Color of the buttons
  },
  setup() {}, // defines the component's reactive state and methods
});
</script>