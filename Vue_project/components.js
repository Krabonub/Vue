const Navigation={
  data:function(){
    return {
      
    };
  },
  computed:{
    is_paneled:function(){
      return this.$root.$store.state.tab_is_selected;
    }
  },
  methods:{
    to_panel:function(){
      if(!this.is_paneled){
        document.getElementsByClassName("panel")[0].className="panel p-slim";
        for(let item of document.getElementsByClassName("nav_name")){
          item.className="nav_name nav_name-slim";
        }
      }
      else{
        document.getElementsByClassName("panel")[0].className="panel panel-full";
        for(let item of document.getElementsByClassName("nav_name")){
          item.className="nav_name nav_name-full";
        }
      }
      this.$root.$store.commit("change_tab_is_selected");
    }
  },
  template:`
  
  <nav class="panel" @click="to_panel">
    <router-link to="/Test" tag="div" class="navigation">
      <div class="nav_name">Personal Data</div>
      <transition name="fade">
        <div v-if="!is_paneled" class="border"></div>
      </transition>
      <transition name="fade">
        <div v-if="!is_paneled" class="nav_description">Main information about me</div>
      </transition>
    </router-link>
    <router-link to="/" tag="div" class="navigation">
      <div class="nav_name">Education</div>
      <transition name="fade">
        <div v-if="!is_paneled" class="border"></div>
      </transition>
      <transition name="fade">
        <div v-if="!is_paneled" class="nav_description">My studying degrees</div>
      </transition>
    </router-link>
    <router-link to="/" tag="div" class="navigation">
      <div class="nav_name">Programming Skills</div>
      <transition name="fade">
        <div v-if="!is_paneled" class="border"></div>
      </transition>
      <transition name="fade">
        <div v-if="!is_paneled" class="nav_description">Knowledge stack of web-development</div>
      </transition>
    </router-link>
    <router-link to="/" tag="div" class="navigation">
      <div class="nav_name">Blog</div>
      <transition name="fade">
        <div v-if="!is_paneled" class="border"></div>
      </transition>
      <transition name="fade">
        <div v-if="!is_paneled" class="nav_description">My social activity and contacts</div>
      </transition>
    </router-link>
  </nav>
  `
};
const Test={
  template:`
    <div class="Test">HeLLO!</div>
  `
};