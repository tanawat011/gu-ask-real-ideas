import {
  faCalculator,
  faTools,
  faDashboard,
  faLevelUp,
} from '@fortawesome/free-solid-svg-icons'

export const sidebarMenuList = [
  {
    label: 'Main',
  },
  {
    label: 'Dashboard',
    icon: faDashboard,
    isExpended: false,
    children: [
      {
        label: 'Main',
        icon: faDashboard,
        isSelected: false,
        href: '/dashboard'
      },
      {
        label: 'Crypto',
        icon: faDashboard,
        isSelected: false,
        href: '/dashboard/crypto'
      },
      {
        label: 'Stock',
        icon: faDashboard,
        isSelected: false,
        href: '/dashboard/stock'
      },
      {
        label: 'Wallet',
        icon: faDashboard,
        isSelected: false,
        href: '/dashboard/wallet'
      },
    ],
  },
  {
    label: 'About',
    icon: faDashboard,
    isSelected: false,
    href: '/about',
  },
  {
    label: 'Contact',
    icon: faDashboard,
    isSelected: false,
    href: '/contact',
  },
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
    isSelected: false,
    isExpended: false,
    children: [
      {
        label: 'Calculator',
        icon: faCalculator,
        isSelected: false,
        href: '/calculate',
      },
      {
        label: 'Profit/Loss',
        icon: faDashboard,
        isSelected: false,
        href: '/calculate/profit-loss'
      },
    ],
  },
  {
    label: 'Convertor',
    icon: faCalculator,
    isSelected: false,
  },
  {
    label: 'Level',
  },
  {
    label: 'Level 1',
    icon: faLevelUp,
    isSelected: false,
  },
  {
    label: 'Level 1 C',
    icon: faLevelUp,
    isExpended: false,
    children: [
      {
        label: 'Level 2',
        icon: faLevelUp,
        isSelected: false,
      },
      {
        label: 'Level 2 c',
        icon: faLevelUp,
        isExpended: false,
        children: [
          {
            label: 'Level 3',
            icon: faLevelUp,
            isSelected: false,
          },
          {
            label: 'Level 3 c',
            icon: faLevelUp,
            isSelected: false,
          },
        ],
      },
      {
        label: 'Level 2',
        icon: faLevelUp,
        isSelected: false,
      },
    ],
  },
  {
    label: 'Level 1',
    icon: faLevelUp,
    isSelected: false,
  },
]
