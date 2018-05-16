/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { PureComponent } from 'react';
// import router from 'umi/router';
import { Icon } from 'antd';
import {
  Menu,
  NavBar,
  List,
  Flex,
  Tabs,
  Button,
  Picker,
  Switch,
  Pagination,
  SegmentedControl,
  WingBlank
} from 'antd-mobile';
import { stringify } from 'qs';
import request from 'utils/request';
import { api } from 'utils/config';
import * as styles from './page.less';
import * as region from 'utils/region';

const menu_data = region.getRegionData();

const tabs = ['转租', '转让'];

export default class extends PureComponent {
 state = {
      list: [],
      total: 0,
      page: 1,
      pageSize: 10,
      region: ['1', ''],
      tabType: 0,
      typeName: '转租'
    };

  handleTypeChange = e => {
    const v = e.nativeEvent.selectedSegmentIndex;
    this.setState(
      {
        tabType: v,
        typeName: v === 1 ? '转让' : '转租'
      },
      () => {
        this.loadList();
      }
    );
  };

  loadList(p) {
    const { pageSize, region, tabType } = this.state;
    const newPage = p ? p : 1;
    const url = `${api.sublease}?${stringify({
      page: newPage,
      pageSize,
      region,
      tabType
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

  onPageChange = p => {
    this.loadList(p);
  };

  UNSAFE_componentWillMount() {
    window.scrollTo(0, 0);
    this.loadList();
  }
  renderItem = (item, index) => {
    const id = item.id;
    return (
      <div key={id + `_${index}`} id={id}>
        <List.Item wrap multipleLine>
          <Flex>
            <div style={{ width: '35%' }}>
              <Button
                type="primary"
                size="small"
                style={{ fontSize: '1.2em' }}
                inline
              >
                {item.shop.name}
              </Button>
            </div>
            <div>
              <div> {item.contact} </div>
              <div> {item.phone} </div>
            </div>
            <div style={{ marginLeft: '0.5em' }}>
              <a href={`tel:${item.phone}`}>
                <Icon type="phone" className={styles.phoneIcon} />
              </a>
            </div>
          </Flex>
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
  renderList() {
    const list = this.state.list;
    return list.length
      ? list.map((info, index) => this.renderItem(info, index))
      : this.renderEmpty();
  }

  render() {
    const {
      list,
      total,
      page,
      pageSize,
      menu_show,
      region,
      menu_label,
      tabType,
      typeChecked,
      typeName
    } = this.state;

    return (
      <div>
        <Flex>
          <div style={{ width: '40%' }}>
            <WingBlank>
              <SegmentedControl
                values={['转租', '转让']}
                selectedIndex={tabType}
                onChange={e => this.handleTypeChange(e)}
                // tintColor={'green'}
              />
            </WingBlank>
          </div>

          <div style={{ width: '60%' }}>
            <WingBlank>
              <Picker
                extra="请选择(可选)"
                cols={2}
                data={menu_data}
                value={region}
                title="区域"
                onOk={e => this.setState({ region: e }, () => this.loadList())}
              >
                <List.Item className="listItem" arrow="horizontal" wrap>
                  区域
                </List.Item>
              </Picker>
            </WingBlank>
          </div>
        </Flex>
        <List> {this.renderList()} </List>
        <Pagination
          total={Math.ceil(total / pageSize)}
          current={page}
          onChange={this.onPageChange}
        />
      </div>
    );
  }
}
