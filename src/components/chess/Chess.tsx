import * as React from 'react'
import * as Redux from 'redux'
import {style} from 'typestyle'

import {chessClickAction} from '../../models/chessClick'

declare function require(url: string): string

export interface ChessProps {
  name: string  //棋子id
  type: string  //棋子类型
  side: 1|-1  //棋子阵营
  position: [number, number]  //棋子在棋盘上的位置
}

interface OtherProps {
  color: string  //本方棋子颜色
  control: ChessProps  //当前操控的棋子
  dispatch: Redux.Dispatch<any>
}

export const chessSize = 54 //棋子大小
export const spacexy = 57 //棋子间隔大小


//棋子组件
export default class Chess extends React.Component<ChessProps&OtherProps, any> {

  //根据棋子类型选择背景图片
  chooseBackGround(type: string, side: number, color:string) { 
    let bg: string = null
    if (side == 1) {
      bg = require(`../../assets/style/${color=='r'?'r':'b'}_${type}.png`)
    } else {
      bg = require(`../../assets/style/${color=='b'?'r':'b'}_${type}.png`)
    }
    return bg
  }

  render() {
    const ChessStyle = style({
      position: 'absolute',
      backgroundImage: `url(${this.chooseBackGround(this.props.type, this.props.side, this.props.color)})`,
      width: chessSize,
      height: chessSize,
      top: -3+this.props.position[0]*spacexy,
      left: -3+this.props.position[1]*spacexy,
      opacity: this.props.control && this.props.control.name == this.props.name?0.8:1,
    })
    return (
      <div className={ChessStyle} onClick={(e)=>{
        e.stopPropagation()
        this.props.dispatch(chessClickAction(this.props))}
      }>
      </div>
    )
  }
}

