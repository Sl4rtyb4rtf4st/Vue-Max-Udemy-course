<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>User Age: {{ age }}</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :userName="userName" 
                    @resettingTheName="userName = $event"
                    :resetNameFn="resetNameFn" data-comment="<-this is the prefered method of chaging a prop"
                    :userAge="age"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageChange="changeAge"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                userName: "The Dude",
                age: 29
                // userName: 1
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName() {
                this.userName = "Andrew";
            },
            resetNameFn() {
                this.userName = "The Dude";
            },
            changeAge(age) {
                this.age = age;
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
