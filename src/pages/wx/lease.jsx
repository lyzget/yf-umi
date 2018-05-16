/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { PureComponent } from 'react';
// import router from 'umi/router';
import { Icon } from 'antd';
import { Card, WingBlank } from 'antd-mobile';
import * as styles from './page.less';

export default class extends PureComponent {
  UNSAFE_componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header
            title={
              <div style={{ lineHeight: '2em', paddingTop: '1em' }}>
                <WingBlank>
                  热烈庆祝爱马斯·丹顿鳄鱼皮具坊乔迁二期3A018档！恭祝徐总开业大吉，生意兴隆，财源广进！好皮具哪里找？白云二期少不了！二期：批发零售、旅游购物、高端定制，鳄鱼皮具、鸵鸟皮具、蛇皮包等集中汇聚、应有尽有，选购方便！高端定位，彰显特色及优势！欢迎各位商家莅临二期参观指导、兴业发展！本中心负一楼、二期有少量一手商铺现对外出租，敬请留意。
                  好消息，好消息！一期负一B63-81、负一C区现有部分一手商铺限本月底前对外特惠出租，过期不侯，商机无限，惊喜不断，欢迎来电咨询：136
                  0007
                  0360。办公地址：负一B71。中国的三元里，世界的皮具城！好客白云欢迎您！
                  <div>地址: 二期9号门上二楼客服部。</div>
                </WingBlank>
              </div>
            }
          />
          <Card.Body>
            <WingBlank>
              <div style={{ lineHeight: '3em' }}>
                一期联系电话：
                <a href={'tel:02086268555'}>
                  020-86268555{' '}
                  <Icon type="phone" className={styles.phoneIcon} />
                </a>
              </div>
              <div style={{ lineHeight: '3em' }}>
                二期联系电话：
                <a href={'tel:02086268222'}>
                  020-86268222{' '}
                  <Icon type="phone" className={styles.phoneIcon} />
                </a>
              </div>
              <div style={{ lineHeight: '3em' }}>
                商务中心电话：
                <a href={'tel:02086268638'}>
                  020-86268638{' '}
                  <Icon type="phone" className={styles.phoneIcon} />
                </a>
              </div>
            </WingBlank>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
