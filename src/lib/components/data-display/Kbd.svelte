<script lang="ts">
	import { Size } from '../../enums/size.enum';

	export let size: Size | string = Size.Md;
</script>

<kbd
	class="kbd {$$props.class ? $$props.class : ''}"
	class:kbd-xs={size == Size.Xs}
	class:kbd-sm={size == Size.Sm}
	class:kbd-md={size == Size.Md}
	class:kbd-lg={size == Size.Lg}
>
	<slot />
</kbd>
