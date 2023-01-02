<script lang="ts">
    export let size: 1 = 1; 
	export let horizontal: boolean = false;
	export let demo: boolean = false;
</script>

<div class="artboard phone-{size}" class:artboard-horizontal={horizontal} class:artboard-demo={demo}>
	<slot />
</div>
