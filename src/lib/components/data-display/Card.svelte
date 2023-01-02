<script lang="ts">
	import { Color } from '../../enums/color.enum';

	export let color: Color | string = '';
	export let bordered: boolean = false;
	export let background: boolean = false;
	export let compact: boolean = false;
	export let glass: boolean = false;
	export let side: boolean = false;
	export let responsive: boolean = false;
	export let center: boolean = false;
</script>

<div
	class="card w-96 bg-base-100 shadow-xl {$$props.class ? $$props.class : ''}"
	class:bg-primary={color == Color.Primary}
	class:text-primary-content={color == Color.Primary}
	class:bg-secondary={color == Color.Secondary}
	class:text-secondary-content={color == Color.Secondary}
	class:bg-accent={color == Color.Accent}
	class:text-accent-content={color == Color.Accent}
	class:bg-info={color == Color.Info}
	class:text-info-content={color == Color.Info}
	class:bg-success={color == Color.Success}
	class:text-success-content={color == Color.Success}
	class:bg-warning={color == Color.Warning}
	class:text-warning-content={color == Color.Warning}
	class:bg-error={color == Color.Error}
	class:text-error-content={color == Color.Error}
	class:card-compact={compact}
	class:card-bordered={bordered}
	class:image-full={background}
	class:card-side={side}
    class:lg:card-side={responsive}
	class:glass
>
	<figure>
		<slot name="image" />
	</figure>
	<div class="card-body" class:items-center={center} class:text-center={center}>
		<h2 class="card-title"><slot name="title" /></h2>
		<p><slot name="body" /></p>
		<div class="card-actions justify-end">
			<slot name="actions" />
		</div>
	</div>
	<slot name="bottomImage" />
</div>
