import * as React from 'react'
import {Button} from 'antd'
import { connect } from 'dva'
import {style} from 'typestyle'

import Chess from '../components/chess/Chess'
import Dot from '../components/chess/Dot'
import Box from '../components/chess/Box'
import AI from '../components/AI/AI'
import {gameState, PREFIX} from '../models'
import {boardClickAction} from '../models/chessClick'
import {startClickAction} from '../models/buttonClick'

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
      top: '50px',
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
                          control={this.props.click}
                          dispatch={this.props.dispatch}/>
          })
        })}
        {this.props.nextPace&&this.props.nextPace.map((position, index)=>{
          return <Dot position={position} key={index}/>
        })}
        {this.props.chessChange?<Box chessChange={this.props.chessChange}/>:null}
        <AI treeDepth={4} board={this.props.board} dispatch={this.props.dispatch} side={this.props.side}/>
      </div>
    )
  }

  componentDidMount() { //开始下棋
    this.props.dispatch(startClickAction())
  }

}

export default connect(state=>state[PREFIX])(ChessBoard)
