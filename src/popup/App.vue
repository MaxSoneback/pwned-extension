<template>
  <div class="w-full h-full overlay pt-1">
    <top-logo class="mb-1" />
    <span class="float-right absolute" @click="addEmail">+</span>
    <accordion />
  </div>
</template>

<script>
import TopLogo from "@/components/TopLogo.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  name: "App",
  components: { TopLogo, Accordion },
  data: function() {
    return{
    }
  },
  beforeMount() {
    window.store.commit('initStore');
  },
  methods: {
    addEmail: function() {
      window.store.commit('addEmail', "metalizzer@hotmail.com")
    }
  }
};
</script>

<style>
.overlay {
  background-color: rgba(58, 154, 196, 0.5);
}
html {
  --custom-color-1: #0f1932;
  --custom-color-2: #45acbf;
  width: 400px;
  height: 400px;
  background: -moz-linear-gradient(-45deg,var(--custom-color-1) 0,var(--custom-color-2) 100%);
  background: -webkit-gradient(linear,left top,right bottom,color-stop(0,var(--custom-color-1)),color-stop(100%,var(--custom-color-2)));
  background: -webkit-linear-gradient(-45deg,var(--custom-color-1) 0,var(--custom-color-2) 100%);
  background: -o-linear-gradient(-45deg,var(--custom-color-1) 0, var(--custom-color-2) 100%);
  background: -ms-linear-gradient(-45deg,var(--custom-color-1) 0,var(--custom-color-2) 100%);
  background: linear-gradient(135deg, var(--custom-color-1) 0,var(--custom-color-2) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0f1932',endColorstr='#45acbf',GradientType=1);
  color: #fff;
}
body {
  width: 100%;
  height: 100%;
}
</style>
