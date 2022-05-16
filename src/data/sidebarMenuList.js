import {
  faCalculator,
  faTools,
  faDashboard,
  faLevelUp,
  faTable,
  faBorderAll,
  faBook,
} from '@fortawesome/free-solid-svg-icons'

const Apps = [
  {
    label: 'Apps',
  },
  {
    label: 'TODO',
    icon: faTools,
  },
  {
    label: 'Calculate',
    icon: faCalculator,
    children: [
      {
        label: 'Calculator',
        icon: faCalculator,
        href: '/calculate',
      },
      {
        label: 'Profit/Loss',
        icon: faDashboard,
        href: '/calculate/profit-loss'
      },
    ],
  },
  {
    label: 'Convertor',
    icon: faCalculator,
  },
]

const ContainerLayout = [
  {
    label: 'Container Layout',
  },
  {
    label: 'Full Page',
    icon: faBorderAll,
  },
  {
    label: 'Card',
    icon: faTable,
  },
]

const Docs = [
  {
    label: 'Docs',
  },
  {
    label: 'JavaScript',
    icon: faBook,
  },
  {
    label: 'TypeScript',
    icon: faBook,
  },
]

const Level = [
  {
    label: 'Level',
  },
  {
    label: 'Level 1',
    icon: faLevelUp,
  },
  {
    label: 'Level 1 C',
    icon: faLevelUp,
    children: [
      {
        label: 'Level 2',
        icon: faLevelUp,
      },
      {
        label: 'Level 2 c',
        icon: faLevelUp,
        children: [
          {
            label: 'Level 3',
            icon: faLevelUp,
          },
          {
            label: 'Level 3 c',
            icon: faLevelUp,
          },
        ],
      },
      {
        label: 'Level 2',
        icon: faLevelUp,
      },
    ],
  },
  {
    label: 'Level 1',
    icon: faLevelUp,
  },
]

export const sidebarMenuList = [
  {
    label: 'Main',
  },
  {
    label: 'Dashboard',
    icon: faDashboard,
    children: [
      {
        label: 'Main',
        icon: faDashboard,
        href: '/dashboard'
      },
      {
        label: 'Crypto',
        icon: faDashboard,
        href: '/dashboard/crypto'
      },
      {
        label: 'Stock',
        icon: faDashboard,
        href: '/dashboard/stock'
      },
      {
        label: 'Wallet',
        icon: faDashboard,
        href: '/dashboard/wallet'
      },
    ],
  },
  {
    label: 'About',
    icon: faDashboard,
    href: '/about',
  },
  {
    label: 'Contact',
    icon: faDashboard,
    href: '/contact',
  },
  ...Apps,
  ...ContainerLayout,
  ...Docs,
  ...Level,
]
