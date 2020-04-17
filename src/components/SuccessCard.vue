<template>
  <!-- Calculate the results button -->
  <div class="results container card" id="results">
    <div class="card-body">
      <h3 v-if="!called" id="results__text" class="card-title">Calculate your chance of failure</h3>
      <h4
        v-if="called"
        class="alert"
        v-bind:class="{'alert-danger': isBadResult(), 'alert-success': !isBadResult()}"
      >{{this.result}}% chance of project failure</h4>
      <button id="results__btn" class="btn btn-primary" @click="this.calculateResults">Calculate</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    calc: Function,
    result: Number,
    failureThreshold: Number
  },
  data() {
    return {
      called: false
    };
  },
  methods: {
    calculateResults() {
      // When user pushes the button
      // the calculator will run
      this.called = true;
      this.calc();
    },
    isBadResult() {
      // Used to show an alert if it is a poor result
      return this.result > this.failureThreshold;
    }
  }
};
</script>

<style scoped>
.results {
  margin-top: 1rem;
  text-align: center;
}
</style>