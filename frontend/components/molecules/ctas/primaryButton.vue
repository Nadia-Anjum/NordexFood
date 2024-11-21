<template>
  <div class="my-8">
    <BaseLink
      :model="model"
      class="mt-4 px-6 py-3 rounded-full btn font-semibold hover:opacity-80"
      :class="buttonClass"
    >
      <slot />
    </BaseLink>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
    model: Object as PropType<BaseLink>, // BaseLink object
    buttonColor: String, // Button color
    backgroundColor: String, // Background color
    addBaseDomain: Boolean, // Flag to add base domain
    reversed: Boolean // Flag to reverse the button style
});

const config = useRuntimeConfig(); // Get runtime config
const baseUrl = computed(() => config.public?.imageBaseUrl); // Compute base URL

if (props.addBaseDomain) {
    props.model.url = `${baseUrl.value}${props.model.url}`; // Add base domain to URL
    props.model.target = "_blank"; // Open link in new tab
}

const { backgroundColor } = props; // Destructure backgroundColor from props
const { buttonColor } = props; // Destructure buttonColor from props
const { reversed } = props; // Destructure reversed from props

const buttonClass = computed(() => {
    let btnClass = "";
    switch (backgroundColor) {
        case "#A13535":
            btnClass = reversed ? "btn--whiteDarkRed" : "btn--darkRed"; // Set class based on reversed flag (red/white)
            break;
        case "#00335F":
            btnClass = "btn--blue"; // Blue txt. with white bg. button class
            break;
        case "#ffffff":
            if (buttonColor === "#A13535") {
                btnClass = "btn--whiteDarkRed"; // White txt. with dark red bg. button
            } else if (buttonColor === "#00335F") {
                btnClass = "btn--whiteWblue"; // White txt. with blue bg. button
            } else {
                btnClass = "btn--whiteWbeige"; // White txt. with beige bg. button
            }
            break;
        case "#A78952":
            btnClass = "btn--darkBeige"; // White bg. w beige txt. button class
            break;
        default:
            btnClass = "btn--blue"; // Default to blue button class
            break;
    }
    return btnClass;
});
</script>
<style  scoped>
.btn {
  background-color: #ffffff; /* white background wth red text */
  color: #A13535;
  &--darkRed { /* white background wth red text*/
    background-color: #ffffff; 
    color: #A13535;
  }
  &--whiteDarkRed { /* red background with white text*/
    color: #ffffff; 
    background-color: #A13535;
  }
  &--blue { /* blue text with white background*/
    background-color: #ffffff;
    color: #00335F;
  }
  &--whiteWblue { /* White text with blue background*/
    color: #ffffff;
    background-color: #00335F;
  }
  &--darkBeige { /* dark beige text with white background */
    background-color: #ffffff;
    color: #A78952;
  }
  &--whiteWbeige { /* white text with dark beige background */
    background-color: #A78952;
    color: #FFF;
  }
 
}
</style>