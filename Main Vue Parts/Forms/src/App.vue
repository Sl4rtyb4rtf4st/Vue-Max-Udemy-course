<template>
  <div class="container">
    <form @submit.prevent="fauxFormSubmission">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value">
              <!-- The longform version of v-model which is actualy a combination of :value and @input/@change -->
              <!-- v-model.trim="userData.email"> -->
              <!-- The ',trim' v-model modifier removes any whitespace from the start or end of the imput -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="userData.password">
              <!-- The '.lazy' domifier only activates the two way binding on losing focus from the element -->
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model.lazy.number="userData.age">
              <!-- To force a number outpur use the '.number' modifier -->
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"> Send Infomail
            </label>
            <!-- By using the same model in these checkboxes Vue will put the values of the 
                  checked ones in the array of the data property -->
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="userData.gender"> Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="userData.gender"> Female
          </label>
          <!-- Same as with the checkboxes choosing the same model allowes vue to assign the right value to the data property -->
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            class="form-control"
            v-model="selectePriority">
            <option 
              v-for="(priority, i) in priorities" 
              :key=i
              :selected="priority == 'Low'">{{ priority }}</option>
              <!-- The ':selected=...' should output the option with that value as selected if v-model is not used -->
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <input 
            type="submit"
            class="btn btn-primary" 
            value="Submit!">
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmited">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <p style="white-space:pre">Message: {{ message }}</p>
            <!-- Showing the white space, which is saved, requires the 'white-space:pre' 
                  style to show the white space when outputting the result of a textarea -->
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="(sendMails, i) in sendMail" :key="i">{{ sendMails }}</li>
            </ul>
            <p>Gender: {{ userData.gender }}</p>
            <p>Priority: {{ selectePriority }}</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Switch from './Switch.vue'

  export default {
    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: null,
          gender: ''
        },
        message: '',
        sendMail: [],
        priorities: ['High', 'Medium', 'Low'],
        selectePriority: 'Low',
        // If you are assigning a value to this property, any value, to which the select element 
        //  is bound, you will not be able to assign a default like this:`:selected="priority == 'Low'"` 
        dataSwitch: true,
        isSubmited: false
      }
    },
    components: {
      appSwitch: Switch
    },
    methods: {
      fauxFormSubmission() {
        this.isSubmited = true;
      }
    }
  }
</script>

<style>

</style>
