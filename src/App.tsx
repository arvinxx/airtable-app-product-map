import React, { FC, useEffect, useMemo } from 'react';
import { Image, Empty } from 'antd';
import { Flexbox } from '@arvinxu/layout-kit';
import { useDispatch } from 'react-redux';

import styles from './index.less';

import { Settings, FlowTabs, Dot } from './components';

import { useAppSelector } from './store';
import { globalAction } from './features/global';
import { useDataFromTableFields } from './hooks/useTableFields';

const App: FC = () => {
  const { activeTabKey, activeItemKey } = useAppSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  const data = useDataFromTableFields();

  // 当 data 变化时 设置第一项为激活项
  useEffect(() => {
    dispatch(globalAction.setActiveTabKey(data[0].id));
  }, []);

  const itemList = useMemo(() => {
    const flow = data.find((f) => f.id === activeTabKey);

    return flow?.children || [];
  }, [data, activeTabKey]);

  // 当 tab 变化时 设置第一项为激活项
  useEffect(() => {
    if (!activeTabKey) return;

    dispatch(globalAction.setActiveItemKey(itemList[0].id));
  }, [activeTabKey]);

  const detailNode = useMemo(() => {
    return itemList.find((i) => i.id === activeItemKey);
  }, [itemList, activeItemKey]);

  console.log(data);
  return (
    <Flexbox>
      <FlowTabs
        flowList={data}
        activeKey={activeTabKey}
        onKeyChange={(key) => dispatch(globalAction.setActiveTabKey(key))}
      />
      <Flexbox horizontal>
        <Flexbox style={{ flex: 1 }} padding={'0 8px'} className={styles.menu}>
          {itemList.map((i, index) => (
            <Flexbox
              key={i.id}
              className={styles.menuItem}
              horizontal
              gap={24}
              align={'center'}
              onClick={() => {
                dispatch(globalAction.setActiveItemKey(i.id));
              }}
            >
              <Flexbox>
                <Dot count={index + 1} active={activeItemKey === i.id} />
              </Flexbox>
              <Flexbox
                className={activeItemKey === i.id ? styles.textActive : ''}
              >
                <Flexbox style={{ fontWeight: 'bold' }}>{i.title}</Flexbox>
                <Flexbox>{i.description}</Flexbox>
              </Flexbox>
            </Flexbox>
          ))}
        </Flexbox>
        <Flexbox style={{ flex: 2 }} padding={'0 16px'}>
          {detailNode?.image ? (
            <div className={styles.img}>
              <Image src={detailNode.image} />
            </div>
          ) : (
            <Flexbox height={300} distribution={'center'}>
              <Empty description={'暂无图片'} />
            </Flexbox>
          )}
        </Flexbox>
      </Flexbox>

      <Settings />
    </Flexbox>
  );
};

export default App;
