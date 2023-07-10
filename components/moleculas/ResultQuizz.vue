<template>
  <div class="containerResultado">
    <div class="containerAprovado" v-if="scoreFinal === true">
      <h2 class="menssageResult">
        Parabéns Fulano <br />
        <!-- Seu desempenho foi de {{ percentual }} % -->
      </h2>
      <img
        src="../../assets/public/winners-animate.svg"
        alt=""
        class="imgWinner"
      />
    </div>

    <div class="containerReprovado" v-else>
      <h2 class="menssageResult">
        Infelizmente não foi dessa vez <br />
        <!-- Seu desempenho foi de {{ percentual }} % -->
      </h2>
      <img
        src="../../assets/public/animate.svg"
        alt=""
        class="imgWinner"
      />
    </div>

    <ButtonTest title="Voltar" />
  </div>
</template>

<script>
export default {
  props: {
    scoreFinal: Number,
    percentual: Number,
  }
}
</script>

<style scoped lang="scss">
.containerResultado {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;

  .containerReprovado,
  .containerAprovado {
    display: grid;
    place-items: center;
    height: 50%;

    .menssageResult {
      display: flex;
      justify-content: center;
      text-align: center;
      padding-bottom: 2rem;
    }
  }

  .imgWinner {
    height: 16rem;
    margin: auto;
  }
}
</style>
