import React from 'react';
import {Flex, Accordion, Button} from 'antd-mobile';
import ImageLacyLoader from '../Utils/ImageLacyLoader';
import CSSModules from 'react-css-modules';
import styles from './Performance.scss';
import toFixed from "../../Utils/toFixed";
import moment from 'moment';

const PerformanceBox = (props) => {
        return (
            props.clearingOrder.length > 0 ?
                <div>
                    <Accordion accordion defaultActiveKey={`.$${props.clearingOrder[0].id}`}>
                        {props.clearingOrder.map((val, index) => {
                            return (
                                <Accordion.Panel key={`${val.id}`} styleName="Tabs-list-title_Accordion" header={(
                                    <div styleName="Tabs-list-title_box">
                                        <Flex styleName="Tabs-list-title_Flexbox">
                                            <p>
                                                {val.ordernum}
                                            </p>
                                            <Flex.Item/>
                                            <p>
                                                ￥{toFixed(val.amt)}元
                                            </p>
                                        </Flex>
                                        <Flex styleName="Tabs-list-title_Flexbox">
                                            <p className="grey">
                                                {moment(val.createdate.time).format('YYYY-MM-DD HH:mm:ss')}
                                            </p>
                                            <Flex.Item/>
                                            <p>
                                                {val.stateInfo}
                                            </p>
                                        </Flex>
                                    </div>)}>
                                    <div styleName="Tabs-list-accordion_wrap">
                                        <Flex styleName="Tabs-list-accordion_Flexbox">
                                            <ImageLacyLoader styleName="Tabs-list-accordion_Avatar"
                                                             src="http://wx.qlogo.cn/mmopen/uphTElucnBBVaAojmy4ZDkDvYiaVqouwDQLQxasonWulHbELnJ3GvWmlRiajINicLD2vcKA0ictz8xV6FQ4Y6bGlnDr9zibMicvf6ic/0"/>
                                            <Flex.Item styleName="Tabs-list-accordion_Flex_Item">
                                                <p>{val.nickname}</p>
                                                <p>收货人: {val['user_name']}({val.mobile})</p>
                                            </Flex.Item>
                                        </Flex>
                                    </div>
                                    {val.items.map((item, index) => {
                                        return (
                                            <div key={item['product_pic']} styleName="Tabs-list-accordion_wrap">
                                                <Flex styleName="Tabs-list-accordion_Flexbox">
                                                    <ImageLacyLoader styleName="Tabs-list-accordion_Avatar"
                                                                     src={item['product_pic']}/>
                                                    <Flex.Item styleName="Tabs-list-accordion_Flex_Item">
                                                        <p className="text-overflow-ellipsis">{item['product_name']}</p>
                                                        <p className="text-overflow-ellipsis">{item['product_spec']}</p>
                                                    </Flex.Item>
                                                    <div styleName="Tabs-list-accordion_Budget">
                                                        +{item['quantity']}
                                                    </div>
                                                </Flex>
                                            </div>
                                        )
                                    })}
                                </Accordion.Panel>
                            )
                        })}
                    </Accordion>
                    {props.nextPage && <Button size="small" onClick={() => {
                        props.loadMore(props.index)
                    }}>加载更多</Button>}
                </div> :
                <div>
                    暂无数据
                </div>
        )
    }
;

export default CSSModules(styles)(PerformanceBox)