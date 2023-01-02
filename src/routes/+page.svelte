<script lang="ts">
	import { Size } from '$lib/enums/size.enum';
	import type { Image } from '$lib/interfaces/image.interface';
	import Card from '$lib/components/data-display/Card.svelte';
	import Kbd from '$lib/components/data-display/Kbd.svelte';
	import Progress from '$lib/components/data-display/Progress.svelte';
	import Alert from '$lib/components/data-display/Alert.svelte';
	import Button from '$lib/components/actions/Button.svelte';
	import Avatar from '$lib/components/data-display/Avatar.svelte';
	import ChatBubble from '$lib/components/data-display/ChatBubble.svelte';
	import Countdown from '$lib/components/data-display/Countdown.svelte';
	import Rating from '$lib/components/data-input/Rating.svelte';
	import Toggle from '$lib/components/data-input/Toggle.svelte';
	import Code from '$lib/components/mockup/Code.svelte';
	import Line from '$lib/components/mockup/Line.svelte';
	import Menu from '$lib/components/navigation/Menu.svelte';
	import MenuItem from '$lib/components/navigation/MenuItem.svelte';
	import Pagination from '$lib/components/navigation/Pagination.svelte';
	import RadialProgress from '$lib/components/data-display/RadialProgress.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';

	let images: Image[] = [
		{
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
			alt: 'Test'
		},
		{
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
			alt: 'Test'
		}
	];

	let buttons = [
		{
			title: '1'
		},
		{
			title: '2',
			active: true
		}
	];
</script>

<h1 class="text-3xl font-bold underline text-center">Svelte DaisyUI</h1>

<Rating name="rating" half={true} checked={20} amount={10} />

<Toggle />

<Menu title="Menu 1">
	<MenuItem bordered={true} hover={true}><a>Item 1</a></MenuItem>
	<MenuItem bordered={true}><a>Item 1</a></MenuItem>
	<MenuItem bordered={true}><a>Item 1</a></MenuItem>
	<MenuItem bordered={true}><a>Item 1</a></MenuItem>
	<MenuItem bordered={true}><a>Item 1</a></MenuItem>
</Menu>

<Pagination {buttons} />

<Code>
	<Line prefix="$">npm install</Line>
	<Line prefix=">">npm run dev</Line>
</Code>

<Countdown value={12} />

<Card>
	<div slot="image">
		<img
			src="https://cdn.discordapp.com/attachments/1051057438285103139/1055434844680765461/image.png"
			alt="Test"
		/>
	</div>

	<div slot="title">Test Card</div>

	<div slot="body">This is a test card</div>

	<button slot="actions" class="btn btn-primary">Click me!</button>
</Card>

<ChatBubble end={true} color="primary">
	<div>Hello World!</div>
</ChatBubble>

<!-- Tested -->
<Progress color="primary" max={200} value={100} />

<RadialProgress color="primary" value={14} />

<!-- Tested -->
<Kbd size="lg">T</Kbd>

<!-- Tested -->
<Alert color="error">
	<p>This is an error alert</p>
	<div slot="actions">
		<Button color="success">V</Button>
		<Button color="error">X</Button>
	</div>
</Alert>

<Navbar color="info"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></Navbar>

<Avatar ring="warning"><p slot="placeholder">K</p></Avatar>
