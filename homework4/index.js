const CustomImage = {
    props: {
        images_arr: {
            type: Array,
            required: true,
        }
    },
    data: function () {
        return {
            current_image_id: 0,
            previous_visible:false,
            next_visible:false
        };
    },
    computed: {
        current_image_url: function () {
            return this.images_arr[this.current_image_id].url;
        },
        previous_image_url: function () {
            var previous_image_id = this.current_image_id === 0 ? (this.images_arr.length - 1) : this.current_image_id - 1;
            return this.images_arr[previous_image_id].url;
        },
        next_image_url: function () {
            var next_image_id = this.current_image_id === (this.images_arr.length - 1) ? 0 : this.current_image_id + 1;
            return this.images_arr[next_image_id].url;
        },

    },
    methods: {
        to_next_image: function () {
            console.log("to_next_image");
            this.current_image_id = this.current_image_id === (this.images_arr.length - 1) ? 0 : this.current_image_id + 1;
        },
        to_previous_image: function () {
            console.log("to_previous_image");
            this.current_image_id = this.current_image_id === 0 ? (this.images_arr.length - 1) : this.current_image_id - 1;
        }
    },
    template: `
  <div class="gallery">
    <div class="button_div" @click="to_previous_image">Pre</div>
    <section id="image_area">
        <img :src="previous_image_url" v-if="previous_visible">
        <img :src="current_image_url">
        <img :src="next_image_url" v-if="next_visible">
    </section>
    <div class="button_div" @click="to_next_image">Next</div>
  </div>
  `
};

const model = new Vue({
    el: "#vue_element",
    data: {
        images: [
            {
                id: 0,
                url: "http://i.stack.imgur.com/WCveg.jpg"
            },
            {
                id: 1,
                url: "https://4bewh31zdc73464ghw37cbj0-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/weekly-roundup.jpg"
            },
            {
                id: 2,
                url: "http://wowslider.com/sliders/demo-34/data1/images/greatwilder1400498.jpg"
            },
            {
                id: 3,
                url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            },
        ]
    },
    components: {
        "custom-image": CustomImage
    }
});




