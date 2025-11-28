<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import BottomBar from '$lib/components/BottomBar.svelte';

	const { children } = $props();
</script>

<!-- ... rest sama -->

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<BottomBar />
{@render children?.()}

