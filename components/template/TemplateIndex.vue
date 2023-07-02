<template>
    <div class="container">
      <div class="card">
        <h2 class="title">Você está iniciando seu teste de <br/>
          5`s Aplicado	
        </h2>
        <div class="orietacoes">
        <h5>Orientações</h5>
          <li>Você terá 5 minutos pra cada pergunta</li>
          <li>Selecione apenas uma resposta a cada pergunta</li>
          <li>Ao final da sua prova click no botão salvar Avalição</li>
          <nuxt-link to="/avaliacao" class="button">Iniciar</nuxt-link> 
        </div>
        <img src="../../assets//public/animate.svg" alt="" srcset="" class="animateTeste">
    
      </div>
    
    </div>
    </template>
    
    <script>

    export default {
    
      name: 'NuxtTutorial'
    }
    </script>
    <style lang="scss" scoped>
      .container {
        background: #2FC987;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    
        .card{
          background: white;
          width: 60%;
          height: 30rem;
          border-radius: 1em;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          justify-items: center;
          box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
          .title{
            grid-area: 1 / 1 / 2 / 3; 
            text-align: center;
            padding: 2.5rem;
          }
          .orietacoes{
            padding-left: 3rem;
            grid-area: 2/1/3/2;
            display: grid;
            align-items: center;
            li{
              list-style: none;
              text-decoration: center;
            }
          }
        
          .animateTeste{
            height: 15rem;
            grid-area: 2 / 2 / 3 / 3; 
          }
          .button{
            width: 8rem;
            height: 2.2rem;
            border-radius: 0.2rem;
            background: #095169;
            color: white;
            font-weight: 500;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    </style>