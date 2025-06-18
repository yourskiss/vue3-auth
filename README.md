# Vue 3 + TypeScript + Vite

features of the projects

1. Login authentication with token (https://reqres.in/api/login)
2. Token persistence with cookie
3. Pinia for global state management
4. Token restoration from cookie on page refresh
5. Redirect to protected routes after login
6. Navigation guards for route protection / guestOnly

If a user is not logged in and tries to access /dashboard, they'll be redirected to /login.
If a user is logged in and tries to access /login, they'll be redirected to /dashboard.
