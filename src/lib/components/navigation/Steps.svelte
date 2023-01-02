<script lang="ts">
	import type { Step as StepInterface } from '../../interfaces/step.interface';
	import Step from './Step.svelte';

	export let steps: StepInterface[] = [];
	export let vertical: boolean = false;
	export let responsive: boolean = false;
</script>

<ul
	class="steps {$$props.class ? $$props.class : ''}"
	class:steps-vertical={vertical || responsive}
	class:lg:steps-horizontal={responsive}
>
	{#each steps as step}
		<Step data={step.data} color={step.color}>{step.text}</Step>
	{:else}
		<slot />
	{/each}
</ul>
