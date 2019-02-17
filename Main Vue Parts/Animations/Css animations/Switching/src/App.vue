<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Transform Alert</button>
        <button class="btn btn-primary" @click="show2 = !show2">CssAnimate alert</button>
        <button class="btn btn-primary" @click="show3 = !show3">Mixed alert</button>
        <button class="btn btn-primary" @click="show4 = !show4">Switch</button>
        <hr>
        <br><br>
        <h5>Transform Alert</h5>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <hr>

        <br><br>
        <h5>CssAnimate alert</h5>
        <transition name="slide">
          <div class="alert alert-danger" v-if="show2">This is some danger</div>
        </transition>
        <hr>

        <br><br>
        <h5>Mixed alert</h5>
        <transition name="mix" type="transition"> <!-- or type="animation" -->
          <div class="alert alert-success" v-if="show3">This is some danger</div>
        </transition>
        <hr>

        <br><br>
        <h5>Switch</h5>
        <transition name="slide" mode="out-in">
          <div class="alert alert-success" v-if="show4" key="success">This is some success</div>
          <!-- v-show will not work for switching between elements
                v-if and v-if=! or v-if and v-else -->
          <div class="alert alert-warning" v-else key="warning ">This is some warning</div>
        </transition>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        show2: false,
        show3: false,
        show4: false,
      }
    },
  }
</script>

<style>
.fade-enter {
  opacity: 0;
  transform: translate(-40px);
}
.fade-enter-active {
  transition: all .2s;
}
.fade-leave {
}
.fade-leave-active {
  transform: translate(+40px);
  opacity: 0;
  transition: all .2s;
}
/* using css animations */
.slide-enter {}
.slide-enter-active{
  animation: slide-in .2s ease-in forwards;
}

.slide-leave {}
.slide-leave-active{
  animation: slide-out .2s ease-in forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translate(-40px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes slide-out {
  from {
    opacity: 1;
    transform: translate(0);
  }
  to {
    opacity: 0;
    transform: translate(40px);
  }
}

.mix-enter {
  transform: translate(-40px);
}
.mix-enter-active{
  animation: mix-in .2s ease-in forwards;
  transition: all .5s;
}

.mix-leave {
}
.mix-leave-active{
  transform: translate(40px);
  animation: mix-out .2s ease-in forwards;
  transition: all .2s;
  opacity: 0;
}

@keyframes mix-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes mix-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
