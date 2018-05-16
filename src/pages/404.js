import React from 'react';
import Link from 'umi/link';
import styles from './404.less';
import { Icon } from 'antd';

export default () => (
  <div className={styles.error}>
    <Icon type="frown-o" />
    <h1>该页面在地球上消失了……</h1>
    <h1>
      <Link to="/">返回</Link>
    </h1>
  </div>
);
