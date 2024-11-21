<template>
  <div class="flex flex-col pt-10">
    <div>
      <div class="flex flex-wrap gap-2 md:gap-5 mx-2 md:mx-10">
        <button
          v-for="(tab, index) in model?.tab?.items"
          :key="index"
          :class="['px-4 py-2 md:px-6 md:py-4 text-md md:text-lg font-semibold cursor-pointer border-b-4', { 'border-gray-500': activeTab === index, 'border-transparent hover:border-gray-300': activeTab !== index }]"
          @click="setActiveTab(index)"
        >
          {{ tab.content?.properties?.title }}
        </button>
      </div>
      <div class="leading-relaxed p-4 md:p-8" :style="{ backgroundColor: '#A13535'}">
        <p>{{ activeTabContent?.text }}</p>
        <div>
          <div class="relative flex flex-col md:flex-row gap-4 md:gap-6 pb-20 md:pb-40 sm:pb-4">
            <component class="relative flex flex-col" v-for="(component, index) in activeTabContent?.tabContent?.items" :key="index" :is="componentSwitch(component?.content?.contentType)" :model="component?.content?.properties"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: Object,
  },
  data() {
    return {
      activeTab: 0, // Add the active tab data property
    };
  },
  methods: {
    setActiveTab(index) { // Add the setActiveTab method
      this.activeTab = index;
    },
    componentSwitch // Add the component switch function
  },
  computed: {
    activeTabContent() {
      return this.model?.tab?.items[this.activeTab]?.content?.properties; // Get the active tab content
    },
  },
};
</script>