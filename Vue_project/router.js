routesArr = [
    {
        path: "/Personal_data",
        component: Personal_data,
    },
    {
        path: "/Examples",
        component: Examples
    },
    {
        path: "/Programming_skills",
        component: Programming_skills
    },
    {
        path: "/Blog",
        component: Blog
    }
];

const router = new VueRouter({
    routes: routesArr
});
