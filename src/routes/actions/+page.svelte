<script lang="ts">
	import { Position } from '../../lib/enums/position.enum';
	import { Size } from '../../lib/enums/size.enum';
	import { Color } from '../../lib/enums/color.enum';

	import Button from '$lib/components/actions/Button.svelte';
	import Modal from '$lib/components/actions/Modal.svelte';
	import Swap from '$lib/components/actions/Swap.svelte';
	import Dropdown from '$lib/components/actions/Dropdown.svelte';
</script>

<h1>Actions</h1>

<!-- Tested -->
<Button color="primary" size="lg">Button</Button>

<!-- Tested -->
<Swap>
	<div slot="on">ON</div>
	<div slot="off">OFF</div>
</Swap>

<Modal responsive={true}>
	<p slot="label">Open modal</p>
	<p slot="title">Congratulations random Internet user!</p>
	<p slot="body">
		You've been selected for a chance to get one year of subscription to use Wikipedia for free!
	</p>
	<p class="btn" slot="action">Yay!</p>
</Modal>

<Dropdown position={Position.Left} end={false}>
	<p slot="label">Click</p>
	<div slot="items">
		<li><a href="#">Item 1</a></li>
		<li><a href="#">Item 2</a></li>
	</div>
</Dropdown>
