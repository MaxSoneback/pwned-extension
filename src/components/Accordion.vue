<template>
 <vsa-list v-if="typeof this.emailObjects !== 'undefined'">
  <accordion-item v-for="emailObject in this.emailObjects"
  :key=emailObject.email
  :emailObject=emailObject />
</vsa-list>
</template>

<script>
import AccordionItem from './AccordionItem.vue';
import getters from "@/store/getters.js"
export default {
  components: { AccordionItem },
  name: "Accordion",
  computed: {
    emailObjects: function() {
      return window.store.getters.emailObjects
    }
  },
  watch: {
    emailObjects(newEmail, oldEmail) {
      console.log(newEmail)
    }
  }
};
</script>
<style scoped>
.vsa-list {
      --vsa-heading-padding: 0.5rem 0.5rem;
      --vsa-default-icon-size: 0.5;
      --vsa-highlight-color: #485880;
}
</style>
