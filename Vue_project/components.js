const Navigation = {
    data: function () {
        return {};
    },
    computed: {
        is_paneled: function () {
            return this.$root.$store.state.tab_is_selected;
        }
    },
    methods: {
        to_panel: function () {
            if (!this.is_paneled) {
                document.getElementsByClassName("panel")[0].className = "panel p-slim";
                for (let item of document.getElementsByClassName("nav_name")) {
                    item.className = "nav_name nav_name-slim";
                }
            }
            this.$root.$store.commit("change_tab_is_selected");
        },
        to_start_screen: function () {
            document.getElementsByClassName("panel")[0].className = "panel p-full";
            console.log(document.getElementsByClassName("panel")[0]);
            for (let item of document.getElementsByClassName("nav_name")) {
                item.className = "nav_name nav_name-full";
            }
            this.$root.$store.commit("to_start_screen");
        }
    },
    template: `
 <nav class="panel">
    <div @click="to_panel" class="nav_div">
        <router-link to="/Personal_data" tag="div" class="navigation">
            <div class="nav_name">Personal Data</div>
            <transition name="fade">
                <div v-if="!is_paneled" class="border"></div>
            </transition>
            <transition name="fade">
                <div v-if="!is_paneled" class="nav_description">Main information about me</div>
            </transition>
        </router-link>
    </div>
    <div @click="to_panel" class="nav_div">
        <router-link to="/Programming_skills" tag="div" class="navigation">
            <div class="nav_name">Programming Skills</div>
            <transition name="fade">
                <div v-if="!is_paneled" class="border"></div>
            </transition>
            <transition name="fade">
                <div v-if="!is_paneled" class="nav_description">Knowledge stack of web-development</div>
            </transition>
        </router-link>
    </div>
    <div @click="to_panel" class="nav_div">
        <router-link to="/Examples" tag="div" class="navigation">
            <div class="nav_name">Eaxamples</div>
            <transition name="fade">
                <div v-if="!is_paneled" class="border"></div>
            </transition>
            <transition name="fade">
                <div v-if="!is_paneled" class="nav_description">Examples of my own Vue components</div>
            </transition>
        </router-link>
    </div>
    <div @click="to_panel" class="nav_div">
        <router-link to="/Blog" tag="div" class="navigation">
            <div class="nav_name">Blog</div>
            <transition name="fade">
                <div v-if="!is_paneled" class="border"></div>
            </transition>
            <transition name="fade">
                <div v-if="!is_paneled" class="nav_description">My social activity and contacts</div>
            </transition>
        </router-link>
    </div>
    <div @click="to_start_screen">
        </router-link>
        <transition name="bubble">
            <router-link v-show="is_paneled" tag="div" to="/" class="home_button">
                <i class="fa fa-home" aria-hidden="true"></i>
            </router-link>
        </transition>
    </div>
</nav>
  `
};

const Personal_data = {
    data:function(){
        return {
            language_skills_visible:false,
            stages_visible:false
        };
    },
    methods:{
        to_change_language_skills_visibility:function(){
            this.language_skills_visible=!this.language_skills_visible;
        },
        to_change_stages_visibility:function(){
            this.stages_visible=!this.stages_visible;
        }
    },
    template: `
    <div>
        <img src="https://habrastorage.org/files/965/274/447/965274447f3b4ad1ab9263039ada2589.jpg" class="profile_image">
        <table class="personal_info_table">
            <tr>
                <th>Name :</th>
                <td>Skok Artyom Andreyevich</td>
            </tr>
            <tr>
                <th>Address :</th>
                <td>17 Akhsarova St., Apt. #368, Kharkiv, Ukraine</td>
            </tr>
            <tr>
                <th>Phone Number :</th>
                <td>+38(098)-866-86-52</td>
            </tr>
            <tr>
                <th>Birthdate :</th>
                <td>27 of August 1998</td>
            </tr>
            <tr>
                <th>Place of Birth</th>
                <td>Kharkiv, Ukraine</td>
            </tr>
            <tr>
                <th>Martial Status :</th>
                <td>Single</td>
            </tr>
            <tr>
                <th>E-mail :</th>
                <td><a href="#">artem.skok@nure.ua</a></td>
            </tr>
        </table >
        <div @click="to_change_language_skills_visibility" class="spoiler_button">
            Language Skills <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
        </div>
        <div class="spoiler" v-show="language_skills_visible">
            <table class="personal_info_table">
                <thead>
                    <tr>
                        <th>Language</th>
                        <th>Level</th>
                        <th>Passive (grade 0-5)</th>
                        <th>Spoken (grade 0-5)</th>
                        <th>Written (grade 0-5)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ukrainian</td>
                        <td>native language</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Russian</td>
                        <td>native language</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>Intrmadiate</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div @click="to_change_stages_visibility" class="spoiler_button">
            Stages of University Education <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
        </div>
        <div class="spoiler" v-show="stages_visible">
            <table class="personal_info_table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Education</th>
                        <th>University</th>
                        <th>Place</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 sep 2015 - 30 jun 2019</td>
                        <td>Undergraduate Education</td>
                        <td>Kharkov State Technical University of Radioelectronics (KTURE)</td>
                        <td>Kharkov, UKRAINE</td>
                        <td>Information Administering Systems</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  `
};

const DropDownGallery={
    props:{
        options:{
            type:Object,
            required:true,
            default:{
                option:"url"
            }
        }
    },
    computed:{
        picture_url:function(){
            return this.options[this.chosen];
        },
        options_arr:function(){
            let arr=[];
            for(let key in this.options){
                arr.push(key);
            }
            return arr;
        }
    },
    data:function(){
        return {
            if_dropped:false,
            chosen:""
        };
    },
    methods:{
        to_drop_down_list:function(){
            this.if_dropped=!this.if_dropped;
        },
        to_select_option:function(event){
            this.if_dropped=false;
            this.chosen=event.target.innerHTML;
        }
    },
    template:`
    <div>
        <div id="drop_down_menu" v-on:click="to_drop_down_list">Images<i class="fa fa-sort-desc"></i></div>
        <div v-if="if_dropped" class="drop_down_list">
            <div v-for="item in options_arr" class="drop_down_options" v-on:click="to_select_option">{{item}}</div>
        </div>
        <div class="image_div">
            <img v-if="picture_url" :src="picture_url" alt="Oops! No picture today, sorry.">
        </div>
    </div>`
};

const Programming_skills = {
    template: `
  <div>
    <article class="programming_skills_art">
       <img class="programming_skills_pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png">
       <div>
           <h2>HTML</h2>
           <p>HTML представляет собой язык разметки гипертекста, который предназначен для создания веб-страниц. 
           Когда такая страница открывается в браузере, он просматривает код HTML, находит специальные символы, 
           называемые тегами, и использует их для создания элементов, таких как: рисунки, таблицы, ссылки и др.</p>
       </div>
    </article>
    <article class="programming_skills_art">
       <img class="programming_skills_pic" src="https://i0.wp.com/discoverflintshire.co.uk/wp-content/uploads/2016/03/css-logo-1.png">
       <div>
           <h2>CSS</h2>
           <p>CSS используется создателями веб-страниц для задания цветов, шрифтов, 
           расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц. 
           Основной целью разработки CSS являлось разделение описания логической структуры веб-страницы 
           (которое производится с помощью HTML или других языков разметки) от описания внешнего вида этой веб-страницы 
           (которое теперь производится с помощью формального языка CSS). </p>
       </div>
    </article>
    <article class="programming_skills_art">
       <img class="programming_skills_pic" src="https://i2.wp.com/qinematic.com/wp-content/uploads/2016/03/js-logo.png">
       <div>
           <h2>JS</h2>
           <p>JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.
            Является реализацией языка ECMAScript (стандарт ECMA-262).
            JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. 
            Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.</p>
       </div>
    </article>
    <article class="programming_skills_art">
       <img class="programming_skills_pic" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
       <div>
           <h2>Vue</h2>
           <p>Vue — это прогрессивный фреймворк для создания пользовательских интерфейсов. 
           В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения.
           Его ядро в первую очередь решает задачи уровня представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами. </p>
       </div>
    </article>
  </div>
  `
};

const Carousel = {
    props: {
        pictures_arr: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            current_image_id: 0
        };
    },
    methods: {
        to_slide_left: function () {
            if (this.current_image_id !== 0) {
                for (let item of image_frame.children) {
                    item.style.left = (parseInt(item.style.left) || 0) + 960 + "px";
                }
                this.current_image_id--;
            }
            else {
                for (let item of image_frame.children) {
                    item.style.left = -960 * (this.pictures_arr.length - 1) + "px";
                }
                this.current_image_id = this.pictures_arr.length - 1;
            }
            console.log(this.current_image_id);
        },
        to_slide_right: function () {
            if (this.current_image_id !== this.pictures_arr.length - 1) {
                for (let item of image_frame.children) {
                    item.style.left = (parseInt(item.style.left) || 0) - 960 + "px";
                }
                this.current_image_id++;
            }
            else {
                for (let item of image_frame.children) {
                    item.style.left = 0 + "px";
                }
                this.current_image_id = 0;
            }
            console.log(this.current_image_id);
        }
    },
    template: `
  <div class="container">
    <div class="frame" id="image_frame">
      <img v-for="item in pictures_arr" :src="item">
    </div>
    <div class="left" @click="to_slide_left">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div class="right" @click="to_slide_right">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
  `
};

const Examples = {
    data:function(){
        return {
            pics:Pictures,
            image_obj:Images_obj,
            carousel_visibility:false,
            drop_down_gallery_visibility:false
        };
    },
    components:{
        "carousel":Carousel,
        "drop-down-gallery":DropDownGallery
    },
    methods:{
        to_change_carousel_visibility:function(){
            this.carousel_visibility=!this.carousel_visibility;
        },
        to_change_drop_down_gallery_visibility:function(){
            this.drop_down_gallery_visibility=!this.drop_down_gallery_visibility;
        }
    },
    template: `
  <div class="text_page">
    <p>Self-made drop-down select attached to image gallery</p>
    <div class="spoiler_button" @click="to_change_drop_down_gallery_visibility">
        Drop-down gallery 
        <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
    </div>
    <div class="spoiler" v-show=" drop_down_gallery_visibility">
        <drop-down-gallery :options="image_obj"></drop-down-gallery>
    </div>
    <p>Non less self-made gallegy variation. (This time carousel)</p>
    <div class="spoiler_button" @click="to_change_carousel_visibility">
        Carousel 
        <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
    </div>
    <div class="spoiler center" v-show="carousel_visibility">
        <carousel :pictures_arr="pics"></carousel>
    </div>

  </div>
  `
};

const Blog = {
    data:function(){
        return{
            twits:Twits,
            search_line:""
        };
    },
    computed:{
        filteredTwits:function(){
            return this.twits.filter((twit)=>{
                return twit.text.toLowerCase().match(this.search_line.toLowerCase())||twit.date.toLowerCase().match(this.search_line.toLowerCase())||twit.author.toLowerCase().match(this.search_line.toLowerCase());
            });
        }
    },
    template: `
  <div class="blog">
    <img src="https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg">
    <section class="Twitter_feed">
            <h1><i id="twitter" class="fa fa-twitter" aria-hidden="true"></i> Twitter feed</h1>
            <input type="text" class="search" v-model="search_line" placeholder="search here">
            <div v-for="item in filteredTwits" class="twit">
                <p class="twitter_text"><span class="author"> @{{item.author}} : </span>
                    {{item.text}}
                </p>
                <p class="twitter_date">
                    {{item.date}}
                </p>
            </div>
           
    </section>
  </div>
  `
};



















