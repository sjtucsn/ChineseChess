import * as Redux from 'redux'
import {createAction, Action} from 'redux-actions'
import {PREFIX, gameState} from './index'
import {ChessProps, spacexy, chessSize} from '../components/chess/Chess'
import {nextPace} from './chessInfo'

//判断着点是否在象棋规则范围之内
function checkNextPace(i:number, j:number, newState:gameState) {
  let pace = newState.nextPace
  pace = pace.filter(item=>{
    if (item[0]==j && item[1]==i) {
      return true
    } else {
      return false
    }
  })
  if (pace.length == 1) {
    return true
  } else {
    return false
  }
}

//响应棋子点击事件
export function chessClickAction(chess: ChessProps) { 
  return createAction<ChessProps>(`${PREFIX}/chessClick`)(chess)
}

export function chessClick(state:gameState, action:Action<ChessProps>) {
  const newState = {...state}
  if (state.click) {  //已经存在正在操控的棋子
    const i = action.payload.position[0]  //将要吃的棋子的位置
    const j = action.payload.position[1]
    const oldi = state.click.position[0]  //正在操控的棋子的位置
    const oldj = state.click.position[1]
    if (checkNextPace(i, j, newState)) {
      delete newState.board[oldi][oldj]  //更新棋盘
      newState.board[i][j] = state.click.name
      newState.chessChange=[[i,j],[oldi,oldj],state.click.side] //记录每一步棋子的变化
    }
    newState.nextPace = null
    newState.click = null
  } else {
    const chess = action.payload
    const i = chess.position[0]  //点击的棋子的位置
    const j = chess.position[1]
    newState.click = action.payload
    newState.nextPace = nextPace[chess.type](j, i, newState.board, chess.side) //记录该棋子可走的全部位置
    newState.chessChange = null
  }
  return newState
}


//响应棋盘点击事件
export function boardClickAction(e: React.MouseEvent<HTMLDivElement>) {
  return createAction<React.MouseEvent<HTMLDivElement>>(`${PREFIX}/boardClick`)(e)
}

export function boardClick(state:gameState, action:Action<React.MouseEvent<HTMLDivElement>>) {
  const newState = {...state}
  if (state.click) {  //已经存在正在操控的棋子
    const e = action.payload
    const j = Math.round((e.clientX - e.currentTarget.offsetLeft - chessSize/2 + 5)/spacexy)  //获取点击棋盘位置
    const i = Math.round((e.clientY - e.currentTarget.offsetTop - chessSize/2 + 5)/spacexy)
    const oldi = state.click.position[0]  //正在操控的棋子的位置
    const oldj = state.click.position[1]
    if (checkNextPace(i, j, newState)) {
      delete newState.board[oldi][oldj]  //更新棋盘
      newState.board[i][j] = state.click.name
      newState.chessChange=[[i,j],[oldi,oldj],state.click.side]  //记录每一步棋子的变化
    }
    newState.nextPace = null
    newState.click = null
  } else {
    newState.click = null
    newState.chessChange = null
  }
  return newState
}
