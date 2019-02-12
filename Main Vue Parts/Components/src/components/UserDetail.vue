<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetNameFn()">Reset Name 2</button>
    </div>
</template>

<script>
import { eventBus } from '../EventBus.js'; 

export default {
    // You should validate props...
    // props: ['userName'] // For validation the props value needs to ben an object
    //   The validation rules for a given prop can be the prop and then a single type
    //   an array for multiple types or an object with more specifics
    props: {
        // userName: String  // ...,Array]
        userName: {
            type: String,
            required: true // This sets this prop as a requisit for the render of this component
            // default: A default value, not used in combination with required
            // default: function() { // if the type is an object or an array the default should be an function returning an object or array
            //     return {
            //        someKey: someValue 
            //     }
            // } 
        },
        userAge: Number,
        resetNameFn : Function
    },
    methods: {
        switchName() {
            return this.userName.split("").reverse().join(""); 
        },
        resetName() {
            this.userName = "The Dude"; 
            // This will not reset the value of the userName of in the parent component only the version of the value for this component
            this.$emit('resettingTheName', this.userName);
        }
    },
    created() {
        eventBus.$on('ageWasChanges', (data) => {
            console.log('from the bus:', data);
            this.userAge = data;
        })
    }

}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
