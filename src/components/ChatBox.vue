<template>
  <el-container class="chat-box">
    <el-main>
      <div id="scroll" ref="yscrollable">
        <div v-if="currentConverse.messageHistory">
          <div v-for="(item, index) in currentConverse.messageHistory" :key="index" class="msg-box" v-bind:class="{ 'user-msg-box': item.sender=='user' }">
            <div v-highlight v-html="item.message" v-bind:class="{ 'user-msg': item.sender=='user' }"></div>
          </div>    
        </div>

        <div v-if="answer" class="msg-box">
            <!--img :src="'/images/ai.png'" alt="" style="width: 30px; height: 30px; margin-right: 10px;"-->
            
            <!--p class="ai-text">{{ answer }}</p-->
            <div v-highlight ref="content" class="ai-text" v-html="answer"></div>
        </div>  
      </div> 
      
    </el-main>

    <el-footer class="footer">
        <div v-loading="isLoading" element-loading-spinner="el-icon-loading"></div>
        <div class="input-box">
          <el-row type="flex" class="row-bg" justify="space-between">
            <!--el-col :span="20"-->
                <el-input v-model="inputMsg" :placeholder= " $t('chat.inputMsg') " clearable
                  @keyup.enter.native="sendMessage" />
            <!--/el-col>
            <el-col :span="4"-->
                <el-button class="send-btn" icon="el-icon-s-promotion" @click="sendMessage" :disabled="isLoading"></el-button>
            <!--/el-col-->
          </el-row>
 
        </div>
    </el-footer>    
  </el-container>
</template>

<script>
import { marked }from 'marked';

export default {
  name: 'ChatBox',
  props: {
    title: String
  },
  data() {
    return {

      answer: '',

      showChat: false,
      scrollType: 'scroll', // scroll | noroll, two types 
      placeholder: "Welcome to langchain vue starter ...",
      inputMsg: '',
      isLoading: false,

      currentConverse: {},

      quickList: [
        { text: 'I am GPT helper，ask me your questions。' },
        { text: '您可以和名人文集对话，目前收录了《毛选》' },
      ]
    }
  },
  watch: {
    answer() {
      this.scrollToBottom();
    },
    inputMsg() {
      this.scrollToBottom();
    }
  },

  created() {
    // initalization
    this.currentConverse.messageHistory = [];

    const welcome = this.$t('chat.welcome');
    console.log(welcome);

    const aiMessage = { message: welcome, sender: "bot", time: new Date() };
    this.currentConverse.messageHistory.push(aiMessage);
  },  

  mounted() {
    this.scrollToBottom();
  },

  methods: {
    switchChat(e) {
      console.log(e);
      this.showChat = !this.showChat;
    },

    scrollToBottom() {
      this.$nextTick(() => {
        // const scrollable = this.$refs['scrollable'];
        // scrollable.wrap.scrollTop = scrollable.wrap.scrollHeight;   

        // scrollable.scrollTop = scrollable.scrollHeight;   

        let box = document.getElementById('scroll'); // 获取对象
        box.scrollTo(0, box.scrollHeight);    // if not DTD, scroll to bottom w. element

        let htmlDom = document.documentElement;
        htmlDom.scrollTo(0, box.scrollHeight); // if DTD, scroll to bottom w. dom

        // if chat box is with a drawer, use drawer's scroll
        let drawer = document.getElementsByClassName('el-drawer__body');
        if(drawer && drawer[0]) {
          drawer[0].scrollTo(0, box.scrollHeight);
        }

      });

    },
    
    // send message
    sendMessage: async function () {
       if (!this.currentConverse) {
        return;
      }
      
      if (!this.inputMsg) {
        return;
      }

      // append user message to current conversation's history
      const userMessage = { message: this.inputMsg, sender: "user", time: new Date() };
      this.currentConverse.messageHistory.push(userMessage);

      const question = this.inputMsg;

      this.inputMsg = '';   // should be cleared after ask

      // fetch sse to get ai response 
      this.answer = '';
      const response = await fetch("https://stream.lib2gpt.com/ask", {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              question: question,
          }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      var done = false;
      while (!done) {
          const { value, done } = await reader.read();
          if (done) break;

          //console.log("received data -", value)

          this.answer += decoder.decode(value);
      }
      this.answer = marked(this.answer);    // convert from markdown to html
      // console.log(this.answer);

      // append ai message to current conversation's history
      const aiMessage = { message: this.answer, sender: "bot", time: new Date() };
      this.currentConverse.messageHistory.push(aiMessage);

      this.answer = '';

      this.scrollToBottom();
    },

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "@/assets/css/main.css";

.el-container {
  position: relative;
}
.el-main {
  margin-bottom: 4rem;
  padding: 4px;
  min-height: 60vh;
}

.el-footer {
  position: fixed;
  bottom: 1rem;
  padding: 8px;
  right: 0.5rem;
  left: 0.5rem; 
  margin-right: 1rem;
}

.msg-box {
  display: block; 
  text-align: left;
  background: #f6f8fa;
  border-radius: 8px 8px 8px 0;  
  margin-bottom: 0.5rem;
  padding: 0.5rem;  
}

.msg-box > div > p {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;  
}

.msg-box > div > pre {
  margin: 0px;
}

.user-msg-box {
  background: transparent !important;
  display: block;
  text-align: right;
  padding: 0 !important;
  margin: 0 !important;
}

.user-msg {
  text-align: right;
  color: white;
  background-color: var(--primary-color);
  display: inline-block;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px 8px 0px 8px !important;  
}

.input-box {
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  background: white;
}
.el-textarea__inner {
  border: none !important;
}
.el-input__inner {
  border: none !important;
  height: 48px;
  padding: 0px !important;
  padding: 0.5rem !important;
}

.send-btn {
  font-size: 24px;
  border: none !important; 
}

.yscrollable {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
