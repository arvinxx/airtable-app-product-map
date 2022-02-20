import { Badge } from 'antd';
import React, { FC } from 'react';
import cls from 'classnames';

import styles from './index.less';

interface DotProps {
  count: number;
  active?: boolean;
}

const Dot: FC<DotProps> = ({ count, active }) => {
  return (
    <Badge
      count={count}
      className={cls(active ? styles.dotActive : styles.dot)}
    />
  );
};

export default Dot;
