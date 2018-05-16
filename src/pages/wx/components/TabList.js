import React from 'react';
import { List, Pagination } from 'antd-mobile';
import styles from '../page.less';
const TabList = ({
  list,
  total,
  page = 1,
  pageSize = 10,
  renderItem,
  // onPageChange,
  loadList,
  ...restProps
}) => {
  const onPageChange = page => {
    loadList(page);
  };

  const renderEmpty = () => {
    return (
      <List.Item>
        <div style={{ textAlign: 'center' }}>暂无数据</div>
      </List.Item>
    );
  };

  const renderList = () => {
    return (
      <div>
        <List>
          {list.length
            ? list.map((item, index) => renderItem(item, index))
            : renderEmpty()}
        </List>
        <Pagination
          total={Math.ceil(total / pageSize)}
          current={page}
          onChange={onPageChange}
        />
      </div>
    );
  };

  return <div>{renderList()}</div>;
};

export default TabList;
