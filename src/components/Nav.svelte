<script lang="ts">
	export let segment: string;
	let menuActive: boolean = false;
	const toggleMenu = () => {
		menuActive = !menuActive;
	}
</script>

<style>

</style>

<!--Nav-->
<div class="bg-white shadow-md p-5 fixed top-0 left-0 w-full h-16">
    <nav class="flex-row md:flex md:justify-between">
        <div class="flex flex-row justify-between">
           <a href="#">Logo</a>

           <button on:click={() => toggleMenu()} id="hamburgerbtn" class="md:hidden" style="outline: none;">
            	<i class="material-icons text-2xl font-normal">menu</i>
           </button>
        </div>
       
        <ul class="{menuActive === true ? '' : 'hidden'} md:flex md:flex-row" id="mobileMenu">
            <li class="pr-5 "><a href="/" class="text-lg font-normal"> Home </a></li>
            <li class="pr-5 "><a href="" class="text-lg font-normal"> Services </a></li>
            <li class="pr-5 "><a href="" class="text-lg font-normal">Porfolio</a></li>
            <li class="pr-5 "><a href="" class="text-lg font-normal">About</a></li>
            <li class=""><a href="" class="text-lg font-normal">Contact</a></li>
        </ul>
    </nav>
</div>

