routesArr = [
    {
        path: "/Personal_data",
        component: Personal_data,
    },
    {
        path: "/Education",
        component: Education
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
