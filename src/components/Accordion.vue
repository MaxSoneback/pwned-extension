<template>
 <vsa-list>
  <accordion-item v-for="email in this.emails"
  :email=email
  :key=email />
</vsa-list>
</template>

<script>
import AccordionItem from './AccordionItem.vue';
export default {
  components: { AccordionItem },
  name: "Accordion",
  props: {
    emails: Array
  },
  computed: {
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
