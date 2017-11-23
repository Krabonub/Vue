var formWithLamp=new Vue({
  el:"#divilo",
  data:{
    sex:"",
    email:"",
    name:"",
    surname:"",
    genders:["Male","Female"],
    isGlowing:false,
    glowingSrc:"https://www.w3schools.com/js/pic_bulbon.gif",
    unGlowingSrc:"https://www.w3schools.com/js/pic_bulboff.gif"
  },
  computed:{
    currentSrc : function(){ return this.isGlowing ? this.glowingSrc : this.unGlowingSrc},
    state:function(){return this.isGlowing?"On":"Off";},
    switchId:function(){return this.isGlowing?"switch_on":"switch_off";},
    switcherId:function(){return this.isGlowing?"switcher_on":"switcher_off";},
    room_lighting:function(){return this.isGlowing?"day":"night";}
  },
  methods:{
    changeState:function(){
      this.isGlowing=this.isGlowing?false:true;
      return this.isGlowing;
    }
  }
});