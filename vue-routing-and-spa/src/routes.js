import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetails.vue'
import UserEdit from './components/user/UserEdit.vue'
import Header from './components/Header.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/user/', component: User, children: [
            { path: '', component: UserStart }, //ex: -> /user
            { path: ':id', component: UserDetail }, //ex: /user/1
            { path: ':id/edit', component: UserEdit, name: 'userEdit' } //ex: ->  /user/1/edit , the name property is optional
        ]
    }
];

//************ Below is an example of a conditional component being loading only on the home page **************/
// export const routes = [
//     { path: '', components: {
//             default: Home,
//             'header-bottom': Header // conditional component - will load when on the home page or Home component
//         } 
//     },
//     { path: '/user/', component: User, children: [
//             { path: '', component: UserStart }, //ex: -> /user
//             { path: ':id', component: UserDetail }, //ex: /user/1
//             { path: ':id/edit', component: UserEdit, name: 'userEdit' } //ex: ->  /user/1/edit , the name property is optional
//         ]
//     }
// ];