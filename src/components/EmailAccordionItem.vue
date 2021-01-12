<template>
  <b-card no-body class="mb-0">
    
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle="`email-accordion-${this.email}`" variant="info">
        <div class="flex flex-row align-items-baseline">
          <div class="pr-2 align-self-center">
            <p class="mb-0">{{ websiteFirstLetter }}</p>
          </div>
          <div class="text-left">
            <p class="text-lg text-opacity-75 mb-0">{{ name }}</p>
            <p class="text-xs text-opacity-50 mb-0">{{ website }}</p>
          </div>
          <b-badge class="ml-auto" variant="primary" pill>{{numOfBreaches}}</b-badge>
        </div>
      </b-button>
    </b-card-header>

    <b-collapse
      :id="`email-accordion-${this.email}`"
      accordion="email-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <div class="accordion" role="tablist">
  <breach-accordion-item v-for="breach in this.breaches"
  :key="`${breach.name}-${breach.breach_date}`"
  :breachObj=breach />
</div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
import BreachAccordionItem from "@/components/BreachAccordionItem.vue"
export default {
  name: "EmailAccordionItem",
  components: {BreachAccordionItem},
  props: {
    emailObject: Object,
  },
  mounted() {},
  methods: {
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  computed: {
    email: function () {
      return this.emailObject.email;
    },
    breaches: function() {
      return this.emailObject.breaches;
    },
    name: function () {
      return this.capitalizeFirstLetter(this.email.split("@")[0]);
    },
    website: function () {
      return this.capitalizeFirstLetter(this.email.split("@")[1].split(".")[0]);
    },
    websiteFirstLetter: function () {
      return this.capitalizeFirstLetter(
        this.email.split("@")[1].split(".")[0].charAt(0)
      )
    },
    numOfBreaches: function() {
      return this.emailObject.breaches.length
    }
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
