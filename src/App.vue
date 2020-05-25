<template>
  <div v-cloak id="app">
    <HeaderBar />
    <TranslateMain />
    <OtherApp />
    <FooterMessage />
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import TranslateMain from "./components/TranslateMain";
import OtherApp from "./components/OtherApp";
import FooterMessage from "./components/FooterMessage";

export default {
  name: "App",
  components: {
    HeaderBar,
    TranslateMain,
    OtherApp,
    FooterMessage
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
</style>
