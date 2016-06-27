<template>
	<h4> <button @click="plus()">+</button> {{count}} <button @click="minus()">-</button> </h4>
</template>
<script>
	export default {
		data:function(){
	
		},
		vuex:{
			getters:{
				count:function(state){
					return state.count;
				}
			}
		},
		methods:{
			plus:function(){
				this.count++;
			},
			minus:function(){
				this.count--;
			}
		}
	}
</script>
<style>
	button{
		border:none;
		padding: 5px;
		width:40px;
	}
</style>