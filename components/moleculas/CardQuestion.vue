<template>
  <div class="containerCardQuestion" v-if="dataQ">
    <label class="cardAwser">
      <input
        type="radio"
        v-model="selectedOption"
        value="questao_a"
        :id="dataQ.questao_a"
      />
      {{ dataQ.questao_a }}
    </label>

    <label class="cardAwser">
      <input
        type="radio"
        v-model="selectedOption"
        value="questao_b"
        :id="dataQ.questao_b"
      />
      {{ dataQ.questao_b }}
    </label>

    <label class="cardAwser">
      <input
        type="radio"
        v-model="selectedOption"
        value="questao_c"
        :id="dataQ.questao_c"
      />
      {{ dataQ.questao_c }}
    </label>

    <label class="cardAwser">
      <input
        type="radio"
        v-model="selectedOption"
        value="questao_d"
        :id="dataQ.questao_d"
      />
      {{ dataQ.questao_d }}
    </label>

    <ButtonTest title="Próxima Pergunta" @click.native="adicionarQuestionAnswered()" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
export default Vue.extend({
  props: {
    dataQ: Object,
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  watch: {
    selectedOption(newValue) {
      this.$emit("watchValue", { newValue });
    },
  },

  methods: {
    ...mapMutations(["adicionarQuestionAnswered"]),
    adicionarQuestionAnswered() {
      const question = {
        id: this.dataQ.id,
        id_avaliacao: this.dataQ.id_avaliacao,
        resposta: this.selectedOption,
      };
      this.$store.commit("adicionarQuestionAnswered", question);
      this.$emit("respostaEnviada");
      this.clear();
    },
    clear() {
      this.selectedOption = null;
    },
  },
});
</script>

<style lang="scss" scoped>
.containerCardQuestion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
.cardAwser {
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  /* background: rgba(204, 204, 204, 0.4392156863); */
  border-radius: 5px;
  padding: 0.8rem;
  gap: 1rem;
  border: solid 1px #37c237;
  box-shadow: 2px 2px 2px 1px rgba(117, 116, 116, 0.2);

  &:hover {
    background: rgba(214, 207, 207, 0.439);
    border: none;
    cursor: pointer;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
  }
}
</style>