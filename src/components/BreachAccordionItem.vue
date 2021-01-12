<template>
  <b-card no-body class="mb-0">
    
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle="`breach-accordion-${this.id}`">
        {{breach.title}}
      </b-button>
    </b-card-header>

    <b-collapse
      :id="`breach-accordion-${this.id}`"
      accordion="breach-accordion"
      role="tabpanel"
    >
      <b-card-body v-html="breach.description" class="text-gray-500">
        
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: "BreachAccordionItem",
  props: {
    breachObj: Object,
  },
  mounted() {},
  methods: {},
  computed: {
    breach: function() {
      return window.store.getters.getBreachByProps("name", this.breachObj.name, "breach_date", this.breachObj.breach_date)
    },
    breachDate: function() {
      return this.breach.breach_date
    },
    name: function() {
      return this.breach.name
    },
    id: function() {
      var month = this.breachDate.getUTCMonth() + 1; //months from 1-12
      var day = this.breachDate.getUTCDate();
      var year = this.breachDate.getUTCFullYear();
      return `${this.name}-${day}-${month}-${year}`

    }
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
