<script lang="ts">
    export let id: string = 'my-drawer';
	export let mobile: boolean = false;
	export let end: boolean = false;
</script>

<div class="drawer {$$props.class ? $$props.class : ''}" class:drawer-mobile={mobile} class:drawer-end={end}>
	<input {id} type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<label for={id} class="btn btn-primary drawer-button" class:lg:hidden={mobile}>
			<slot name="label" />
		</label>
	</div>
	<div class="drawer-side">
		<label for={id} class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<slot name="content" />
		</ul>
	</div>
</div>
