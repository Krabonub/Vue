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

const Model = new Vue({
    el: "#view",
    data: {
        data_pics: Pictures
    },
    components: {
        "carousel": Carousel
    }
});