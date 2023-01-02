<script lang="ts">
	export let horizontal: boolean = false;
	export let responsive: boolean = false;
</script>

<div class="divider {$$props.class ? $$props.class : ''}" class:divider-horizontal={horizontal} class:lg:divider-horizontal={responsive}>
	<slot />
</div>
