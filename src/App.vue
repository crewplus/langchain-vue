<template>
  <div id="app">
    
    <div class="app-title"> <b>{{ $t('home.title') }}</b> </div>

    <el-drawer title="" size="90%" :visible.sync="drawer" direction="btt" :before-close="handleClose" :with-header="false" >
      <!--div id="scroll" ref="scrollable">
        <AIBox />
      </div-->
      <AIBox />
    </el-drawer>

    <div id="aibox" round @click="drawer = true">
      <draggable-button ></draggable-button>
    </div>
  </div>
</template>

<script>

import AIBox from './components/AIBox.vue'
import DraggableButton from './components/DraggableButton.vue';

export default {
  name: 'App',
  components: {
    AIBox,
    DraggableButton
  },
  data() {
    return {
      drawer: false,
      visible: false,
    };
  },
  methods: {
    handleClose(done) {
      done();
    }
  }  
}
</script>

<style >
@import "./assets/css/main.css";

#app {
  font-family: Helvetica, "PingFang SC", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  margin-top: 1rem;
  width: 99%;
}

#aibox {
  position: fixed;
  right: 50px;
  bottom: 50px;
  font-size: 36px;
  z-index: 999;
}

.el-drawer__body {
  overflow-y: scroll;
  overflow-x: hidden !important;
}

.app-title {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
</style>
