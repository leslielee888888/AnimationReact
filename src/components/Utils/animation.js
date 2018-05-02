import React from 'react';
import QueueAnim from 'rc-queue-anim';

export default class Animation extends React.Component {

    getChildren(){
        this.props.children.map((child) => {
            if (!child) {
                return;
            }
            console.log(child);
            const order = parseInt(child.props.order, 10);
            let classes = classnames({
                [`${classPrefix}-tab`]: true,
                [`${classPrefix}-active`]: activeIndex === order,
                [`${classPrefix}-disabled`]: child.props.disabled,
            });
            return (
                <li>{child.props.tab}</li>
            );
        })
        return (111);
    }

    render() {
        console.log(this.props.children);
        return (
            <QueueAnim type={['right', 'left']}>
                {this.props.children}
            </QueueAnim>
        )
    }
}