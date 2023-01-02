<script lang="ts">
	import type { ImageType } from '$lib/interfaces/image.interface';

	export let images: ImageType[] = [];
	export let numbers: boolean = false;
	export let arrows: boolean = false;
    export let center: boolean = false; 
    export let end: boolean = false; 
    export let width: 'half' | 'full' | '' = ''; 
</script>

<div class="carousel rounded-box {$$props.class ? $$props.class : ''}" class:carousel-center={center} class:carousel-end={end}>
	{#each images as image, index}
		<div id="slide{index}" class="carousel-item relative w-full">
			<img id="item{index}" class="w-full" src={image.src} alt={image.alt} />
			{#if arrows}
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide{index - 1}" class="btn btn-circle">❮</a>
					<a href="#slide{index + 1}" class="btn btn-circle">❯</a>
				</div>
			{/if}
		</div>
	{/each}
</div>
{#if numbers}
	<div class="flex justify-center w-full py-2 gap-2">
		{#each images as _image, index}
			<a href="#item{index}" class="btn btn-xs">{index + 1}</a>
		{/each}
	</div>
{/if}
