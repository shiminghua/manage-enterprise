export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', exact: true, component: './Index' },
    ],
  },
];