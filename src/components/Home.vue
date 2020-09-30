<template>
  <div>
    <SwitchLanguage />
    <Multilingual />
  </div>
</template>

<script>
import Multilingual from "./Multilingual.vue";
import SwitchLanguage from "./SwitchLanguage.vue";

export default {
  name: "Home",
  components: {
    SwitchLanguage,
    Multilingual,
  },
};
</script>