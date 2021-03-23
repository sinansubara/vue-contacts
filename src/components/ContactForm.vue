<template>
  <div class="contactForm">
    <form @submit="newContact">
      <input type="text" placeholder="First name" v-model="fName" required />
      <input type="text" placeholder="Last name" v-model="lName" required />
        <div class="form-group" v-for="(input, index) in phones" :key="index">
          <input type="text" class="form-control" v-model="input.pNumber" placeholder="Phone number" required/>
          <span>
            <svg class="plusIcon" viewbox="0 0 25 25" @click="add()" v-show="index == phones.length-1">
              <title>Add phone number</title>
              <circle cx="12.5" cy="12.5" r="12" fill="none"  stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
              <line x1="6" y1="12.5" x2="19" y2="12.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
              <line y1="6" x1="12.5" y2="19" x2="12.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
            </svg>

            <svg viewbox="0 0 25 25" @click="(remove(index))" v-show="index || (!index && phones.length > 1)">
              <title>Remove phone number</title>
              <circle cx="12.5" cy="12.5" r="12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
              <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
            </svg>
          </span>
        </div>
      <input type="submit" value="Add contact"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      fName: '',
      lName: '',
      phones: [{
        pNumber: ''
      }]
    }
  },
  methods: {
    newContact(e) {
      e.preventDefault();
      if(this.fName !== '' && this.lName !== '' && this.phones.length > 0) {
        this.$store.dispatch('addContact', {
          firstName: this.fName,
          lastName: this.lName,
          phoneNumber: this.phones
        });
        this.fName = '';
        this.lName = '';
        this.phones = [{
          pNumber: ''
        }];
      }
    },
    add() {
    this.phones.push({ pNumber: ''});
    },
    remove(index) {
      this.phones.splice(index, 1);
    }
  }
}
</script>

<style>
  .contactForm {
    width: 250px;
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.37);
    border-radius: 2%;
    padding: 25px;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  .contactForm:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  input[type="text"]{
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid black;
    padding: 10px 18px;
    margin: 0 0 10px 0;
  }
  input[type="submit"] {
    margin-top: 10px;
    border: none;
    padding: 10px;
    cursor: pointer;
    background: lightgreen;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  input[type="submit"]:focus,  input[type="submit"]:hover{
    background: rgb(75, 255, 75);
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
  }
  span {
    position: relative;
  }
  span :first-child {
    background-color: lightgreen;
    position: absolute;
    right: 8px;
    transition: 0.3s;
  }
  span :first-child:focus, span :first-child:hover {
    background: rgb(75, 255, 75);
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
  }
  span :last-child {
    background-color: lightsalmon;
    position: absolute;
    right: -19px;
    transition: 0.3s;
  }
  span :last-child:focus, span :last-child:hover {
    background: rgb(255, 105, 46);
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
  }
  svg {
    width: 25px;
    height: 25px;
    
    border-radius: 50%;
    cursor: pointer;
  }
</style>