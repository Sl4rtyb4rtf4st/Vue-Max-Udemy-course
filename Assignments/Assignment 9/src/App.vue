<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="activeComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="activeComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="activeComponent = 'appRed'">Load Red Template</button>
                <hr>
                <compontent :is="activeComponent">
                    Default content
                </compontent>

                <!-- <app-blue>
                    <div slot="activeComponent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis 
                            interdum ligula, sit amet maximus ipsum sagittis quis. Etiam vitae nunc 
                            facilisis, varius arcu non, feugiat metus. Maecenas tempus quam non nisl 
                            imperdiet bibendum. Cras nec metus mauris. Curabitur luctus aliquam lorem, 
                            at varius quam lobortis vitae. Vivamus pharetra volutpat lacus, in pulvinar 
                            ex convallis vitae.
                        </p>
                    </div>
                </app-blue>

                <app-green>
                    <div slot="activeComponent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis 
                            interdum ligula, sit amet maximus ipsum sagittis quis. Etiam vitae nunc 
                            facilisis, varius arcu non, feugiat metus. Maecenas tempus quam non nisl 
                            imperdiet bibendum. Cras nec metus mauris. Curabitur luctus aliquam lorem, 
                            at varius quam lobortis vitae. Vivamus pharetra volutpat lacus, in pulvinar 
                            ex convallis vitae.
                        </p>
                    </div>
                </app-green>

                <app-red>
                    <div slot="activeComponent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis 
                            interdum ligula, sit amet maximus ipsum sagittis quis. Etiam vitae nunc 
                            facilisis, varius arcu non, feugiat metus. Maecenas tempus quam non nisl 
                            imperdiet bibendum. Cras nec metus mauris. Curabitur luctus aliquam lorem, 
                            at varius quam lobortis vitae. Vivamus pharetra volutpat lacus, in pulvinar 
                            ex convallis vitae.
                        </p>
                    </div>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    // Using slots and dynamic components, place some content in either of the three components
    // The content inside the components should be the same in all three cases
    // The buttons should be used to switch which component is active, 
    //   only one should active at any given time 

    export default {
        data: function() {
            return {
                activeComponent: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        watch: {
            activeComponent() {
                // Just wanted a watch...no real good reason
                console.log('watch', this.activeComponent);
            }
        }
    }
</script>

<style>
</style>
