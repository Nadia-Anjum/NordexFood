import type { Setting } from "~/types/config";
import type { pageData } from "~/types/pageData";

export const pageStore = defineStore('pageStore', {
  state: () => ({ config: { }, pageData: {}}),
  getters: {
    getPageData: (state) => state.pageData,
    getSetting: (state) => state.config
   
  },
  actions: {
    setPageData(data: pageData) {
      data.breadcrumbs = [];
      data.breadcrumbs.push({ name: "Front page", path: "/" });
      data.breadcrumbs.push({ name: data.name, path: data.route.path });
      this.$state.pageData = data;
    },
    setConfig(data: Setting){
      this.$state.config = data;
    }
   
  },
})