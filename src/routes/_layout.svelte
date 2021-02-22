<script lang="ts">
	import Nav from '@components/Nav.svelte';

	export let segment: string;
</script>


<Nav {segment}/>

<main class="mt-16">
	<!-- <i class="material-icons text-3xl bg-purple">settings_accessibility</i> -->
	<slot></slot>
</main>