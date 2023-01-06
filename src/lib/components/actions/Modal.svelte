<script lang="ts">
	export let id: string = 'my-modal';
	export let responsive: boolean = false;
</script>

<label for={id} class="btn"><slot name="label" /></label>

<input type="checkbox" {id} class="modal-toggle" />
<div class="modal" class:modal-bottom={responsive} class:sm:modal-middle={responsive}>
	<div class="modal-box {$$props.class ? $$props.class : ''}">
		<slot />

		<div class="modal-action">
			<slot name="action" />
		</div>
	</div>
</div>
