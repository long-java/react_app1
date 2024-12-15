import NotFound from './components/NotFound';
import Home from './page/Home';
import Login from './page/Login';
import TestRedux from './page/TestRedux';

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
    path: '/test-redux',
    component: TestRedux
  },
  {
    path: '*', // 404
    component: NotFound,
  },
];

export default routes;
