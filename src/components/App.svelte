<script>
	import {onMount} from 'svelte';

	let showGreen = false;

	setTimeout(() => {
		showGreen = true;
	}, 1000);

	onMount(() => {
		console.log('mounted!');
	});

</script>

{#if showGreen}
	<div class="green"></div>
{:else}
	<div class="red"></div>
{/if}


<style>
	.red {
		background-color: tomato;
		width: 10rem;
		height: 10rem;
	}

	.green {
		background-color: limegreen;
		width: 10rem;
		height: 10rem;
	}
</style>