import * as React from 'react'
import {Button} from 'antd'
import {style} from 'typestyle'
declare function require(url: string): string

interface ChessProps {
  name: string
  type: string
  side: 1|-1
  position: [number, number]
}

const chessSize = 54
const spacexy = 57

export default class Chess extends React.Component<ChessProps, any> {

  chooseBackGround(type: string, side: number) {
    let bg: string = null
    if (side == 1) {
      bg = require(`../../assets/style/r_${type}.png`)
    } else {
      bg = require(`../../assets/style/b_${type}.png`)
    }

    return bg
  }
  render() {
    const ChessStyle = style({
      position: 'absolute',
      backgroundImage: `url(${this.chooseBackGround(this.props.type, this.props.side)})`,
      width: chessSize,
      height: chessSize,
      top: -3+this.props.position[0]*spacexy,
      left: -3+this.props.position[1]*spacexy
    })
    return (
      <div className={ChessStyle}>

      </div>
    )
  }
}

