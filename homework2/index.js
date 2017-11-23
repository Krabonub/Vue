const images={
    "owl":"https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
    "northern lights":"https://www.w3schools.com/css/img_lights.jpg",
    "rabits":"https://s.hswstatic.com/gif/rabbits-crazy-march-1.jpg",
    "red panda":"https://i.ytimg.com/vi/b6dT4kyVUuY/maxresdefault.jpg"
};
Vue.component("drop-down",{
    props:{
        options:{
            type:Array,
            required:true,
            validator: function ( arr ) {
                let tmp = arr.filter ( function ( item ) {
                    return typeof item === 'string'
                });
                if ( tmp.length < arr.length )
                    console.warn ( 'Ошибка данных' );
                return true
            }
        }
},
    template:`<div>
        <div id="drop_down_menu" v-on:click="change_visibility">Images<i class="fa fa-sort-desc" aria-hidden="true"></i></div>
        <div v-if="if_dropped" class="drop_down_list">
            <div v-for="item in options" class="drop_down_options" v-on:click="to_select_option">{{item}}</div>
        </div>
    </div>`,
    data:function(){
        return {
            if_dropped:false,
            chosen:""
        };
    },
    methods:{
        change_visibility:function(){
            this.if_dropped=!this.if_dropped;
        },
        to_select_option:function(event){
            this.if_dropped=false;
            this.chosen=event.target.innerHTML;
            this.$parent.$emit("option_is_selected",this.chosen);
        }
    }
});
Vue.component("image-gallery",{
    props:["picture_url"],
    template:`
        <div class="image_div">
            <img v-if="picture_url" v-bind:src="picture_url">
        </div>`
});
const gallery=new Vue({
    el:"#gallery_div",
    data:{
        current_url:""
    },
    computed:{
        menu_options:function(){
            let ops=[];
            let i=0;
            for(let item in images)
            {
                ops[i]=item;
                i++;
            }
            return  ops;
        }
    },
});
gallery.$on("option_is_selected",function(choise){
    this.current_url=images[choise];
});