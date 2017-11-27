const Gallery_select = {
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            drop_down_visibility: false,
            selected_item: "",
        };
    },
    computed: {
        select_options: function () {
            let options_arr = [];
            for (let i = 0; i < Object.keys(this.options).length; i++) {
                options_arr[i] = Object.keys(this.options)[i];
            }
            return options_arr;
        }
    },
    methods: {
        to_change_drop_down_visibility: function (event) {
            this.drop_down_visibility = !this.drop_down_visibility;
        },
        to_select_item: function () {
            this.drop_down_visibility = false;
            this.selected_item = event.target.innerHTML;
            console.log(this.selected_item);
        }
    },
    template: `
    <div>
      <div class="gallery_select" v-on:click="to_change_drop_down_visibility">
        {{selected_item||"Select image"}}<i id="arrow_down" class="fa fa-sort-desc"></i>
      </div>
      <div v-if="drop_down_visibility" class="select_drop-down">
        <div v-for="item in select_options" v-on:click="to_select_item" class="select_drop-down_option">
          {{item}}
        </div>
      </div>
      <div>
        <img class="gallery_img" v-bind:src="options[selected_item.trim()]">
      </div>
    </div>
  `
};
const Gallery_page = {
    props: {
        select_options: {
            type: Object,
            required: true
        }
    },
    components: {
        "gallery-select": Gallery_select
    },
    template: `
    <gallery-select v-bind:options="select_options"></gallery-select>
  `
};