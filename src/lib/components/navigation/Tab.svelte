<script lang="ts">
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let href: string;
	export let bordered: boolean = false;
	export let lifted: boolean = false;
	export let size: Size | SizeStrings = Size.Md;
	export let active: boolean = false;
</script>

<a
	{href}
	class="tab {$$props.class ? $$props.class : ''}"
	class:tab-xs={size == Size.Xs}
	class:tab-sm={size == Size.Sm}
	class:tab-md={size == Size.Md}
	class:tab-lg={size == Size.Lg}
	class:tab-active={active}
	class:tab-bordered={bordered}
	class:tab-lifted={lifted}
>
	<slot />
</a>
