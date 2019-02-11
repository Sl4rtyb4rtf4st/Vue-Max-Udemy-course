<template>
<!-- import { setInterval } from 'timers'; -->
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col">
        <h1>Directives</h1>
        <hr>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col">
        <button @click="builtIn = !builtIn">
          Switch <span :class="{bold: builtIn}">Built-in</span>/
          <span :class="{bold: !builtIn}">Custom</span>/
          <!-- <span :class="{bold: !builtIn}">Custom</span> -->
        </button>
      </div>
    </div>
    <div class="row justify-content-md-center mt-5 pt-5" v-if="builtIn">
      <div class="col-xs-12 col-sm-10 col-md-8">
        <h2>Built-in directives</h2>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-text</h4>
            <hr>
            <p v-text="'Some default text'"></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-html</h4>
            <hr>
            <p v-html="'<code>Some text in the code element</code>'"></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-for</h4>
            <hr>
            <ul>
              <li v-for="i in 5" :key="i+1">{{ i }}</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-if/v-else/v-else-if</h4>
            <hr>
            <p v-if="true">This element is true</p>
            <p v-else-if="true">This element is else-if true</p>
            <p v-else>This element is else</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-model</h4>
            <hr>
            <input v-model="vModelText" type="text" class="form-control">
            <p>v-model is only alowed on input/textarea/select form element for two way binding</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-bind</h4>
            <hr>
            <p><strong>Shorthand:</strong> <code>:</code></p>
            <p v-bind:style="{ textDecoration: textDecoration}">This text is styled using inline style bound to a data property.</p>
            <p v-bind:class="{ red: isActive }">This paragraph is given a style depending on the value of a bound property.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-on</h4>
            <hr>
            <p><strong>Shorthand:</strong> <code>@</code></p>
            <p v-bind:style="{color: color}" @click="color = 'green'">By clicking on the paragraph element you can change the color of the text.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-slot</h4>
            <p><strong>Shorthand:</strong> <code>#</code></p>
            <p>Have no example here, used inside a component call to provide the content for inside the component. </p><code v-text="'<some-component slot=slotname>Text/html to be placed inside the component</some-component>'"></code>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-show</h4>
            <p v-show="showIt">This paragraph is shown based of the truthyness of a data property, now set to true. Element is part of the dom but set to <code>display:none;</code></p>
          </div>
        </div>        
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-pre</h4>
            <p v-pre>{{ if you would like to actually show the curly braces }} you put the v-pre in the encapsulating element</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">v-once</h4>
            <p v-once>When v-once is used on an element then interpalation inside the element will only be done once when a data property changes the contents of the element doesn't</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center mt-5 pt-5" v-if="!builtIn">
      <div class="col-xs-12 col-sm-10 col-md-8">
        <h2>Custom directives</h2>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Globaly registered directive (<small><code>Vue.directive({});</code></small>)</h4>
            <hr>
            <h4>Hooks in the globaly registered directives:</h4>
            <dl>
              <div>
                <dt><h5>bind (el, binding, vnode)</h5></dt>
                <dd><p>Once Directive is Attached</p></dd>
              </div>
              <div>
                <dt><h5>inserted (el, binding, vnode)</h5></dt>
                <dd><p>Inserted in Parentnode</p></dd>
              </div>
              <div>
                <dt><h5>updated (el, binding, vnode, oldVnode)</h5></dt>
                <dd><p>Once Component is Updated(without children)</p></dd>
              </div>
              <div>
                <dt><h5>componentUpdated (el, binding, vnode, oldVnode)</h5></dt>
                <dd>Once Component is Updated(with children)</dd>
              </div>
              <div>
                <dt><h5>unbind (el, binding, vnode)</h5></dt>
                <dd>Once Directive is Rendered</dd>
              </div>
            </dl>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Custom Directive</h4>
            <p v-greenHighlight>This paragraph gets the v-greenHighlight directive</p>
            <pre>
              <code>
  Vue.directive('highlight', {
    bind(el, binding, vnode) {
      el.style.backgroundColor = 'green';
    }
  });
              </code>
            </pre>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Passing a Value to a Directive</h4>
            <p v-chooseHighlight="choosenColor">This paragraph gets the v-chooseHighlight directive</p>
            <pre>
              <code>
  Vue.directive('greenHighlight', {
    bind(el, binding, vnode) {
      el.style.backgroundColor = 'green';
    }
  });
              </code>
            </pre>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Passing a Directive Argunent</h4>
            <p v-recieveArg:background="choosenColor">Following the directive with an argument, precieded by a colon</p>
            <pre>
              <code>
  Vue.directive('recieveArg', {
    bind(el, binding, vnode) {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }
  });
              </code>
            </pre>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ading a Modifier to a Directive</h4>
            <p v-hasModifier:background.delay="choosenColor">This paragraph gets the v-hasModifier directive with an argument and the 'delay' modifier</p>
            <p>The modiefiers are in an array because you can have multiple modifiers, accessing it returns a true or false</p>
            <pre>
              <code>
Vue.directive('hasModifier', {
  bind(el, binding, vnode) {
    let delay = '';
    if(binding.modifiers['delay']) {
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});
              </code>
            </pre>
          </div>
        </div>


      </div>
    </div>
    <div class="row justify-content-md-center mt-5 pt-5" v-if="!builtIn">
      <div class="col-xs-12 col-sm-10 col-md-8">
        <h2>Custom local Directives</h2>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Locally registered directive (<small><code>directive: {},</code></small>)</h4>
            <hr>
            <p>Locally registered directives have the same hooks as the global ones and generaly work the same only they are declared on the component level instead of the main js file level</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Local Directive with a Modifier</h4>
            <p v-local-highlight:background.delay="'purple'">This paragraph gets the v-greenHighlight directive</p>
            <pre>
              <code>
  directives: {
    'localHighlight': {
      bind(el, binding, vnode) {
        let delay = '';
        console.log(binding.arg == 'background');  
        if(binding.modifiers['delay']) {
          delay = 3000;
        }
        setTimeout(() => {
          if(binding.arg == 'background') {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      }
    }
  }
              </code>
            </pre>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Local Directive with a multiple Modifiers</h4>
            <p v-local-highlight-blink:background.delay.blink="'lightseagreen'">
              This paragraph gets the v-local-highlight-blink directive with the delay and the blink modifiers
            </p>
            <pre>
              <code>
  directives: {
    'localHighlightBlink': {
      bind(el, binding, vnode) {
        let delay = '';
        console.log(binding.arg == 'background');  
        if(binding.modifiers['delay']) {
          delay = 3000;
        }
        if(binding.modifiers['blink']) {
          console.log(binding.modifiers['blink'])
          let mainColor = binding.value;
          let altColor = 'lightskyblue';
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == altColor ? currentColor = mainColor : currentColor = altColor;
              if(binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if(binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    }
  }
              </code>
            </pre>
          </div>
        </div>

                <div class="card">
          <div class="card-body">
            <h4 class="card-title">Local Directive with a multiple Modifiers</h4>
            <p v-local-highlight-complicated:background.delay.blink="{mainColor:'lightseagreen', altColor: 'lightskyblue', delay: 500}">
              This paragraph gets the v-local-highlight-blink directive with the delay and the blink modifiers. The binding value is now a more complicated object.
            </p>
            <pre>
              <code>
  directives: {
    'localHighlightComplicated': {
      bind(el, binding, vnode) {
        let delay = '';
        console.log(binding.arg == 'background');  
        if(binding.modifiers['delay']) {
          delay = binding.value.delay;
        }
        if(binding.modifiers['blink']) {
          console.log(binding.modifiers['blink'])
          let mainColor = binding.value.mainColor;
          let altColor = binding.value.altColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == altColor ? currentColor = mainColor : currentColor = altColor;
              if(binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if(binding.arg == 'background') {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
              </code>
            </pre>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        vModelText: 'This text comes from a data property',
        textDecoration: 'underline',
        isActive: true,
        showIt: true,
        color: 'black',
        builtIn: false,
        choosenColor: 'red'
      }
    },
    directives: {
      'localHighlight': {
        bind(el, binding, vnode) {
          let delay = '';
          console.log(binding.arg == 'background');  
          if(binding.modifiers['delay']) {
            delay = 3000;
          }
          setTimeout(() => {
            if(binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
      'localHighlightBlink': {
        bind(el, binding, vnode) {
          let delay = '';
          console.log(binding.arg == 'background');  
          if(binding.modifiers['delay']) {
            delay = 3000;
          }
          if(binding.modifiers['blink']) {
            console.log(binding.modifiers['blink'])
            let mainColor = binding.value;
            let altColor = 'lightskyblue';
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor == altColor ? currentColor = mainColor : currentColor = altColor;
                if(binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, 1000);
            }, delay);
          } else {
            setTimeout(() => {
              if(binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, delay);
          }
        }
      },
      'localHighlightComplicated': {
        bind(el, binding, vnode) {
          let delay = '';
          console.log(binding.arg == 'background');  
          if(binding.modifiers['delay']) {
            delay = binding.value.delay;
          }
          if(binding.modifiers['blink']) {
            console.log(binding.modifiers['blink'])
            let mainColor = binding.value.mainColor;
            let altColor = binding.value.altColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor == altColor ? currentColor = mainColor : currentColor = altColor;
                if(binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay);
          } else {
            setTimeout(() => {
              if(binding.arg == 'background') {
                el.style.backgroundColor = binding.value.mainColor;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
        }
      }
    },
    methods: {
      changeHighlightColor(color) {
        this.choosenColor = color; 
      }
    }
  }
</script>

<style>
  [v-cloak] > * { display:none; }
  [v-cloak]::before { content: "loading..."; }

  .card {
    margin: 1rem 0;
  }
  .red {
    background-color: lightcoral;
  }
  .bold {
    font-weight: bolder;
  }
  dt, dd {
    display: inline-block;
  }
</style>
