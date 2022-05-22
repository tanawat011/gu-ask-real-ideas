import {
  faCalculator,
  faTools,
  faDashboard,
  faLevelUp,
  faTable,
  faBorderAll,
  faBook,
} from '@fortawesome/free-solid-svg-icons'

const Components = [
  {
    label: 'Components',
  },
  {
    label: 'Input',
    icon: faBook,
    href: '/component',
    children: [
      {
        label: 'AutoComplete',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'Button',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'Checkbox',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'ColorPicker',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'DatePicker',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'Grid',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'TextInput',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'Selector',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'Radio',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'Slider',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'Switch',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'TimePicker',
        icon: faBook,
        href: '/grid',
      },
      {
        label: 'Upload',
        icon: faBook,
        href: '/grid',
      },
    ],
  },
  {
    label: 'Data Display',
    icon: faBook,
    children: [
      {
        label: 'Card',
        icon: faBook,
      },
    ],
  },
  {
    label: 'Feedback',
    icon: faBook,
    children: [
      {
        label: 'Alert',
        icon: faBook,
      },
      {
        label: 'Modal',
        icon: faBook,
      },
    ],
  },
  {
    label: 'Table',
    icon: faBook,
    children: [],
  },
  {
    label: 'Other',
    icon: faBook,
    children: [],
  },
]

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
    href: '/calculate',
    children: [
      {
        label: 'Calculator',
        icon: faCalculator,
        href: '/',
      },
      {
        label: 'Profit/Loss',
        icon: faDashboard,
        href: '/profit-loss'
      },
    ],
  },
  {
    label: 'Convertor',
    icon: faCalculator,
    href: '/convertor',
    children: [
      {
        label: 'Arabic and Roman',
        icon: faCalculator,
        href: '/arabic-and-roman',
      },
    ],
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
    href: '/dashboard',
    children: [
      {
        label: 'Main',
        icon: faDashboard,
        href: '/'
      },
      {
        label: 'Crypto',
        icon: faDashboard,
        href: '/crypto'
      },
      {
        label: 'Stock',
        icon: faDashboard,
        href: '/stock'
      },
      {
        label: 'Wallet',
        icon: faDashboard,
        href: '/wallet'
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
  ...Components,
  ...Apps,
  ...ContainerLayout,
  ...Docs,
  ...Level,
]
