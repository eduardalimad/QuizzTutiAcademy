<template>
  <div class="container">
    <header class="containerHeader">
      <Time
        ref="timer"
        @timer-end="timesOver"
        :quizzComplete="quizCompleted"
        v-show="!quizCompleted"
      />
    </header>

    <main v-if="!quizCompleted" class="containerMain">
      <h3 class="cardQuestion" v-if="listQuizz[currentQuestionIndex]">
        {{ listQuizz[currentQuestionIndex].titulo_pergunta }}
      </h3>

      <div class="cardAlternatives">
        <CardQuestion
          ref="controlNextQuestion"
          :dataQ="listQuizz[currentQuestionIndex]"
          @respostaEnviada="nextQuestion"
          @watchValue="validarEmit"
        />
      </div>
      <div v-show="!quizCompleted" class="containerButtons">
        <section class="indexQuestion">
          Questão {{ currentQuestionIndex + 1 }} de {{ listQuizz.length }}
        </section>
      </div>
    </main>

    <main v-else class="containerResult">
      <ResultQuizz scoreFinal="score" :percentual="taxaDeAprovacao" />
    </main>
  </div>
</template>
<script >
import http from "../../service/test/index";

export default {
  name: "NuxtTutorial",

  data() {
    return {
      currentQuestionIndex: 0,
      quizCompleted: false,
      listQuizz: {},
      score: Boolean,
      taxaDeAprovacao: Number,
      respostaSelecionada: "",
      
    };
  },

  mounted() {
    http.ListQuestions().then((response) => {
      // preciso do param id_aluno que deve vir do tutiAcademy
      this.listQuizz = response.data.alternatives;
      const newAsk = {
        id_course: response.data.id_course,
        id_module: response.data.id_module,
        id_aluno: 1805,
      };

      this.$store.commit("saveQuestion", newAsk);
    });
  },
  methods: {
    validarEmit(payload) {
      this.respostaSelecionada = payload.newValue;
    },
    async nextQuestion() {
      if (this.respostaSelecionada != "") {
        this.currentQuestionIndex++;
        this.$refs.timer.startTimer();
      }
      if (this.currentQuestionIndex <= this.listQuizz.length - 1) {
        this.$refs.timer.startTimer();
        
      } else if (this.currentQuestionIndex === this.listQuizz.length) {
        console.log("ok");
        // await this.sendResponese();
        this.quizCompleted = true;
      }
    },

    timesOver() {
      if (this.resposta == null) {
        this.$refs.controlNextQuestion.adicionarQuestionAnswered();
        this.$refs.timer.startTimer();
      }
      if (this.currentQuestionIndex <= this.listQuizz.length - 1) {
        this.selectedOption = null;
        this.$refs.timer.startTimer();
      }
    },

    async sendResponese() {
      await http
        .SendQuestion(this.$store.state.idQuestion)
        .then((res) => {
          // console.log("Resposta do backend:", res.data.percentual);
          this.score = res.data.is_aproved;
          this.taxaDeAprovacao = res.data.percentual;
        })
        .catch((error) => {
          console.error("Erro ao enviar a solicitação:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template: 1fr / repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 2em;
  align-items: center;
  header {
    grid-column: 11 / span 2;
  }

  .containerMain {
    display: grid;
    gap: 2rem;
    place-items: center;
    border-radius: 0.2rem;
    background-color: rgb(253, 253, 253);
    grid-column: 4 / span 6;
    min-height: 32em;
    align-content: center;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
  }
  .containerResult {
    @extend .containerMain;
  }

  .containerButtons {
    display: flex;
    justify-content: space-between;
    border-top: solid 1px #0000;
    background-color: transparent;
  }
  .indexQuestion {
    width: 8rem;
    border-bottom: solid 1px #37c237;
  }
  .cardQuestion {
    width: 80%;
    height: 4rem;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: transparent;
    text-align: center;
    text-justify: center;
  }
  .cardAlternatives {
    width: 80%;
    background-color: transparent;
  }
}

@media screen and (max-width: 600px) {
  .container {
    grid-column-gap: 0 !important;
  }
  .containerMain,
  .containerResult {
    grid-column: 2 / span 10 !important;
    min-height: 32em !important;
    gap: 1rem !important;
  }
}
</style>