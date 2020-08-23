import Vue from 'vue'
import VueRouter from 'vue-router'
import Startsida from '../views/Startsida'
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

  const routes = [
    {
      path: '/',
      name: 'Startsida',
      component: Startsida
    },
    {
      path: '/Kontakt',
      name: 'Kontakt',
      component: Kontakt
    },
    {
      path: '/Historia',
      name: 'Historia',
      component: Historia
    },
    {
      path: '/Solid',
      name: 'Solid guitars',
      component: Solid
    },
    {
      path: '/Semisolid',
      name: 'Semi solid guitars',
      component: Semisolid
    },
    {
      path: '/Archtop',
      name: 'Archtop guitars',
      component: Archtop
    },
    {
      path: '/Thinarchtop',
      name: 'Thin archtop guitars',
      component: Thinarchtop
    },
    {
      path: '/Kontrabas',
      name: 'Kontrabas',
      component: Kontrabas
    },
    {
      path: '/Bas',
      name: 'Bas',
      component: Bas
    },
    {
      path: '/Nylon',
      name: 'Nylonsträngade',
      component: Nylon
    },
    {
      path: '/Steel',
      name: 'Stålsträngade',
      component: Steel
    },
    {
      path: '/Akustiskbas',
      name: 'Akustisk bas',
      component: Akustiskbas
    },
    {
      path: '/BanjoMandolin',
      name: 'Banjo/Mandolin',
      component: BanjoMandolin
    },
    {
      path: '/Ukulele',
      name: 'Ukulele',
      component: Ukulele
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
