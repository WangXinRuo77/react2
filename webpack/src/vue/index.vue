<template>
    <div>
        <p>{{ message }}</p>
        <input type="text" v-model="message"/>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                message:"hello webpack vue"
            }
        }
    }
</script>
<style>
    input
    {
        border:1px solid #ddd;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        padding:5px;
    }
</style>