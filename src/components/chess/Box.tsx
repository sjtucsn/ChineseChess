import * as React from 'react'
import {style} from 'typestyle'
import {chessSize, spacexy} from './Chess'

declare function require(url: string): string

interface BoxProps {
  chessChange: [[number, number], [number, number], number]  //棋子在棋盘上的位置变化，数组第三个元素代表红方或黑方
}

//显示每次走棋棋子位置变化的背景框组件
export default class Box extends React.Component<BoxProps, any> {

  render() {
    const box = require(`../../assets/style/${this.props.chessChange[2] == 1?'r':'b'}_box.png`)
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
