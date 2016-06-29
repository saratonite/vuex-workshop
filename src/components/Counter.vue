<template>
	<div class="counter">
		<h4><span class="title">Likes</span><button @click="plus()">+</button> <span class="digit">{{count}} </span> <button @click="minus()">-</button> </h4>
	</div>
</template>
<script>
	export default {
		vuex:{
			getters:{
				count:function(state){
					return state.count;
				}
			},
			actions:{
				
			}
		},
		methods:{
			plus:function(){
				this.$store.dispatch('COUNTER_INCREMENT');
			},
			minus:function(){
				this.$store.dispatch('COUNTER_DECREMENT');
			}
		}
	}
</script>
<style>
	button{
		border:none;
		padding: 5px;
		width:40px;
		border-radius: 3px;
	}
	.counter{
		box-sizing: border-box;
		border:1px solid #f56;
		display: inline-block;
		padding:5px 5px;
		border-radius: 3px;
	}
	.title{
		padding:1px 5px;
		width:100px;
	}
	.digit{
		width: 4rem;
		display: inline-block;
		text-align: center;
	}
</style>