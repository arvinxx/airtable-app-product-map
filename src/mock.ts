import { FlowNode } from './types';

export const flows: FlowNode[] = [
  {
    title: 'Welcome',
    id: '1',
    children: [
      {
        title: 'Confirm',
        id: '5',
        description:
          'Sent to users automatically when they sign up. (double opt-in)',
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/KP7TOD%26WS/86eb72fc-4bd5-4c74-8c4d-c6558d1fb9bb.png',
      },
      {
        title: 'Welcome',
        id: '6',
        description:
          'Sent to users automatically when they sign up. (double opt-in)',
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/KP7TOD%26WS/86eb72fc-4bd5-4c74-8c4d-c6558d1fb9bb.png',
      },
      {
        title: 'Check up Email',
        id: '7',
        description:
          'Sent to users automatically when they sign up. (double opt-in)',
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/KP7TOD%26WS/86eb72fc-4bd5-4c74-8c4d-c6558d1fb9bb.png',
      },
      {
        title: 'Personalized Check up Email',
        id: '8',
        description:
          'Sent to users automatically when they sign up. (double opt-in)',
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/KP7TOD%26WS/86eb72fc-4bd5-4c74-8c4d-c6558d1fb9bb.png',
      },
    ],
  },
  {
    title: 'Onboarding',
    id: '2',
    children: [
      {
        title: 'Personalized Check up Email',
        id: '9',
        description:
          'Sent to users automatically when they sign up. (double opt-in)',
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/KP7TOD%26WS/86eb72fc-4bd5-4c74-8c4d-c6558d1fb9bb.png',
      },
    ],
  },
  {
    title: 'Engagement',
    id: '3',
    children: [
      {
        title: 'Personalized Check up Email',
        id: '10',
        description:
          'Sent to users automatically when they sign up. (double opt-in)',
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/KP7TOD%26WS/86eb72fc-4bd5-4c74-8c4d-c6558d1fb9bb.png',
      },
    ],
  },
  {
    title: 'Upselling',
    id: '4',
    children: [
      {
        title: 'Personalized Check up Email',
        id: '12',
        description:
          'Sent to users automatically when they sign up. (double opt-in)',
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/KP7TOD%26WS/86eb72fc-4bd5-4c74-8c4d-c6558d1fb9bb.png',
      },
      {
        title: 'Personalized Check up Email',
        id: '13',
        description:
          'Sent to users automatically when they sign up. (double opt-in)',
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/KP7TOD%26WS/86eb72fc-4bd5-4c74-8c4d-c6558d1fb9bb.png',
      },
    ],
  },
];
