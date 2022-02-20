import React, { FC } from 'react';
import { Tabs } from 'antd';
import { Flexbox } from '@arvinxu/layout-kit';
import { DoubleRightOutlined } from '@ant-design/icons';
import useMergeState from 'use-merge-value';
import Dot from '../Dot';

import styles from './index.less';
import { FlowNode } from '../../types';

const { TabPane } = Tabs;

interface FlowTabsProps {
  flowList: FlowNode[];
  activeKey: string;
  onKeyChange: (key: string) => void;
}

const FlowTabs: FC<FlowTabsProps> = ({ flowList, onKeyChange, activeKey }) => {
  const [activeTabKey, setTabKey] = useMergeState(undefined, {
    value: activeKey,
    onChange: onKeyChange,
  });

  return (
    <div className={styles.tabs}>
      <Tabs centered activeKey={activeTabKey} onChange={setTabKey}>
        {flowList.map((node, index, array) => {
          return (
            <TabPane
              key={node.id}
              tab={
                <Flexbox horizontal align={'center'} gap={8}>
                  <div>{node.title}</div>
                  <Dot
                    count={node.children.length}
                    active={activeTabKey === node.id}
                  />
                  {index + 1 === array.length ? null : (
                    <div style={{ position: 'absolute', right: -32 }}>
                      <DoubleRightOutlined />
                    </div>
                  )}
                </Flexbox>
              }
            />
          );
        })}
      </Tabs>
    </div>
  );
};

export default FlowTabs;
