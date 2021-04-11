<script>
	import {onMount} from 'svelte';
	import {currentComponent} from '../router.js';

	import Menu from './Menu.svelte';

	let showSpinner = true;

	onMount(async () => {
		console.log('mounted!');
		setTimeout(() => {
			showSpinner = false;
		}, 1000);
	});
</script>

{#if showSpinner || $currentComponent === null}
	<div class="spinner-wrap">
		<div class="spinner-border text-primary" style="width: 5rem; height: 5rem;" role="status"></div>
	</div>
{:else}
	<Menu/>
	<div style="padding-top: 4rem;">
		<svelte:component this={$currentComponent}/>
	</div>
{/if}

<style>
	.spinner-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		flex-direction: column;
	}

	.spinner-wrap .spinner-border {
		margin-bottom: 2rem;
	}
</style>