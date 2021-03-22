<template>
  <div class="contactsList">
    <div class="contact" v-for="(contact, index) in $store.getters.listContacts" :key="index">
      <Contact :contact="contact" :keyId="index"/>
    </div>
  </div>
</template>

<script>
import Contact from './Contact'
export default {
  name: 'ContactsList',
  components: {
    Contact
  }
}
</script>

<style>
  .contact {
    display: inline-flex;
    margin: 2%;
  }
</style>