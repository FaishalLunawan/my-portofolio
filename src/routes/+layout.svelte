<script lang="ts">
	import '../app.css';
	// import favicon from '$lib/assets/favicon.ico';
	import BottomBar from '$lib/components/BottomBar.svelte';

	const { children } = $props();
</script>

<!-- ... rest sama -->

<svelte:head>
	<link rel="icon" />
</svelte:head>

{@render children?.()}

