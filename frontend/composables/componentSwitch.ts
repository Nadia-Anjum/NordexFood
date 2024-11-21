export function componentSwitch(alias: string){
    let type = ""
    switch(alias) {
        case "hero":
            type = "molecules"
            break;
            
        case "heroSliders": 
            type = "molecules"
            break;

        case "imageAndText": 
            type = "molecules"
            break;

        case "imageAndTextReverse": 
            type = "molecules"
            break;

        case "uspElements":
            type = "molecules"
            break;

        case "numberCounts":
            type = "molecules"
            break;

        case "search":
            type = "molecules"
            break;

        case "accordion":
            type = "molecules"
            break;

        case "searchResults":
            type = "molecules"
            break;

        case "productSliderContainer":
            type = "molecules"
            break;

        case "buttonBar":
            type = "molecules"
            break;

        case "tabs":
            type = "organisms"
            break;

        case "quote":
            type = "atoms"
            break;

        case "richText":
            type = "atoms"
            break;

        case "richTextLeft":
            type = "atoms"
            break;
    }

    return defineAsyncComponent(
    () => import(`@/components/${type}/${alias}/${alias}.vue`)
  );
}

