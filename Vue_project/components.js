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
        <router-link to="/Education" tag="div" class="navigation">
            <div class="nav_name">Education</div>
            <transition name="fade">
                <div v-if="!is_paneled" class="border"></div>
            </transition>
            <transition name="fade">
                <div v-if="!is_paneled" class="nav_description">My studying degrees</div>
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
            Language Skills
        </div>
        <div v-show="language_skills_visible">
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
            Stages of University Education
        </div>
        <div v-show="stages_visible">
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

const Education = {
    template: `
  <div>
    Education
  </div>
  `
};

const Programming_skills = {
    template: `
  <div>
    Programming skills
  </div>
  `
};

const Blog = {
    template: `
  <div>
    Blog
  </div>
  `
};
const Language_skills={
    template:`
    
    `
};






















