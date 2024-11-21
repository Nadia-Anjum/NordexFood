import { pageStore } from "@/stores/pageStore"
import type { Settings, Setting } from "~/types/config";
import type { pageData } from "~/types/pageData";

export default defineNuxtRouteMiddleware(async (to) => {
  const store = pageStore(); // Access page store
  const config = useRuntimeConfig(); // Get runtime config
  const data = await $fetch(`${config.public.baseUrl}/umbraco/delivery/api/v2/content/item/${encodeURIComponent(to.path)}?expand=properties%5B%24all%5D&fields=properties%5B%24all%5D`);
  store.setPageData(data as unknown as pageData); // Set page data

  callOnce(async () => {
    const path = encodeURI(to.path)
    const config = useRuntimeConfig(); // Get runtime config
    const settings: Settings = await $fetch(`${config.public.baseUrl}/umbraco/delivery/api/v2/content?filter=contentType%3Asettings&skip=0&take=10&fields=properties%5B%24all%5D`) as unknown as Settings;

    if (settings && settings.items && settings.items[0]) {
      store.setConfig(settings.items[0] as unknown as Setting); // Set config
    }
  });

  if ((data as unknown as pageData)?.properties?.redirect && (data as unknown as pageData)?.properties?.redirect[0]?.route?.path) {
    return navigateTo((data as unknown as pageData)?.properties?.redirect[0]?.route?.path, { redirectCode: 301 }); // Redirect if needed
  }
});