<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <!-- <input type="number" name="age" id="age" @keyup.enter="editAge"> 
            Commenting out because wanting to stick to Max's version for now -->
        <button @click="editAge">Edit Age</button>
        <p>Age: {{ userAge }}</p>
    </div>
</template>

<script>
    import { eventBus } from '../EventBus.js'

    export default {
        props: {
            userAge: {
                userAge: Number
            }
        },
        methods: {
            editAge(e) {
                this.userAge = 30;
                // this.$emit('ageChange', parseInt(e.path[0].value));
                // this.userAge = parseInt(e.path[0].value);
                // An other way of sharing data between components is by using an event Bus:
                //   the Vue instance created specifically for this use in the main.js file 
                // A same event can be emitted to the event bus as you would normaly do to the 
                //   components parent 
                // To stick to Max's version will comment out the following line
                // eventBus.$emit('ageChange', parseInt(e.path[0].value));

                // eventBus.$emit('ageChange', this.userAge);
                // When using a function in the event bus that function can be centralized 
                //   in the event bus Vue instance
                eventBus.changeAge(this.userAge);
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
