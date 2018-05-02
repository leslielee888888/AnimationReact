import React from 'react'
import styles from './Performance.scss';
import CSSModules from 'react-css-modules'
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Flex, Tabs} from 'antd-mobile';
import toFixed from "../../Utils/toFixed";
import PerformanceBox from './PerformanceBox';

const TabPane = Tabs.TabPane;
@immutableRenderDecorator
@CSSModules(styles)
export default class Performance extends React.Component {
    componentDidMount() {
        this.props.loadAll();
        this.props.loadFreeze();
        this.props.loadCashout();
    };


    constructor(props) {
        super(props);
    }

    render() {
        const {clearingOrderAll, clearingOrderFreeze, clearingOrderCashout} = this.props;
        return (
            <div>
                <div styleName="Performance-Bar_box">
                    <Flex>
                        <div>
                            <p>累计佣金</p>
                        </div>
                        <Flex.Item/>
                        <div className="grey">
                            ￥{toFixed(this.props.sumAmt)}元
                        </div>
                    </Flex>
                </div>
                <Tabs swipeable={true}>
                    <TabPane tab="所有" key="ALL">
                        {clearingOrderAll.get('clearingOrder')
                        && <PerformanceBox {...clearingOrderAll.toJSON()} loadMore={this.props.loadAllNext}
                                           index={this.props.allPageIndex}/>}
                    </TabPane>
                    <TabPane tab="冻结" key="FREEZE">
                        {clearingOrderFreeze.get('clearingOrder')
                        && <PerformanceBox {...clearingOrderFreeze.toJSON()} loadMore={this.props.loadFreezeNext}
                                           index={this.props.freezePageIndex}/>}
                    </TabPane>
                    <TabPane tab="可提现" key="CASHOUT">
                        {clearingOrderCashout.get('clearingOrder')
                        && <PerformanceBox {...clearingOrderCashout.toJSON()} loadMore={this.props.loadCashoutNext}
                                           index={this.props.cashoutPageIndex}/>}
                    </TabPane>
                </Tabs>
            </div>
        )
    }


}