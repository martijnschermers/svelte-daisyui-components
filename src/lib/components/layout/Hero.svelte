<script lang="ts">
	export let reverse: boolean = false;
	export let overlayImage: string = '';
</script>

<div class="hero min-h-screen bg-base-200" style:background-image={overlayImage}>
	{#if overlayImage}
		<div class="hero-overlay bg-opacity-60" />
	{/if}
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Hello there</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
