<template>
    <button class="button">
        {{ title }}
    </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        title:String,
    },
    data() {
    return {
    
    }}
    
})
</script>
<style lang="scss" scoped>
    .button {
        min-width: 8rem;
        max-width: 10rem;
        height: 2.2rem;
        padding: .2rem;
        border-radius: 0.2rem;
        border: solid 1px #37c237;
        color: #37c237;
        font-weight: bold;
        background-color: #ffffff;
        &:hover {
            background:  #37c237;
            color: #ffffff;
        }
        
    }
</style>