import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Kontakt from '../views/Kontakt'
import Historia from '../views/Historia'
import Solid from '../views/Solid'
import Semisolid from '../views/Semisolid'
import Archtop from '../views/Archtop'
import Thinarchtop from '../views/Thinarchtop'
import Kontrabas from '../views/Kontrabas'
import Nylon from '../views/Nylon'
import Steel from '../views/Steel'
import BanjoMandolin from '../views/BanjoMandolin'
import Bas from '../views/Bas'
import Akustiskbas from '../views/Akustiskbas'
import Ukulele from '../views/Ukulele'

Vue.use(VueRouter)



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    components: {
      Kontakt,
      Historia
    },

    navigation: [
      // {
      //   component: Historia,
      //   title: "Historia",
      //   path: "/Historia"
      // },
      {
        title: "Elgitarrer",
        open: false,
        children: [
          {
            component: Solid,
            title: "Solid guitars",
            open: false,
            path: "/Solid"
          },
          {
            component: Semisolid,
            title: "Semi solid guitars",
            open: false,
            path: "/Semisolid"
          },
          { component: Archtop,
            title: "Archtop guitars",
            open: false,
            path: "/Archtop"
          },
          { 
            component: Thinarchtop,
            title: "Thin archtop guitars",
            open: false,
            path: "/Thinarchtop"
          },
        ]
      },
      {
        title: "Elbasar",
        open: false,
        children: [
          {
            component: Kontrabas,
            title: "Kontrabas",
            open: false,
            path: "/Kontrabas"
          },
          {
            component: Bas,
            title: "Bas",
            open: false,
            path: "/Bas"
          },
        ]
      },
      {
        title: "Akustiskt",
        open: false,
        children: [
          {
            component: Nylon,
            title: "Nylonsträngade",
            open: false,
            path: "/Nylon"
          },
          {
            component: Steel,
            title: "Stålsträngade",
            open: false,
            path: "/Steel"
          },
          {
            component: Akustiskbas,
            title: "Akustisk bas",
            open: false,
            path: "/Akustiskbas"
          },
        ]
      },
      {
        title: "Övrigt",
        open: false,
        children: [
          {
            component: BanjoMandolin,
            title: "Banjo/Mandolin",
            open: false,
            path: "/BanjoMandolin"
          },
          {
            component: Ukulele,
            title: "Ukulele",
            open: false,
            path: "/Ukulele"
          },
        ]
      }
      // {
      //   component: Kontakt,
      //   title: "Kontakt",
      //   path: "/Kontakt"
      // },
    ],
    
  },
  getters: {
    navigation: state => {
      return state.navigation;
    }
  }
})
