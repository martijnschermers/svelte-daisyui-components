<script lang="ts">
	import {
		Artboard,
		ButtonGroup,
		Divider,
		Drawer,
		Footer,
		Hero,
		Indicator,
		InputGroup,
		Stack,
		Toast,
		Button,
		Alert,
		Link,
		ListItem
	} from '$lib';
</script>

<h1 class="header">Layout</h1>

<div class="components">
	<Hero>
		<img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
		<h1 class="text-5xl font-bold">Hello there</h1>
		<p class="py-6">
			Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
			quasi. In deleniti eaque aut repudiandae et Link href="#" id nisi.
		</p>
		<Button color="primary">Get Started</Button>
	</Hero>

	<Artboard horizontal={true}>320×568</Artboard>

	<ButtonGroup>
		<Button active={true}>Button</Button>
		<Button>Button</Button>
		<Button>Button</Button>
	</ButtonGroup>

	<Divider>OR</Divider>

	<Drawer>
		<div slot="label">Open drawer</div>
		<ListItem href="#">Sidebar Item 1</ListItem>
		<ListItem href="#">Sidebar Item 2</ListItem>
	</Drawer>

	<Indicator color="primary">
		<div slot="badge" />
		<div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
	</Indicator>

	<InputGroup>
		<div slot="label">Your Email</div>
		<span>Email</span>
		<input type="text" placeholder="info@site.com" class="input input-bordered" />
	</InputGroup>

	<Stack>
		<div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
		<div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
		<div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
			3
		</div>
	</Stack>

	<Toast>
		<Alert color="info">New message arrived</Alert>
	</Toast>

	<Footer>
		<div>
			<span class="footer-title">Services</span>
			<Link href="#" hover={true}>Branding</Link>
			<Link href="#" hover={true}>Design</Link>
			<Link href="#" hover={true}>Marketing</Link>
			<Link href="#" hover={true}>Advertisement</Link>
		</div>
		<div>
			<span class="footer-title">Company</span>
			<Link href="#" hover={true}>About us</Link>
			<Link href="#" hover={true}>Contact</Link>
			<Link href="#" hover={true}>Jobs</Link>
			<Link href="#" hover={true}>Press kit</Link>
		</div>
		<div>
			<span class="footer-title">Legal</span>
			<Link href="#" hover={true}>Terms of use</Link>
			<Link href="#" hover={true}>Privacy policy</Link>
			<Link href="#" hover={true}>Cookie policy</Link>
		</div>
	</Footer>
</div>
