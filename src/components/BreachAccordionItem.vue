<template>
  <b-card no-body class="mb-0 bg-white-500 opac shadow-lg">
    <b-card-header header-tag="header" class="p-1 flex" role="tab">
      <b-img :src="breach.logo_path" class="w-1/6 pr-2 object-contain" />
      <b-button
        block
        class="text-left border-transparent bg-transparent"
        v-b-toggle="`breach-accordion-${this.id}`"
        variant="danger"
      >
        <div class="flex flex-col text-sm">
          <p class="font-bold">
            {{ breach.title }}
          </p>
          <p class="pt-1 pb-1 text-sm text-opacity-25 font-thin">
            {{ this.dayMonthYear }}
          </p>
          <p class="pb-1 text-sm text-opacity-25 font-thin">
            <strong>Compromised data:</strong> {{ this.compromisedData }}
          </p>
        </div>
      </b-button>
    </b-card-header>

    <b-collapse
      :id="`breach-accordion-${this.id}`"
      accordion="breach-accordion"
      role="tabpanel"
    >
      <b-card-body v-html="breach.description" class="text-white-500">
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: "BreachAccordionItem",
  props: {
    breachObj: Object
  },
  mounted() {},
  methods: {},
  computed: {
    breach: function() {
      return window.store.getters.getBreachByProps(
        "name",
        this.breachObj.name,
        "breach_date",
        this.breachObj.breach_date
      );
    },
    breachDate: function() {
      return this.breach.breach_date;
    },
    name: function() {
      return this.breach.name;
    },
    dayMonthYear: function() {
      var month = this.breachDate.getUTCMonth() + 1; //months from 1-12
      var day = this.breachDate.getUTCDate();
      var year = this.breachDate.getUTCFullYear();
      return `${day}/${month}/${year}`;
    },
    id: function() {
      return `${this.name}-${this.dayMonthYear}`;
    },
    compromisedData: function() {
      return this.breach.data_classes.join(", ");
    }
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
  margin-bottom: 0;
}
.opac {
  background-color: rgba(255, 255, 255, 0);
}
.card-header {
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0);
}
.card-body >>> a {
  color: #fff !important;
  font-weight: 700 !important;
}
</style>
