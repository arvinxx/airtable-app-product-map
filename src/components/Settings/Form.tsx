import React, { FC } from 'react';
import { Flexbox } from '@arvinxu/layout-kit';

import { Heading } from '@airtable/blocks/ui';
import Content from './Content';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { globalAction } from '../../features/global';

export const FormSettings: FC = () => {
  const dispatch = useDispatch();

  return (
    <Flexbox padding={40}>
      <Heading paddingBottom={'16px'}>请先完成表格配置</Heading>
      <Content />
      <Flexbox direction={'horizontal'}>
        <Button
          type={'primary'}
          onClick={() => {
            dispatch(globalAction.filledForm());
          }}
        >
          确定
        </Button>
      </Flexbox>
    </Flexbox>
  );
};
