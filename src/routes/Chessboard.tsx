import * as React from 'react'
import {Button} from 'antd'
import { connect } from 'dva'
import {style} from 'typestyle'

import Chess from '../components/chess/Chess'
import {gameState, PREFIX} from '../models'
import {boardClickAction} from '../models/chessClick'

type ChessBoardProps = gameState

declare function require(url:string)
const bg = require('../assets/style/bg.png')

//棋盘组件
class ChessBoard extends React.Component<ChessBoardProps, any> {

  render() {
    const boxStyle = style({
      backgroundImage: `url(${bg})`,
      width: '507px',
      height: '567px',
      margin: 'auto',
      position: 'relative'
    })
    return (
      <div className={boxStyle} onClick={(e)=>{this.props.dispatch(boardClickAction(e))}}>
        {this.props.board.map((row,i) => {
          return row.map((item,j) => {
            return <Chess name={item} 
                          type={item[0].toLowerCase()} 
                          side={item[0]>='a'?1:-1} 
                          position={[i,j]} 
                          dispatch={this.props.dispatch}/>
          })
        })}
      </div>
    )
  }
}

export default connect(state=>state[PREFIX])(ChessBoard)
