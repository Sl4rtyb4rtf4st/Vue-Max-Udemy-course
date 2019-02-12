<template>
    <div class="container">
        <form @submit.prevent="submitIt" v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Sign Up</h1>
                    <hr>
                    <!-- Custom input element(s) for a full name -->
                    <app-full-name v-model="userData.fullName"></app-full-name>
                    <!-- end custom full name element -->
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input
                        type="mail"
                        id="mail"
                        class="form-control"
                        v-model.lazy="userData.mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                        type="password"
                        id="password"
                        class="form-control"
                        v-model.lazy="userData.password">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="yes">
                        <input
                        type="radio"
                        id="yes"
                        value="Yes"
                        v-model="userData.saveData"> Yes
                    </label>
                    <label for="no">
                        <input
                        type="radio"
                        id="no"
                        value="No"
                        v-model="userData.saveData"> No
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <input type="submit" class="btn btn-primary" value="Submit!">
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.saveData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'

    export default {
        data() {
            return {
                userData: {
                    fullName: '',
                    mail: '',
                    password: ''
                },
                saveData: '',
                submitted: false
            }
        },
        components: {
            appFullName: FullName
        },
        methods: {
            submitIt() {
                this.submitted = true;
            }
        }
    }
</script>

<style>
</style>
