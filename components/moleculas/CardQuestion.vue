<template>
  <div class="cardQuestion">
    <h4 class="enunciado">
    {{ question }}
    </h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        question:String,
    },
    data() {
    return {
      
    }}
    
})
</script>

<style lang="scss" scoped>
    .cardQuestion {
    width: 100%;
    height: 6rem;
    background: #e7eeeb;
    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

        .enunciado{
            text-align: center;
            text-justify: center;
        }
    }
</style>