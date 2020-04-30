<template>
  <div id="app" class="container">
    <Jumbotron />
    <GroupingCard
      v-for="(value, name) in this.groupingData"
      :key="name"
      :description="value['description']"
      :terms="value['terms']"
      :name="name"
      :activated="makeSuccessCardVisible"
      :addValuesToCalculatorState="addValuesToCalculatorState"
    />
    <SuccessCard
      v-if="this.successCardVisible"
      :calc="calculateResults"
      :result="results"
      :failureThreshold="failureThreshold"
    />
    <Footer />
  </div>
</template>

<script>
import Jumbotron from "./components/Jumbotron";
import GroupingCard from "./components/GroupingCard";
import SuccessCard from "./components/SuccessCard";
import Footer from "./components/Footer";
import listOfQuestions from "../public/data.json";

export default {
  name: "App",
  components: {
    Jumbotron,
    GroupingCard,
    SuccessCard,
    Footer
  },
  data() {
    return {
      groupingData: listOfQuestions,
      successCardVisible: false,
      results: 0,
      failureThreshold: 50,
      calculatorState: {}
    };
  },
  methods: {
    makeSuccessCardVisible() {
      // If user has not put anything in, then don't show the calculate button
      this.successCardVisible = true;
    },
    addValuesToCalculatorState(name, value, weighting) {
      // Values are returned from "GroupingCard.vue"
      // Each time a user checks a radio box
      // the values are passed to this object
      this.calculatorState[name] = { value: value, weighting: weighting };
    },
    calculateResults() {
      // When user pushed "calculate" button
      // in "SuccessCard.vue"
      let results = 0;
      let count = 0;
      for (let aGroup in this.calculatorState) {
        count++;
        results +=
          this.calculatorState[aGroup].value *
          this.calculatorState[aGroup].weighting;
      }
      this.results = ((results / count) * 100) / 4;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
