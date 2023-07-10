<template>
  <div class="containerTime">
    <h2 style="color:#ffff">{{ formatTime }}</h2>
    <Loader/>

  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 300,
      intervalId: null,
  
    };
  },
  props: {
    quizzComplete: Boolean,
  },

  async fetch() {
    this.startTimer();
  },

  mounted() {
    this.intervalId = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      }
      else if (this.quizzComplete === true) {
        clearInterval(this.intervalId);
      }
     else {
        this.$emit("timer-end");
        alert("Tempo esgotado");
        console.log(this.quizzComplete);
      }
    }, 1000);
  
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startTimer() {
      this.time = 300;
    },
  },

  computed: {
    formatTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.containerTime{
  display: flex;
}
</style>
