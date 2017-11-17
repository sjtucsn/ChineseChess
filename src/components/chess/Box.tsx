import * as React from 'react'
import {style} from 'typestyle'
import {chessSize, spacexy} from './Chess'

declare function require(url: string): string

interface BoxProps {
  chessChange: [[number, number], [number, number], number]  //棋子在棋盘上的位置变化，数组第三个元素代表红方或黑方
  color: string  //用于换边后判断背景框颜色
}

//显示每次走棋棋子位置变化的背景框组件
export default class Box extends React.Component<BoxProps, any> {

  render() {
    let color:string  //根据走的棋子的颜色判断背景框颜色，注意：人控制的一方永远阵营为1，不论棋子颜色
    if (this.props.color=='r') {
      color = this.props.chessChange[2] == 1?'r':'b'
    } else {
      color = this.props.chessChange[2] == 1?'b':'r'
    }
    const box = require(`../../assets/style/${color}_box.png`)
    const BoxStylePrev = style({
      position: 'absolute',
      backgroundImage: `url(${box})`,
      width: chessSize,
      height: chessSize,
      top: -3+this.props.chessChange[0][0]*spacexy,
      left: -3+this.props.chessChange[0][1]*spacexy,
    })
    const BoxStyleNext = style({
      position: 'absolute',
      backgroundImage: `url(${box})`,
      width: chessSize,
      height: chessSize,
      top: -3+this.props.chessChange[1][0]*spacexy,
      left: -3+this.props.chessChange[1][1]*spacexy,
    })
    return (
      <div>
        <div className={BoxStylePrev}></div>
        <div className={BoxStyleNext}></div>
      </div>
    )
  }
}
