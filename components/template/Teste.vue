<!-- <template>
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
        <h3 class="enunciado" v-if="questions[currentQuestionIndex]">
          {{ questions[currentQuestionIndex].titulo_pergunta }}
          {{ questions[currentQuestionIndex].id }}
          
        </h3>
      </div>

      <div class="Questions">
        <CardQuestion
          :dataQ="questions[currentQuestionIndex]"
      
        />
      </div>
      <div v-show="!quizCompleted" class="containerButton">
        <div class="cardIndexQuestion">
          Questão {{ currentQuestionIndex + 1 }} de {{ questions.length }}
        </div>
    
        <ButtonTest @click.native="nextQuestion" title="Próxima Pergunta" />

        
      </div>
      {{ currentQuestionIndex + 1 }}
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
          id: 93,
          id_avaliacao: 24,
          titulo_pergunta: "Para que serve os critérios de inspeção?",
          questao_a: "Custear o produto",
          questao_b: "Análise de causa do problema",
          questao_c: "Definir parâmetros visuais e dimensionais dos produtos",
          questao_d: "Para características críticas",
        },
        {
          id: 82,
          id_avaliacao: 24,
          titulo_pergunta: "Onde estão os critérios de inspeção?",
          questao_a: "Desenho do produto",
          questao_b: " Acordo de fornecimento",
          questao_c: "Acordo de qualidade",
          questao_d: "Requisitos específicos",
        },
        {
          id: 81,
          id_avaliacao: 24,
          titulo_pergunta: "Quem define os critérios de inspeção?",
          questao_a: "Vendedores",
          questao_b: " Fornecedores",
          questao_c: "Clientes",
          questao_d: "Gestores",
        },
      ],
      currentQuestionIndex: 0,
      quizCompleted: false,
      listQuizz: {},

    };
  },

  methods: {
    nextQuestion() {
      if (this.$state.idQuestion.questionsAnswered.length > 0) {
            this.currentQuestionIndex++;
            this.$refs.timer.startTimer();
      }
      if (this.currentQuestionIndex <= this.selectedOption) {
        alert("ok");
      } else if (this.currentQuestionIndex === this.questions.length) {
        this.quizCompleted = true;
      }
    },

    timesOver() {
      if (this.response == null) {
        this.currentQuestionIndex++;
        this.$refs.timer.startTimer();
      }
      if (this.response) {
        // this.checkAnswer();
        this.currentQuestionIndex++;
        this.$refs.timer.startTimer();
      }
      if (
        this.response == null &&
        this.currentQuestionIndex === this.questions.length
      ) {
        this.quizCompleted = true;
      }
    },

    async sendResponese() {
      await http.SendQuestion(id, data)
        .then((res) => {
          console.log("Resposta do backend:", res.data);
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
  .Questions {
    width: 80%;
  }
  
  .imgWinner {
    height: 16rem;
    margin: auto;
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
</style> -->