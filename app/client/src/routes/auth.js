import { Signin } from 'views/auth/signin';
import { Signup } from 'views/auth/signup';

const Routes = [
  {
    path: '/signin',
    view: Signin,
    title: 'Sign in'
  },
  {
    path: '/signup',
    view: Signup,
    title: 'Sign up'
  },
]

export default Routes;