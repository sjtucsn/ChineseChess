import * as React from 'react'
import {style} from 'typestyle'
import {spacexy} from './Chess'

declare function require(url: string): string
const dot = require(`../../assets/style/dot.png`)

interface DotProps {
  position: [number, number]  //棋子在棋盘上的位置
}

//用于点击棋子时提示可走位置的点组件
export default class Dot extends React.Component<DotProps, any> {

  render() {
    const DotStyle = style({
      position: 'absolute',
      backgroundImage: `url(${dot})`,
      width: 23,
      height: 21,
      top: 10+this.props.position[1]*spacexy,
      left: 8+this.props.position[0]*spacexy,
    })
    return (
      <div className={DotStyle}>
      </div>
    )
  }
}
