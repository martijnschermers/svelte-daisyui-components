<script lang="ts">
	import { Button, Modal, Swap, Dropdown, ListItem } from '$lib';
</script>

<h1 class="text-4xl font-bold text-center">Actions</h1>

<div class="flex justify-center flex-col">
	<Button color="secondary">Button</Button>

	<Swap>
		<div slot="on">ON</div>
		<div slot="off">OFF</div>
	</Swap>

	<Modal responsive={true}>
		<p slot="label">Open modal</p>
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<label for="my-modal" class="btn">Yay!</label>
	</Modal>

	<Dropdown end={false}>
		<p slot="label">Click</p>
		<ListItem href="#">Item 1</ListItem>
		<ListItem href="#">Item 2</ListItem>
	</Dropdown>
</div>
