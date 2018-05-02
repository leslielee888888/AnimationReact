import React from 'react'
import styles from './MyBonus.scss';
import CSSModules from 'react-css-modules'
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Flex, Button, WhiteSpace, List, Accordion, WingBlank} from 'antd-mobile';
import toFixed from "../../Utils/toFixed";
@immutableRenderDecorator
@CSSModules(styles)
export default class MyBonus extends React.Component {
    componentDidMount(){
        this.props.load();
    };

    render() {
        return (
            <div>
                <div styleName="myBonusBox">
                    <Flex>
                        <div>
                            <p>累计佣金(元)</p>
                            <p>￥{toFixed(this.props.sumAmt)}</p>
                        </div>
                        <Flex.Item/>
                        <div>
                            <Button size="small" inline styleName="myBonus-button">提现明细</Button>
                        </div>
                    </Flex>
                </div>
                <WhiteSpace/>
                <List styleName="myBonus-list">
                    <List.Item extra={(<span styleName="myBonus-list-span">￥{toFixed(this.props.unClearing)}元</span>)}><span
                        styleName="myBonus-list-span">待核佣金(含下线预计贡献)</span></List.Item>
                    <List.Item extra={(<span styleName="myBonus-list-span"><span className="red">￥{toFixed(this.props.endamt)}</span>元</span>)}><span
                        styleName="myBonus-list-span">可提现佣金</span></List.Item>
                    <List.Item extra={(<span styleName="myBonus-list-span">￥{toFixed(this.props.withdraw1)}元</span>)}><span
                        styleName="myBonus-list-span">成功提现佣金</span></List.Item>
                </List>
                <WhiteSpace/>
                <Accordion>
                    <Accordion.Panel styleName="Accordion-panel"
                                     header={(<span styleName="myBonus-list-span">用户须知</span>)}>
                        <div>
                            <p>1、买家可退款的期限为已付款--交易完成7天内</p>
                            <p>2、商城会将佣金通过微信企业付款发到您微信的钱包</p>
                            <p>3、待核佣金：确认收货后7天后方可提现的佣金</p>
                            <p>4、可提现佣金需满1元才能申请提现</p>
                            <p>5、每人每天提现上限为每笔<span className="red">￥500</span>，最多<span className="red">￥5000</span></p>
                        </div>
                    </Accordion.Panel>
                </Accordion>
                <WhiteSpace/>
                <WingBlank size="md"><Button  type="primary">提现</Button></WingBlank>
            </div>
        )
    }


}