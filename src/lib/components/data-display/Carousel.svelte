<script lang="ts">
	import type { ImageType } from '$lib/interfaces/image.interface';

	export let images: ImageType[] = [];
	export let numbers: boolean = false;
	export let arrows: boolean = false;
	export let center: boolean = false;
	export let end: boolean = false;
	export let vertical: boolean = false;
	export let width: 'half' | 'full' | '' = '';
</script>

<div
	class="carousel rounded-box w-fit {$$props.class ? $$props.class : ''}"
	class:carousel-center={center}
	class:carousel-end={end}
	class:carousel-vertical={vertical}
	class:h-96={vertical}
	class:w-96={width === 'half'}
>
	{#each images as image, index}
		<div
			id="slide{index}"
			class="carousel-item {width === 'half' ? 'w-1/2' : ''}"
			class:w-full={width === 'full'}
			class:h-full={vertical}
		>
			<img
				id="item{index}"
				class:w-full={width === 'full' || 'half'}
				src={image.src}
				alt={image.alt}
			/>
			{#if arrows}
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#item{index - 1}" class="btn btn-circle">❮</a>
					<a href="#item{index + 1}" class="btn btn-circle">❯</a>
				</div>
			{/if}
		</div>
	{:else}
		<div
			id="slide"
			class="carousel-item {width === 'half' ? 'w-1/2' : ''}"
			class:w-full={width === 'full'}
			class:h-full={vertical}
		>
			<slot />
		</div>
	{/each}
</div>
{#if numbers}
	<div class="flex justify-center w-full py-2 gap-2">
		{#each images as _, index}
			<a href="#item{index}" class="btn btn-xs">{index + 1}</a>
		{/each}
	</div>
{/if}
