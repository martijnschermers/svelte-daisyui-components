<script lang="ts">
	import {
		Breadcrumbs,
		BottomNavigation,
		Link,
		Menu,
		Submenu,
		ListItem,
		Navbar,
		Pagination,
		Steps,
		Step,
		Tabs,
		Tab,
		Button,
		type ButtonType
	} from '$lib';

	let buttons: ButtonType[] = [
		{
			svgPath:
				'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
			text: 'warnings'
		},
		{
			svgPath:
				'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
			text: 'home'
		},
		{
			svgPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			text: 'stats'
		}
	];
</script>

<h1 class="header">Navigation</h1>

<div class="components">
	<div>
		<h2>Navbar</h2>
		<Navbar>
			<a href="https://daisyui.com/" class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</Navbar>
	</div>

	<div>
		<h2>Breadcrumbs</h2>
		<Breadcrumbs>
			<ListItem href="#">Home</ListItem>
			<ListItem href="#">Documents</ListItem>
			<li>Add Document</li>
		</Breadcrumbs>
	</div>

    <BottomNavigation {buttons} />

	<BottomNavigation>
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/>
			</svg>
		</button>
		<button class="active">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</button>
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		</button>
	</BottomNavigation>

	<Link href="https://daisyui.com/components/link/">I'm a simple link</Link>

	<Menu>
		<ListItem active={true} href="#">Item 1</ListItem>
		<ListItem href="#">Item 2</ListItem>
		<ListItem href="#">Item 3</ListItem>
		<Submenu>
			<div slot="label">Parent</div>
			<ListItem href="#">Item 1</ListItem>
			<ListItem href="#">Item 2</ListItem>
			<ListItem href="#">Item 3</ListItem>
		</Submenu>
	</Menu>

	<Pagination>
		<Button>1</Button>
		<Button active={true}>2</Button>
		<Button>3</Button>
		<Button>4</Button>
	</Pagination>

	<Steps>
		<Step data={1} color="primary">Register</Step>
		<Step data={2} color="primary">Choose plan</Step>
		<Step data={3}>Purchase</Step>
		<Step data={4}>Recieve product</Step>
	</Steps>

	<Tabs>
		<Tab href="#">Tab 1</Tab>
		<Tab href="#" active={true}>Tab 2</Tab>
		<Tab href="#">Tab 3</Tab>
	</Tabs>
</div>
