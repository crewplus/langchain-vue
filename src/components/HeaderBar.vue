<template>
    <div class="header-bar">

        <el-row :gutter="20">
            <el-col :span="4">
                <div class="logo" :v-show="hasLogo">
                    <img style="width: 36px; height: 36px" src="../assets/logo.png" >
                </div>
            </el-col>
            <el-col :span="16">
                <div class="app-title"> <b>{{ title }}</b> </div>
            </el-col>
            <el-col :span="4">
                <div class="tools" :v-show="hasSetting">
                    <el-button icon="el-icon-s-tools" size="medium" @click="dialogVisible = true" circle class="settings"></el-button>
                </div>
            </el-col>
        </el-row>

        <el-divider class="divider"></el-divider>

        <el-dialog title="Settings" :visible.sync="dialogVisible" width="80%" >
            
            <el-select v-model="locale" placeholder="请选择" @change="changeLocale">
                <el-option
                    v-for="item in locales"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>            
        </el-dialog>
    </div>

</template>

<script>
export default {
    name: 'HeaderBar',
    props: {
        title: String,
        hasLogo: {
            type: Boolean,
            default: true
        },
        hasSetting: {
            type: Boolean,
            default: true
        }
    },
    data() {
      return {
        settingDrawer: false,
        dialogVisible: false,

        showDiv: false,

        locales: [{
          value: 'en',
          label: 'English'
        }, {
          value: 'zh',
          label: '中文'
        }],
        locale: ''        
      }
    },
    mounted() {
        this.locale = this.$i18n.locale;
    },

    methods: {
        changeLocale() {
            this.$i18n.locale = this.locale;

            // TODO: let chatbox reload and set default ai message with new locale

        }   
    }    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "@/assets/css/main.css";

.header-bar {
    display: block;
    padding-top: 0.2rem;
}

.logo {
    text-align: left;
}

.divider {
    margin: 4px 0;
}
.el-button:active{
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.el-button:focus, .el-button:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.settings {
    border: none;
    font-size: 20px;
}

.v-modal {
    z-index: 20 !important;
}

.el-select-dropdown__list{
    min-height: 20vh;
}
</style>
