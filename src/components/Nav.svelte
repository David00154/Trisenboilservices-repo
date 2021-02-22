<script lang="ts">
	export let segment: string;

	console.log(segment)

	let menuActive: boolean = false;

	const toggleMenu = () => {
		menuActive = !menuActive;
	}
</script>

<style>

</style>

<!--Nav-->
<div class="bg-white shadow p-5 fixed top-0 left-0 w-full">
    <nav class="flex-row md:flex md:justify-between h-auto">
        <div class="flex flex-row justify-between {menuActive === true ? 'border-b md:border-none md:mb-0 mb-3' : ''}">
           <a href=".">Logo</a>

           <button on:click={() => toggleMenu()} class="md:hidden" style="outline: none;">
            	<i class="material-icons text-2xl font-normal">menu</i>
           </button>
        </div>
       
        <ul class="{menuActive === true ? '' : 'hidden'} md:flex md:flex-row w-full md:w-auto">
            <li class="mr-7 my-3 md:my-0 md:inline-flex flex md:w-auto {segment === undefined ? 'border-b-4 rounded border-black' : 'border-b-0'}">
				<a href="." class="text-lg font-normal"> Home </a>
			</li>
            <li class="mr-7 my-3 md:my-0">
				<a href="" class="text-lg font-normal"> Services </a>
			</li>
            <li class="mr-7 my-3 md:my-0 "><a href="" class="text-lg font-normal">
				Porfolio</a>
			</li>
            <li class="mr-7 my-3 md:my-0 md:inline-flex flex md:w-auto {segment === 'about' ? 'border-b-4 rounded border-black' : 'border-b-0'}">
				<a href="/about" class="text-lg font-normal">About</a>
			</li>
            <li class="">
				<a href="" class="text-lg font-normal">Contact</a>
			</li>
        </ul>
    </nav>
</div>

