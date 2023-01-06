<script lang="ts">
	export let reverse: boolean = false;
	export let overlayImage: string = '';

    overlayImage = `url(${overlayImage})`;
</script>

<div class="hero min-h-screen bg-base-200 {$$props.class ? $$props.class : ''}" style:background-image={overlayImage}>
	{#if overlayImage}
		<div class="hero-overlay bg-opacity-60" />
	{/if}
	<div
		class="hero-content text-center"
		class:flex-col={reverse}
		class:lg:flex-row-reverse={reverse}
	>
		<div class="max-w-md">
			<slot />
		</div>
	</div>
</div>
