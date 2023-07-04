<template>
  <div class="container">
    <header class="div1">
      <Time
        ref="timer"
        @timer-end="timesOver"
        :quizzComplete="quizCompleted"
        v-show="!quizCompleted"
      />
    </header>
    <main v-if="!quizCompleted" class="containerMain">
      <div class="cardQuestion">
        <h3 class="enunciado">
          {{ questions[currentQuestionIndex].question }}
        </h3>
      </div>

      <div class="containerCardQuestion">
        <label
          class="cardAwser"
          v-for="(option, index) in questions[currentQuestionIndex].options"
          :key="index"
        >
          <input type="radio" v-model="selectedOption" :value="index" />
          {{ option }}
        </label>
      </div>
      <div v-show="!quizCompleted" class="containerButton">
        <div class="cardIndexQuestion">
          Questão {{ currentQuestionIndex + 1 }} de {{ questions.length }}
        </div>
        <ButtonTest @click.native="nextQuestion" title="Próxima Pergunta" />
      </div>
    </main>

    <main v-else class="containerResult">
      <ResultQuizz :scoreFinal="score" />
    </main>
  </div>
</template>
<script>
export default {
  name: "NuxtTutorial",

  data() {
    return {
      questions: [
        {
          question: "Qual é a capital da França?",
          options: ["Londres", "Paris", "Madri", "Roma"],
          answer: 1,
        },
        {
          question: "Quem pintou a Mona Lisa?",
          options: [
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Vincent van Gogh",
            "Michelangelo",
          ],
          answer: 1,
        },
        {
          question: "1. Assinale a sintaxe errada de uso da fórmula soma",
          options: [
            "=SOMA(A2:E2)",
            "=SOMA(A2:C2)+SOMA(D2:E2)",
            "=SOMA(A2,B2,C2,D2,E2)",
            "=SOMA(A5;E5)",
          ],
          answer: 0,
        },
      ],
      currentQuestionIndex: 0,
      selectedOption: null,
      quizCompleted: false,
      score: 0,
    };
  },

  methods: {
    nextQuestion() {
      if (this.selectedOption !== null) {
        this.checkAnswer();
        this.currentQuestionIndex++;
      }

      if (this.currentQuestionIndex <= this.questions.length - 1) {
        this.selectedOption = null;
        this.$refs.timer.startTimer();
      } else if (this.currentQuestionIndex === this.questions.length) {
        this.quizCompleted = true;
      }
    },
    checkAnswer() {
      const currentQuestion = this.questions[this.currentQuestionIndex];

      if (this.selectedOption === currentQuestion.answer) {
        this.score++;
      }
    },

    timesOver() {
      if (this.selectedOption == null) {
        this.currentQuestionIndex++;
        this.$refs.timer.startTimer();
      }
      if (this.selectedOption) {
        this.checkAnswer();
        this.currentQuestionIndex++;
        this.$refs.timer.startTimer();
      }
      if (
        this.selectedOption == null &&
        this.currentQuestionIndex === this.questions.length
      ) {
        this.quizCompleted = true;
      }
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
    min-height: 30em;
    align-content: center;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
  }
  .containerResult {
    @extend .containerMain;
  }

  .containerButton {
    width: 80%;
    display: flex;
    justify-content: space-between;
    border-top: solid 1px #0000;
  }
  .cardIndexQuestion {
    width: 8rem;
    background-color: #fff;
    /* border-radius: 7px; */
    display: flex;
    justify-content: flex-start;
    border-bottom: solid 1px #37c237;
    align-items: center;
  }
  .cardQuestion {
    width: 80%;
    height: 4rem;
    display: flex;
    justify-content: start;
    align-items: center;
    .enunciado {
      text-align: center;
      text-justify: center;
    }
  }
  .containerCardQuestion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
  }
  .cardAwser {
    width: 100%;
    min-height: 58px;
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
  .imgWinner {
    height: 16rem;
    margin: auto;
  }
}

@media screen and (max-width: 600px) {
  .container{
   grid-column-gap: 0 !important;
  }
  .containerMain, 
  .containerResult{
    grid-column: 2/span 10!important;
    min-height: 32em !important;
    gap: 1rem !important;
  }
  
}
</style>