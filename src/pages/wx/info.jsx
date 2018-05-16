/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { PureComponent } from 'react';
// import router from 'umi/router';
import { Icon } from 'antd';
import { List, Tabs, Pagination } from 'antd-mobile';
import { stringify } from 'qs';
import request from 'utils/request';
import { api } from 'utils/config';
import * as styles from './page.less';

// const { api } = config;
// const { info } = api;
// const tabs = ['转租', '转让'];
const tabs = [
  { title: '寻求合作', sub: '0' },
  { title: '寻求工厂', sub: '1' },
  { title: '招聘', sub: '2' }
];

export default class extends PureComponent {
  state = {
    list: [],
    total: 0,
    page: 1,
    pageSize: 10,
    tabType: 0,
    tabIndex: 0
  };

  onTabChange = (tab, index) => {
    this.setState({ tabType: tab.sub }, () => this.loadList());
  };

  onPageChange = p => this.loadList(p);

  loadList(p) {
    // const base = 'http://192.168.0.243:7001/api';
    const { pageSize, tabType } = this.state;
    const newPage = p ? p : 1;
    const url = `${api.info}?${stringify({
      page: newPage,
      pageSize,
      type: tabType
    })}`;
    request(url).then(res => {
      this.setState({
        list: res.data.rows,
        total: res.data.count,
        page: newPage
      });
      // 翻页后,页面滚动到顶端
      window.scrollTo(0, 0);
    });
  }

  renderItem = (item, index) => {
    const id = item.id;
    return (
      <div key={id + `_${index}`} id={id}>
        <List.Item wrap multipleLine>
          {item.contact}-- {item.phone}
          <a href={`tel:${item.phone}`}>
            <Icon type="phone" className={styles.phoneIcon} />
          </a>
          <List.Item.Brief className={styles.infoBrief}>
            <div className={styles.infoBrief}>{item.remark}</div>
          </List.Item.Brief>
        </List.Item>
      </div>
    );
  };
  renderEmpty() {
    return (
      <List.Item>
        <div style={{ textAlign: 'center' }}>暂无数据</div>
      </List.Item>
    );
  }
  //合并 渲染list和空数据
  renderList() {
    const list = this.state.list;
    return list.length
      ? list.map((info, index) => this.renderItem(info, index))
      : this.renderEmpty();
  }

  UNSAFE_componentWillMount() {
    this.loadList();
  }

  render() {
    const { list, tabType, page, pageSize, total } = this.state;

    return (
      <div>
        <Tabs
          tabs={tabs}
          initialPage={tabType}
          onChange={this.onTabChange}
          renderTab={tab => <span>{tab.title}</span>}
        />
          <List>{this.renderList()}</List>
          <Pagination
            total={Math.ceil(total / pageSize)}
            current={page}
            onChange={this.onPageChange}
          />

      </div>
    );
  }
}
