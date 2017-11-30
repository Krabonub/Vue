const Routes_arr = [
    {
        path: "/Space",
        component: Gallery_page,
        props: {
            select_options: SpaceOptions
        }
    },
    {
        path: "/Landscapes",
        component: Gallery_page,
        props: {
            select_options: LandscapesOptions
        }
    },
    {
        path: "/Animals",
        component: Gallery_page,
        props: {
            select_options: AnimalsOptions
        }
    },
    {
        path: "/People",
        component: Gallery_page,
        props: {
            select_options: PeopleOptions,

        }
    },
];

const Router = new VueRouter({
    routes: Routes_arr
});
