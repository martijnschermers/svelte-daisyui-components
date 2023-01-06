# Svelte daisyUI Components

Svelte components for the daisyUI component library. Written in Svelte and Typescript.

## Features

- Full Typescript support
- Almost all components fully implemented

## Installation

Install [tailwindcss](https://tailwindcss.com/docs/guides/sveltekit) and [daisyui](https://daisyui.com/docs/install/) with npm

```bash
  npm i -D tailwindcss postcss autoprefixer daisyui
```

Install svelte-daisyui-components with npm

```bash
  npm i svelte-daisyui-components
```
    
## Usage/Examples
For some very basic examples you can take a look at the provided routes, located in the routes directory of this repository. 

```typescript
<script lang="ts">
    import { Button } from 'svelte-daisyui'
</script>

<Button>Button</Button>
```

## Components
Missing features on components. 

Actions: 
All features are implemented. 

Data Display: 
- Avatar: not possible to apply mask and add counter.
- Card: not possible to add action on top. 
- Carousel: navigation buttons not working properly. 
- Collapse: colors on focus not working properly. 

Data Input: 
- Radio: not possible to add labels.
- Checkbox: not possible to add labels. 
- Toggle: not possible to add labels. 
- Range: steps and measure not always accurate. 

Layout: 
- Drawer: navbar on desktop and drawer on mobile option not implemented. 
- Hero: figure not implemented. 
- Indicator: multiple indicators not implemented.

Navigation: 
- BottomNavigation: rendering buttons through buttons prop not working properly. 
- Steps: user needs to provide data himself if steps are added through slot. 

Mockup: 
All features are implemented. 
## Roadmap

- Add Storybook. 
- Extract string values from enums instead of hardcoding them.
- Fix/add missing features on components. 
- Write tests for components. 
- Figure out on which element we want to apply $$props.class, sometimes you want to apply styles to multiple elements. 
- Apply $$restProps to relevant components. 

## Contributing

Contributions are always welcome!
If you encounter a bug or missing feature, feel free to open a pull request or issue!

## License

[MIT](https://choosealicense.com/licenses/mit/)
