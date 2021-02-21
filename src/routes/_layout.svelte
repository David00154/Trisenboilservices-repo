<script lang="ts">
	import Nav from '@components/Nav.svelte';

	export let segment: string;
</script>


<Nav {segment}/>

<main>
	<i class="material-icons text-3xl bg-purple">settings_accessibility</i>
	<slot></slot>
</main>