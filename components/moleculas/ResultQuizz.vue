<template>
  <div class="container">
    <h2>Quiz Concluído!</h2>
    <div v-if="score > 1"></div>
    <img
      v-if="score > 1"
      src="../../assets/public/winners-animate.svg"
      alt=""
      srcset=""
      class="imgWinner"
    />

    <img
      v-else
      src="../../assets/public/animate.svg"
      alt=""
      srcset=""
      class="imgWinner"
    />
    <h2>
      Parabens Fulano <br />
      Sua Pontuação é {{ scoreFinal }} 
    </h2>

    <nuxt-link to="/">Refazer</nuxt-link>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            scoreFinal:Number
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  display: grid;
  

  .imgWinner {
    height: 16rem;
    margin: auto;
  }
}
</style>