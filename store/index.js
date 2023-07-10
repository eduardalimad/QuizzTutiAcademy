export const state = () => ({
    idQuestion: {
      id_course: 0,
      id_module: 0,
      id_aluno: 0,
      questionsAnswered: [],
    },
  });
  
  export const mutations = {
    saveQuestion(state, data) {
      state.idQuestion = data;
      console.log(state.idQuestion);
    },
    adicionarQuestionAnswered(state, question) {
      state.idQuestion.questionsAnswered = state.idQuestion.questionsAnswered || []; // Verifique se já está inicializado como array
      state.idQuestion.questionsAnswered.push(question);

      
    },

  };

  
  