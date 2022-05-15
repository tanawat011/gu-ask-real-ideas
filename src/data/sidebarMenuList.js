import {
  faGauge,
  faCoffee,
  faAnchor,
  faPager,
  faAddressBook,
  faCalculator,
  faTools,
  faBiohazard,
  faCalendar,
  faDashboard,
} from '@fortawesome/free-solid-svg-icons'

export const sidebarMenuList = [
  {
    label: 'Main',
  },
  {
    label: 'Dashboard',
    icon: faDashboard,
  },
  {
    label: 'Coffee',
    icon: faCoffee,
    isSelected: false,
    children: [
      {
        label: 'Capuchino',
        icon: faPager,
      },
      {
        label: 'Main',
        icon: faPager,
      },
      {
        label: 'Americano',
        icon: faAddressBook,
      },
    ],
  },
  {
    label: 'Anchor',
    icon: faAnchor,
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
    label: 'Planner',
    icon: faGauge,
    children: [
      {
        label: 'Document',
        icon: faBiohazard,
      },
      {
        label: 'Calendar',
        icon: faCalendar,
        children: [
          {
            label: 'Monthly',
            icon: faBiohazard,
          },
          {
            label: 'Daily',
            icon: faCalendar,
          },
        ],
      },
      {
        label: 'Calendar',
        icon: faCalendar,
        children: [
          {
            label: 'Monthly',
            icon: faBiohazard,
          },
        ],
      },
    ],
  },
  {
    label: 'Dashboard',
    icon: faDashboard,
  },
  {
    label: 'Coffee',
    icon: faCoffee,
    isSelected: false,
    children: [
      {
        label: 'Capuchino',
        icon: faPager,
      },
      {
        label: 'Main',
        icon: faPager,
      },
      {
        label: 'Americano',
        icon: faAddressBook,
      },
    ],
  },
]
