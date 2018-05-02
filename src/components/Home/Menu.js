import React from 'react';
import {Grid, Flex, Button, Icon} from 'antd-mobile';
import styles from './Menu.scss';
import CSSModules from 'react-css-modules';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import toFixed from '../../Utils/toFixed';
import ImageLacyLoader from '../Utils/ImageLacyLoader';
import {Link} from 'react-router-dom';

@immutableRenderDecorator
@CSSModules(styles)
export default class menu extends React.Component {

    componentDidMount() {
        this.props.load();

    }

    render() {
        const data = [
            {
                text: '我的佣金',
                subtitle: (this.props.myProfit &&
                    <span><span className={styles['menuLogo--span']}>{this.props.myProfit}</span>元</span>),
                link: 'MyBonus'
            }, {
                text: '佣金明细',
                subtitle: (this.props.profitDetail &&
                    <span><span className={styles['menuLogo--span']}>{this.props.profitDetail}</span>笔</span>),
                link: 'Performance'
            }, {
                text: '提现明细',
                subtitle: (this.props.withdrawDetail &&
                    <span><span className={styles['menuLogo--span']}>{this.props.withdrawDetail}</span>笔</span>)
            }, {
                text: '我的会员',
                subtitle: (this.props.members &&
                    <span><span className={styles['menuLogo--span']}>{this.props.members}</span>人</span>)
            }, {
                text: '我的下线',
                subtitle: (this.props.team &&
                    <span><span className={styles['menuLogo--span']}>{this.props.team}</span>人</span>)
            }, {
                text: '商品目录',
                subtitle: ''
            }, {
                text: '分销商规则',
                subtitle: ''
            }, {
                text: '个人资料',
                subtitle: ''
            }, {
                text: '我的二维码',
                subtitle: ''
            }
        ];
        const distributor = this.props.distributor.toJSON();
        return (
            <div>
                <Flex styleName="MenuTop">
                    <Flex.Item>
                        <p>成功提现现金:</p>
                        <p styleName="MenuTop--span_yellow">￥{toFixed(distributor['withdraw_amt'])}</p>
                    </Flex.Item>
                    <Flex.Item>
                        <ImageLacyLoader className={styles["MenuTop--avatar"]} src={distributor.avatar}/>
                        <p>{distributor.name}</p>
                    </Flex.Item>
                    <Flex.Item>
                        <p>可提现佣金</p>
                        <p styleName="MenuTop--span_yellow">￥{toFixed(distributor['endamt'])}</p>
                        <Button size="small" styleName="MenuTop--Button" inline>佣金提现</Button>
                    </Flex.Item>
                </Flex>
                <Grid
                    data={data}
                    columnNum={3}
                    renderItem={(dataItem, index) => {
                        return (
                            <div className={styles.menuBox}>
                                <Link to={`/${dataItem.link}`}>
                                    <div className={styles['menuLogo--icon' + index]}/>
                                    <div className={styles['menuLogo--title']}>
                                        <span>{dataItem.text}</span>
                                    </div>
                                    {!!dataItem.subtitle && <div className={styles['menuLogo--title']}>
                                        <span>{dataItem.subtitle}</span>
                                    </div>}
                                </Link>
                            </div>
                        )
                    }}
                />
            </div>
        )
    }
}