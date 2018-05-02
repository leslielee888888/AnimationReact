import React from 'react';
import ReactDOM from 'react-dom';
import ticker from 'rc-tween-one/lib/ticker';
import { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import styles from './LogoGather.css';
import CssModules from 'react-css-modules';
import show_bg1 from '../../images/show_bg3.png';
import show_bg4 from '../../images/show_bg4.jpg';

@CssModules(styles)
export default class LogoGather extends React.Component {

        static defaultProps = {
            image: show_bg1,
            className: 'logo-gather-demo',
            w: 250, //214
            h: 50, //40
            pixSize: 3,
            pointSizeMin: 1.5,
        };

        constructor(props) {
            super(props);
            this.state = {};
            this.interval = null;
            this.gather = true;
            this.intervalTime = 10000;
        }

        componentDidMount() {
            this.dom = ReactDOM.findDOMNode(this);
            this.createPointData();
        }

        componentWillUnmount() {
            ticker.clear(this.interval);
            this.interval = null;
        }

        setDataToDom(data, w, h) {
            this.pointArray = [];
            const number = this.props.pixSize;
            for (let i = 0; i < w; i += number) {
                for (let j = 0; j < h; j += number) {
                    if (data[((i + j * w) * 4) + 3] > 0) {
                        // this.pointArray.push({x: i, y: j});
                        this.pointArray.push({ x: i, y: j, r: data[((i + j * w) * 4)], g: data[((i + j * w) * 4) + 1], b: data[((i + j * w) * 4) + 2] });
                    }
                }
            }
            const children = [];
            const colors = [
                [30, 117, 187],
                [236, 32, 36],
                [246, 146, 32],
                [148, 200, 61]
            ]
            this.pointArray.forEach((item, i) => {
                const r = Math.random() * this.props.pointSizeMin + this.props.pointSizeMin;
                const b = Math.random() * 0.8 + 0.1;
                const c = Math.floor(Math.random() * 3.99);
                children.push( <TweenOne styleName = "point-wrapper"
                    key = { i }
                    style = {
                        { left: item.x, top: item.y } } >
                    <TweenOne styleName = "point"
                    style = {
                        {
                            width: r,
                            height: r,
                            opacity: 1,
                            //backgroundColor: `rgb(${Math.round(Math.random() * 95 + 148)},201,61)`,
                            // backgroundColor: `rgb(${colors[c][0]},${colors[c][1]},${colors[c][2]})`,
                            backgroundColor: `rgb(${item.r},${item.g},${item.b})`,
                        }
                    }
                    animation = {
                        {
                            y: (Math.random() * 2 - 1) * 2 || 1,
                            x: (Math.random() * 2 - 1) * 1 || 1,
                            delay: Math.random() * 1000,
                            repeat: -1,
                            duration: 3000,
                            yoyo: true,
                            ease: 'easeInOutQuad',
                        }
                    }
                    /> </TweenOne>
                );
            });
            this.setState({
                children,
                boxAnim: { opacity: 0, type: 'from', duration: 800 },
            }, () => {
                this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
            });
        }

        updateTweenData = () => {
            this.dom = ReactDOM.findDOMNode(this);
            this.sideBox = ReactDOM.findDOMNode(this.sideBoxComp);
            ((this.gather && this.disperseData) || this.gatherData)();
            this.gather = !this.gather;
        };

        disperseData = () => {
            const rect = this.dom.getBoundingClientRect();
            const sideRect = this.sideBox.getBoundingClientRect();
            const sideTop = sideRect.top - rect.top;
            const sideLeft = sideRect.left - rect.left;
            const children = this.state.children.map((item) => {
                return React.cloneElement(item, {
                    animation: {
                        x: Math.random() * rect.width - sideLeft - item.props.style.left,
                        y: Math.random() * 600 - sideTop - item.props.style.top,
                        opacity: Math.random() * 0.1 + 0.1,
                        scale: Math.random() * 30 + 0.1,
                        duration: Math.random() * 500 + 500,
                        ease: 'easeInOutQuint',
                    }
                })
            });
            this.setState({
                children,
            });
        };

        gatherData = () => {
            const children = this.state.children.map(item =>
                React.cloneElement(item, {
                    animation: {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        delay: Math.random() * 500,
                        duration: 800,
                        ease: 'easeInOutQuint',
                    },
                })
            );
            this.setState({ children });
        };

        createPointData = () => {
            //const {w, h} = this.props;
            const w = ReactDOM.findDOMNode(this.sideBoxComp).getBoundingClientRect().width;
            const h = ReactDOM.findDOMNode(this.sideBoxComp).getBoundingClientRect().height;
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, w, h);
            canvas.width = w;
            canvas.height = h;
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
                const data = ctx.getImageData(0, 0, w, h).data;
                this.setDataToDom(data, w, h);
                canvas && this.dom.removeChild(canvas);
            };
            img.crossOrigin = 'anonymous';
            img.src = this.props.image;
        };

        render() {
            return ( <div styleName = "logo-gather-demo-wrapper"
                style = {
                    { height: 600 } } >
                <
                canvas id = "canvas" / >
                <TweenOne animation = { this.state.boxAnim }
                styleName = "right-side"
                ref = {
                    (c) => {
                        this.sideBoxComp = c;
                    }
                } >
                { this.state.children } </TweenOne>  { /* <img src={show_bg4} width="100%"/> */ } </div>);
            }
        }