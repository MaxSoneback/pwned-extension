<template>
  <div class="p-0 container w-full h-full">
    <div class="overlay pt-1">
      <div class="header flex">
        <div class="w-1/4" @click="clearState">-</div>
        <top-logo class="mb-1 flex-grow" />
        <button class="m-auto text-lg w-1/4 justify-center" @click="addEmail">
        <b-icon icon="plus-circle" />
        </button>
      </div>
      <div class="accordion" role="tablist">
        <email-accordion-item
          v-for="emailObject in this.emailObjects"
          :key="emailObject.email"
          :emailObject="emailObject"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopLogo from "@/components/TopLogo.vue";
import EmailAccordionItem from "@/components/EmailAccordionItem.vue";

export default {
  name: "App",
  components: { TopLogo, EmailAccordionItem },
  data: function() {
    return {};
  },
  beforeMount() {
    window.store.commit("initStore");
  },
  methods: {
    addEmail: function() {
      window.store.commit("addEmail", "metalizzer@hotmail.com");
    },
    clearState: function() {
      window.store.commit("clearState");
    }
  },
  computed: {
    emailObjects: function() {
      return window.store.getters.emailObjects.sort(
        (a, b) => b.email - a.email
      );
    }
  }
};
</script>

<style>
.container {
  --custom-color-1: #0f1932;
  --custom-color-2: #45acbf;
  background: -moz-linear-gradient(
    -45deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0, var(--custom-color-1)),
    color-stop(100%, var(--custom-color-2))
  );
  background: -webkit-linear-gradient(
    -45deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  background: linear-gradient(
    135deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0f1932',endColorstr='#45acbf',GradientType=1);
  color: #fff;
}
.overlay {
  background-color: rgba(58, 154, 196, 0.5);
}
html {
  --custom-color-1: #0f1932;
  --custom-color-2: #45acbf;
  width: 500px;
  height: 400px;
  background: -moz-linear-gradient(
    -45deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0, var(--custom-color-1)),
    color-stop(100%, var(--custom-color-2))
  );
  background: -webkit-linear-gradient(
    -45deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  background: linear-gradient(
    135deg,
    var(--custom-color-1) 0,
    var(--custom-color-2) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0f1932',endColorstr='#45acbf',GradientType=1);
  color: #fff;
}
body {
  width: 100%;
  height: 100%;
}
</style>
