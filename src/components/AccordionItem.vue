<template>
  <vsa-item v-show="typeof this.emailObject !== 'undefined'">
    <vsa-heading>
      <div class="flex flex-row">
      <div class="p-3">
        <p>{{websiteFirstLetter}}</p>
      </div>
      <div class="text-left">
      <p class="text-lg text-opacity-75">{{name}}</p>
      <p class="text-xs text-opacity-50">{{website}}</p>
      </div>
      </div>
    </vsa-heading>

    <vsa-content>
      <p class="text-sm">This is the content</p>
    </vsa-content>
  </vsa-item>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    emailObject: Object
  },
  mounted() {
  },
  methods: {
    capitalizeFirstLetter: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    email: function() {
      console.log(this.emailObject)
      return this.emailObject.email
    },
    name: function() {
      return this.capitalizeFirstLetter(this.email.split('@')[0])
    },
    website: function() {
      return this.capitalizeFirstLetter(this.email.split('@')[1].split('.')[0])
    },
    websiteFirstLetter: function() {
      return this.capitalizeFirstLetter(this.email.split('@')[1].split('.')[0].charAt(0))
    }
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
