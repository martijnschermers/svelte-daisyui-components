<script lang="ts">
	export let id: string = 'my-modal';
	export let responsive: boolean = false;
</script>

<label for={id} class="btn"><slot name="label" /></label>

<input type="checkbox" {id} class="modal-toggle" />
<div class="modal" class:modal-bottom={responsive} class:sm:modal-middle={responsive}>
	<div class="modal-box {$$props.class}">
		<h3 class="font-bold text-lg"><slot name="title" /></h3>
		<p class="py-4">
			<slot name="body" />
		</p>
		<div class="modal-action">
			<label for={id}><slot name="action" /></label>
		</div>
	</div>
</div>
