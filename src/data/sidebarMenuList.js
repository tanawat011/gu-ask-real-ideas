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
    href: '/',
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
  {
    label: 'Apps',
  },
  {
    label: 'Todo List',
    icon: faTools,
  },
  {
    label: 'Calculator',
    icon: faCalculator,
  },
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
