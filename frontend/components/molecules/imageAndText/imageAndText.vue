<template>
  <!-- Set background color to model's backgroundColor -->
  <div
    v-if="model"
    class=""
    :style="{ backgroundColor: model?.backgroundColor }"
  >
    <div
      class="mx-auto relative flex flex-col space-y-6 lg:h-[32rem] lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6"
    >
      <!-- First column with text -->
      <div class="w-full lg:w-1/2 text-left rounded-md mx-auto p-4 lg:p-0">
        <div class="max-w-lg mr-auto">
          <div>
            <ul
              v-if="
                model.showBreadcrumbs && breadcrumbs && breadcrumbs?.length > 0
              "
              class="flex space-x-2 mb-5"
            >
              <li
                v-for="(breadcrumb, index) in breadcrumbs"
                :key="index"
                class="flex items-center"
              >
                <BaseLink :to="breadcrumb.path" class="custom-red-link">{{
                  breadcrumb.name
                }}</BaseLink>
                <span v-if="index < breadcrumbs.length - 1" class="mx-2"
                  >/</span
                >
              </li>
            </ul>
            <h2
              class="text-3xl font-semibold tracking-wide lg:text-3xl"
              :style="{ color: model?.textColor }"
            >
              {{ model.title }}
            </h2>
            <p
              class="mt-4"
              v-html="model?.text"
              :style="{ color: model?.textColor }"
            ></p>
            <PrimaryButton
              v-if="model.link && model.link.length > 0"
              :button-Color="model.buttonColor"
              :backgroundColor="model.backgroundColor"
              :model="model.link[0]"
            >
              {{ model.link[0].title }}
            </PrimaryButton>
          </div>
        </div>
      </div>

      <!-- Second column with image -->
      <div
        class="flex items-center justify-center w-full lg:w-2/5 h-full"
        data-aos="fade-left"
        v-if="model?.image && model?.image[0]"
      >
        <base-image
          class="object-cover w-full h-full"
          :model="model?.image[0]"
          :crop="'?mode=crop&anchor=center&width=700&height=400&format=webp'"
        />
      </div>
    </div>
  </div>

  <Accordion></Accordion>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import baseImage from "../../atoms/baseImage/baseImage.vue";
import type { imageAndText } from "~/types/imageAndText";

export default defineComponent({
  components: { baseImage },
    // Define the props
    props: {
      model: Object as PropType<imageAndText>, // The main model object
      breadcrumbs: Object as PropType<any[]>, // Breadcrumbs array
    },
    setup() {},
  });
</script>

<style scoped>
.container {
  height: 100%;
}
.custom-red-link {
  color: rgb(161, 53, 53);
  transition: color 0.3s;
}

.custom-red-link:hover {
  color: rgb(114 37 37);
}
</style>
