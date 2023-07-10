<template>
  <div class="container">
    <div class="card">
      <h2 class="text">
        Avaliação <br />
        5`s Aplicado
      </h2>
      <div class="orietacoes">
        <span class="textRegras">Regras</span>
        <li>1. Cada questão dura <span>5 Minutos</span></li>
        <li>2. Ao selecionar uma questão, não poderá ser revertido.</li>
        <nuxt-link  to="/avaliacao">
        <button class="button">
          Iniciar
        </button>
          </nuxt-link
        >
      </div>
      <img
        src="../../assets//public/animate.svg"
        alt=""
        srcset=""
        class="animateTeste"
      />
    </div>
s
  </div>
</template>
    
<script>
import Cookies from "js-cookie"
export default {
  name: "NuxtTutorial",
  data(){
    return{
      id_course: Number,
      id_modulo: Number,
    }
  },
  mounted(){
    if (this.$route.query){
      const token = this.$route.query
      Cookies.set('token', token.token)
        this.id_course = this.$route.query.id_course
        this.id_modulo = this.$route.query.id_modulo
        console.log(token);

        const newAsk = {
        id_course: this.$route.query.id_course,
        id_module: this.$route.query.id_modulo,
      };
      this.$store.commit("saveQuestion", newAsk);
    }
    else{
      alert('error')
    }
  },
  // created() {
  //   http.ListQuestions(this.id_course,  this.id_modulo).then((response) => {
  //     this.listQuizz = response.data.alternatives;
  //     const newAsk = {
  //       id_course: this.id_course,
  //       id_module: this.id_modulo,
  //     };

  //     this.$store.commit("saveQuestion", newAsk);
  //   });
  // },
  
};

  
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    background: white;
    width: 60%;
    height: 30rem;
    border-radius: 0.313rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .text {
      grid-area: 1 / 1 / 2 / 3;
      text-align: center;
      padding: 1rem;
      font-weight: 600;
    }
    .textRegras {
      font-size: 20px;
      font-weight: 600;
    }
    .orietacoes {
      padding-left: 3rem;
      grid-area: 2/1/3/2;
      display: grid;
      align-items: center;
      gap: 0.5rem;
      li {
        list-style: none;
        text-decoration: center;
        font-size: 17px;
        span {
          color: #44d163;
          font-weight: 600;
        }
      }
    }

    .animateTeste {
      height: 15rem;
      grid-area: 2 / 2 / 3 / 3;
    }
    .button {
      width: 12rem;
      height: 2.2rem;
      border-radius: 0.2rem;
      background: #095169;
      color: white;
      font-weight: 500;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
    }
  }
}
@media screen and (max-width: 768px) {
  .card {
    grid-template-columns: repeat(1, 1fr) !important;
    width: 80% !important;
  }
  .orietacoes,
  .title {
    padding: 2rem !important;
  }
  .animateTeste {
    display: none !important;
  }
}
</style>