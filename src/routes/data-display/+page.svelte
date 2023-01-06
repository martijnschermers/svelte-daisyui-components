<script lang="ts">
	import {
		type ImageType,
		Alert,
		Avatar,
		Badge,
		Card,
		Carousel,
		ChatBubble,
		Collapse,
		Countdown,
		Kbd,
		Progress,
		RadialProgress,
		Stat,
		Stats,
		Table,
		Tooltip,
		Button
	} from '$lib';
	import AvatarGroup from '$lib/components/data-display/AvatarGroup.svelte';

	let images: ImageType[] = [
		{
			src: 'https://placeimg.com/400/300/arch',
			alt: 'Arch'
		},
		{
			src: 'https://placeimg.com/400/300/arch',
			alt: 'Arch'
		}
	];
</script>

<h1 class="header">Data Display</h1>

<div class="components">
	<Alert>12 unread messages. Tap to see.</Alert>

	<Avatar rounded={true}><img src="https://placeimg.com/192/192/people" alt="People" /></Avatar>

	<AvatarGroup>
		<Avatar rounded={true}><img src="https://placeimg.com/192/192/people" alt="People" /></Avatar>
		<Avatar rounded={true}><img src="https://placeimg.com/192/192/people" alt="People" /></Avatar>
		<Avatar rounded={true}><img src="https://placeimg.com/192/192/people" alt="People" /></Avatar>
	</AvatarGroup>

	<Badge>Badge</Badge>

	<Card>
		<img src="https://placeimg.com/400/225/arch" alt="Shoes" slot="image" />
		<h2 slot="title">Shoes!</h2>
		<p slot="body">If a dog chews shoes whose shoes does he choose?</p>
		<button class="btn btn-primary" slot="actions">Buy Now</button>
	</Card>

	<Carousel {images} />

	<Carousel>
		<img src="https://placeimg.com/192/192/people" alt="People" />
		<img src="https://placeimg.com/192/192/people" alt="People" />
		<img src="https://placeimg.com/192/192/people" alt="People" />
	</Carousel>

	<ChatBubble>It's over Anakin, I have the high ground.</ChatBubble>
	<ChatBubble end={true}>You underestimate my power!</ChatBubble>

	<Collapse color="secondary" focusColor="primary">
		<div slot="title">Focus me to see content</div>
		<p>tabindex="0" attribute is necessary to make the div focusable</p>
	</Collapse>

	<Countdown value={60} />

	<Kbd>A</Kbd>

	<Progress value="0" />
	<Progress value="10" />
	<Progress value="40" />
	<Progress value="70" />
	<Progress value="100" />

	<RadialProgress value="70" />

	<Stat>
		<div slot="title">Total Page Views</div>
		<div slot="value">89,400</div>
		<div slot="description">21% more than last month</div>
	</Stat>

	<Stats>
		<Stat>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-8 h-8 stroke-current"
				slot="image"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<div slot="title">Downloads</div>
			<div slot="value">31K</div>
			<div slot="description">Jan 1st - Feb 1st</div>
		</Stat>
		<Stat>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-8 h-8 stroke-current"
				slot="image"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
				/>
			</svg>
			<div slot="title">New Users</div>
			<div slot="value">4,200</div>
			<div slot="description">↗︎ 400 (22%)</div>
		</Stat>
		<Stat>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-8 h-8 stroke-current"
				slot="image"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
				/>
			</svg>
			<div slot="title">New Registers</div>
			<div slot="value">1,200</div>
			<div slot="description">↘︎ 90 (14%)</div>
		</Stat>
	</Stats>

	<Table>
		<thead slot="head">
			<th />
			<th>Name</th>
			<th>Job</th>
			<th>Favorite Color</th>
		</thead>

		<tr>
			<th>1</th>
			<td>Cy Ganderton</td>
			<td>Quality Control Specialist</td>
			<td>Blue</td>
		</tr>
		<tr>
			<th>2</th>
			<td>Hart Hagerty</td>
			<td>Desktop Support Technician</td>
			<td>Purple</td>
		</tr>
		<tr>
			<th>3</th>
			<td>Brice Swyre</td>
			<td>Tax Accountant</td>
			<td>Red</td>
		</tr>
	</Table>

	<Tooltip tip="hello">
		<Button>Hover me</Button>
	</Tooltip>
</div>
