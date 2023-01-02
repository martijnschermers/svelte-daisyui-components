<script lang="ts">
	export let size: 1 | 2 | 3 | 4 | 5 | 6 = 1;
	export let horizontal: boolean = false;
	export let demo: boolean = false;
</script>

<div
	class="artboard {$$props.class ? $$props.class : ''}"
	class:phone-1={size === 1}
	class:phone-2={size === 2}
	class:phone-3={size === 3}
	class:phone-4={size === 4}
	class:phone-5={size === 5}
	class:phone-6={size === 6}
	class:artboard-horizontal={horizontal}
	class:artboard-demo={demo}
>
	<slot />
</div>
