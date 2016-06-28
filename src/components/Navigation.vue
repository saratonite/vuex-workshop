<template>
<nav>
	<ul class="nav">
		<li><a v-link="{path:'/'}">Home</a></li>
		<li><a v-link="{path:'/contact'}">Contact</a></li>

	</ul>
</nav>
</template>

<style>
	nav{

		background: rgba(210, 23, 23, 0.79);

	}
	.nav{
		display: inline-block;
	}
	.nav li{
		display: inline-block;
		padding: 10px;	
	}
	.nav li a{
		text-decoration: none;
		color: #fff;
		display: inline-block;
	}


	@media screen and (max-width: 400px) {
		.nav li{
			display: block;
			padding: 10px;	
		}
	}
</style>

<script>
export default	{

}
</script>
