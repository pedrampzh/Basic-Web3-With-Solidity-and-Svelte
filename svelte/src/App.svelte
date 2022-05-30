<script>
	import Hello from './Hello.svelte';

	async function connectWallet(){
		debugger;
		if(window.ethereum){
			window.web3 = new Web3(ethereum);
			await window.ethereum.enable();
			metamaskConnected = window.ethereum.isConnected();
		}
	} 
	async function onclickConnectionWallet(){
		promise = connectWallet();
	}
	$: promise = connectWallet();
	$: metamaskConnected = window.ethereum
	? window.ethereum.isConnected() 
	: false;
</script>

<main>
	{#if window.ethereum}
	<p>Browser Wallet alrwady connected to metamask :{metamaskConnected} </p>		
	{/if}
	{#if window.ethereum && !metamaskConnected }
	<button on:click={onclickConnectionWallet}> connect Wallet </button>	
	{:else}
	<Hello />
	{/if}
</main> 

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>