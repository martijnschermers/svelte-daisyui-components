<script lang="ts">
	export let bordered: boolean = true;
</script>

<div class="mockup-window {$$props.class ? $$props.class : ''}" class:border={bordered} class:bordered-base-300={bordered}>
	<div class="flex justify-center px-4 py-16 bordered-t" class:bordered-base-300={bordered}>
		<slot />
	</div>
</div>
