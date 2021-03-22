<template>
  <div id="app">
    <ContactForm />
    <ContactsList />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm'
import ContactsList from './components/ContactsList'
export default {
  name: 'App',
  components: {
    ContactForm,
    ContactsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
