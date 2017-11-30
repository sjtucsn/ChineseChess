import * as React from 'react'
import {Button} from 'antd'
import { connect } from 'dva'
import {style} from 'typestyle'

import Chess from '../components/chess/Chess'
import Dot from '../components/chess/Dot'
import Box from '../components/chess/Box'
import AI from '../components/AI/AI'
import ButtonGroup from '../components/button/ButtonGroup'
import WinnerModel from '../components/button/winnerModel'
import {gameState, PREFIX} from '../models'
import {boardClickAction} from '../models/chessClick'
import {startClickAction} from '../models/buttonClick'

type ChessBoardProps = gameState

declare function require(url:string)
const bg = require('../assets/style/bg.png')
const background = require('../assets/background.png')

//棋盘组件
class ChessBoard extends React.Component<ChessBoardProps, any> {

  render() {
    const backgroundStyle = style({
      backgroundImage: `url(${background})`,
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      verticalAlign: 'bottom'
    })
    const boxStyle = style({
      backgroundImage: `url(${bg})`,
      width: '507px',
      height: '567px',
      top: '20px',
      margin: 'auto',
      position: 'relative',
      verticalAlign: 'bottom'
    })
    const buttonGropupStyle = style({
      position: 'relative',
      paddingTop: '30px',
      margin: 'auto',
      width: '507px'
    })
    return (
      <div className={backgroundStyle}>
        <div className={boxStyle} onClick={(e)=>{this.props.dispatch(boardClickAction(e))}}>
          {this.props.board.map((row,i) => {
            return row.map((item,j) => {
              if (item) {
                return <Chess name={item} 
                            type={item[0].toLowerCase()} 
                            side={item[0]>='a'?1:-1} 
                            position={[i,j]} 
                            color={this.props.color}
                            control={this.props.click}
                            dispatch={this.props.dispatch}/>
              }
            })
          })}
          {this.props.nextPace&&this.props.nextPace.map((position, index)=>{
            return <Dot position={position} key={index}/>
          })}
          {this.props.chessChange?<Box chessChange={this.props.chessChange} color={this.props.color}/>:null}
          <AI treeDepth={this.props.difficulty} mode={this.props.mode} board={this.props.board} dispatch={this.props.dispatch} side={this.props.side} paceHistory={this.props.paceHistory}/>
        </div>
        <div className={buttonGropupStyle}>
          <ButtonGroup mode={this.props.mode} side={this.props.side} showModel={this.props.showModel} history={this.props.history} dispatch={this.props.dispatch} />
        </div>
        <WinnerModel mode={this.props.mode} color={this.props.color} winner={this.props.winner} dispatch={this.props.dispatch} />
      </div>
    )
  }
}

export default connect(state=>state[PREFIX])(ChessBoard)
