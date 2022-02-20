import React, { FC } from 'react';
import { Button, Drawer } from 'antd';
import { Flexbox } from '@arvinxu/layout-kit';
import Content from './Content';

import { useShowSettings } from './useShowSettings';

export const DrawerSettings: FC = () => {
  const { closeSettings, isShowSettings } = useShowSettings();

  return (
    <Drawer
      visible={isShowSettings}
      title={'设置面板'}
      onClose={closeSettings}
      footer={
        <Flexbox direction={'horizontal-reverse'}>
          <Button type={'primary'} onClick={closeSettings}>
            确定
          </Button>
        </Flexbox>
      }
    >
      <Content />
    </Drawer>
  );
};
