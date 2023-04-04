
import store from './store';
const Guard= 
{
    
    beforeEach(to, from, next)  {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.isLoggedIn) {
        // Redirect to the Login Page
        next('/login');
      } else {
        next();
      }
    }
     else if (to.matched.some(record => record.meta.requiresGuest)) {
      if (store.getters.isLoggedIn) {
        // Redirect to the Login Page
        next('/registered_area/account');
      } else {
        next();
      }
    } 
    else {
      next()
    }
  }
}

  export {Guard}