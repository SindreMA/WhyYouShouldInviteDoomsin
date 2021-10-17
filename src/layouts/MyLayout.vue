<template>
  <q-layout view="lHh Lpr lFf" class="background">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
}
</script>

<style>
.background {
  background-color: #292929;
}
.defaultFont {
  color: #7a7a7a;
}
</style>
