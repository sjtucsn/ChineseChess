import * as Redux from 'redux'
import {ChessProps} from '../components/chess/Chess'
import {chessClick, boardClick} from './chessClick'
import {initBoard} from './chessInfo'

export const PREFIX = 'chess'

export interface gameState {
  click: ChessProps  //目前点击的棋子
  board: string[][]  //当前棋盘状态
  dispatch: Redux.Dispatch<any>
}

const initState: gameState = {
  click: null,
  board: initBoard,
  dispatch: null
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
  },
  reducers: {
    chessClick,
    boardClick
  }
}
