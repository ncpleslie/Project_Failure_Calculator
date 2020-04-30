<template>
  <div class="grouping container card" id="grouping_1">
    <table class="table card-body">
      <thead>
        <tr>
          <th class="grouping__term_table_th">
            <h3>{{ this.name }}</h3>
            <p>{{ this.description }}</p>
          </th>
          <th class="grouping__term_table_th">No Impact</th>
          <th class="grouping__term_table_th">Little Impact</th>
          <th class="grouping__term_table_th">Some Impact</th>
          <th class="grouping__term_table_th">Moderate Impact</th>
          <th class="grouping__term_table_th">Strong Impact</th>
        </tr>
      </thead>
      <tbody>
        <!-- List of options starts here -->
        <tr v-for="value in this.terms" :key="value.name">
          <td class="grouping__term_table_td">
            <p class="grouping__term_table_title card-title">{{ value.name }}</p>
            <p class="card-text">{{ value.description }}</p>
          </td>
          <td v-for="n in totalNumOfOptions" :key="n" class="grouping__term_table_td">
            <input
              type="radio"
              :value="n-1"
              class="grouping__term__input"
              :name="radioName(value.name)"
              @change="buttonActivated($event, value.weighting)"
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    terms: Array,
    name: String,
    activated: Function,
    addValuesToCalculatorState: Function
  },
  data() {
    return {
      totalNumOfOptions: 5
    };
  },
  methods: {
    radioName(input) {
      // Convert the term name into a HTML standard ID name
      // e.g "Foo Bar" becomes "foo_bar"
      return input.toLowerCase().replace(/ /g, "_");
    },
    buttonActivated(e, weighting) {
      // Make the success card/calculate results button
      // visible if the user has selected something
      this.activated();
      // Add input results into the state
      // If user reselects a different result,
      // it will overwrite the previous input
      this.addValuesToCalculatorState(
        e.target.name,
        parseInt(e.target.value, 10),
        weighting
      );
    }
  }
};
</script>

<style scoped>
.table td {
  vertical-align: middle;
}

.grouping {
  margin-top: 1rem;
}

.grouping__term_table_th {
  text-align: center;
}

.grouping__term_table_td {
  text-align: center;
  width: 100%;
}

.grouping__term_table_title {
  font-weight: bold;
  margin-bottom: 0;
}

@media only screen and (max-width: 48rem) {
  .grouping__term_table_th {
    font-size: 0.75rem;
  }

  .grouping__term_table_th {
    width: 1rem;
    padding: 0;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: bold;
  }
}
</style>
