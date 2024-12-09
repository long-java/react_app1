import NotFound from './components/NotFound';
import Home from './page/Home';
import Login from './page/Login';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*', // 404
    component: NotFound,
  },
];

export default routes;
