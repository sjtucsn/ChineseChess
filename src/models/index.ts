import * as Redux from 'redux'
import {ChessProps} from '../components/chess/Chess'
import {chessClick, boardClick} from './chessClick'
import {initBoard} from './chessInfo'

export const PREFIX = 'chess'

export interface gameState {
  click: ChessProps  //目前点击的棋子
  board: string[][]  //当前棋盘状态
  nextPace: Array<[number, number]> //记录当前操控的棋子所有可走的位置
  chessChange: [[number, number], [number, number], number]  //记录棋子在棋盘上的位置变化，数组第三个元素代表红方或黑方
  dispatch: Redux.Dispatch<any>
}

const initState: gameState = {
  click: null,
  board: initBoard,
  nextPace: null,
  chessChange: null,
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
