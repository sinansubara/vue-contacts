<template>
  <div class="contact-card">
    <div class="inner-card" v-if="!editActive">
      <p><b>First name: </b>{{ contact.firstName }}</p>
      <p><b>Last name: </b>{{ contact.lastName }}</p>
      <p v-for="(phone, index) in contact.phoneNumber" :key="index"><b>Phone {{ index+1 }}: </b>{{ phone.pNumber }}</p>
    </div>
    <div class="innerForm" v-else>
      <form>
        <label><b>First name</b></label>
        <input type="text" v-model="contact.firstName" placeholder="First name" />
        <label><b>Last name</b></label>
        <input type="text" v-model="contact.lastName" placeholder="Last name" /><br><br>
        <label><b>Phones</b></label>
        <!-- <input type="text" 
            v-for="(phone, index) in contact.phoneNumber" 
            :key="index" v-model="phone.pNumber" 
            placeholder="Phone number" /> -->
        <div class="form-group" v-for="(input, index) in contact.phoneNumber" :key="index">
          <input type="text" minlength="5" class="form-control" v-model="input.pNumber" placeholder="Phone number" required/>
          <span>
            <svg class="plusIcon" viewbox="0 0 25 25" @click="add()" v-show="index == contact.phoneNumber.length-1">
              <title>Add phone number</title>
              <circle cx="12.5" cy="12.5" r="12" fill="none"  stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
              <line x1="6" y1="12.5" x2="19" y2="12.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
              <line y1="6" x1="12.5" y2="19" x2="12.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
            </svg>

            <svg viewbox="0 0 25 25" @click="(remove(index))" v-show="index || (!index && contact.phoneNumber.length > 1)">
              <title>Remove phone number</title>
              <circle cx="12.5" cy="12.5" r="12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
              <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" vector-effect="non-scaling-stroke" />
            </svg>
          </span>
        </div>
      </form>
    </div>
    <div class="footer-card">
        <button v-if="!editActive" @click="changeEditState">Edit</button>
        <button v-else-if="editActive" @click="changeEditState">Save</button>
        <button @click="deleteContact(keyId)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['contact', 'keyId'],
  data() {
    return {
      editActive: false
    }
  },
  methods: {
    changeEditState(){
      if(this.editActive){
        this.$store.dispatch('editContact');
      }
      this.editActive = !this.editActive;
    },
    deleteContact(id){
      this.$store.dispatch('deleteContact', id);
    },
    add() {
      this.contact.phoneNumber.push({ pNumber: ''});
    },
    remove(index) {
      this.contact.phoneNumber.splice(index, 1);
    }
  }
}
</script>

<style>
  .contact-card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        margin: 1%;
        height: auto;
        width: 260px;
        text-align: center;
        position: relative;
        border: 1px solid gray;
    }
    .contact-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .inner-card {
        padding: 10px 16px;
        text-align: left;
        max-height: 279px;
        overflow: auto;
        margin-bottom: 50px;
    }
    .footer-card {
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.1);
        font-size: 2em;
    }
    .footer-card button {
        margin: 0 10px;
        padding: 8px 20px;
        font-size: 16px;
        cursor: pointer;
    }
    .footer-card button:first-child {
        background: lightgreen;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    .footer-card button:nth-child(2) {
        background: lightsalmon;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    .footer-card button:first-child:focus, .footer-card button:first-child:hover {
        background: rgb(75, 255, 75);
        border: none;
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
    }
    .footer-card button:nth-child(2):focus, .footer-card button:nth-child(2):hover {
        background: rgb(255, 105, 46);
        border: none;
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
    }
    .innerForm {
      margin-bottom: 50px;
      padding: 10px 20px;
    }
    .innerForm input {
      padding: 2px 5px 10px 5px;
    }
</style>