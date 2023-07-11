<template>
  <div class="aibox">
    <HeaderBar :title=" $t('aibox.title') " ></HeaderBar>
    <el-tabs type="card" v-model="activeName"  @tab-click="handleClick" class="tabs">
      <el-tab-pane :label=" $t('aibox.chat') " name="chat">
        <ChatBox title="This is a langchain vue starter"/>
      </el-tab-pane>
      <el-tab-pane :label=" $t('aibox.aigc') " name="aigc"></el-tab-pane>
      <el-tab-pane :label=" $t('aibox.notes') " name="notes"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import HeaderBar from './HeaderBar.vue'
import ChatBox from './ChatBox.vue'

export default {
  name: 'AIBox',
  components: {
    HeaderBar,
    ChatBox
  },
  data() {
    return {
      activeName: 'chat'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "@/assets/css/main.css";

.tabs {
  padding-top: 0.5rem;
}

.aibox {
  padding: 8px;
}

.el-tabs__item:hover {
  color: var(--primary-color);
}
.el-tabs__item.is-active {
  color: var(--primary-color);
}
</style>
