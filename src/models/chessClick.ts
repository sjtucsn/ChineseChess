import * as Redux from 'redux'
import {createAction, Action} from 'redux-actions'
import {PREFIX, gameState} from './index'
import {ChessProps, spacexy, chessSize} from '../components/chess/Chess'


//响应棋子点击事件
export function chessClickAction(chess: ChessProps) { 
  return createAction<ChessProps>(`${PREFIX}/chessClick`)(chess)
}

export function chessClick(state:gameState, action:Action<ChessProps>) {
  const newState = {...state}
  if (state.click) {
    const i = action.payload.position[0]
    const j = action.payload.position[1]
    const oldi = state.click.position[0]
    const oldj = state.click.position[1]
    delete newState.board[oldi][oldj]
    newState.board[i][j] = state.click.name
    newState.click = null
  } else {
    newState.click = action.payload
  }
  return newState
}


//响应棋盘点击事件
export function boardClickAction(e: React.MouseEvent<HTMLDivElement>) {
  return createAction<React.MouseEvent<HTMLDivElement>>(`${PREFIX}/boardClick`)(e)
}

export function boardClick(state:gameState, action:Action<React.MouseEvent<HTMLDivElement>>) {
  const newState = {...state}
  if (state.click) {
    const e = action.payload
    const j = Math.round((e.clientX - e.currentTarget.offsetLeft - chessSize/2)/spacexy)
    const i = Math.round((e.clientY - e.currentTarget.offsetTop - chessSize/2)/spacexy)
    const oldi = state.click.position[0]
    const oldj = state.click.position[1]
    delete newState.board[oldi][oldj]
    newState.board[i][j] = state.click.name
    newState.click = null
  } else {
    newState.click = null
  }
  return newState
}
