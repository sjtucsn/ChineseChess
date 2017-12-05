import * as Redux from 'redux'
import {ChessProps} from '../components/chess/Chess'
import {chessClick, boardClick, AIClick} from './chessClick'
import {startClick, changeSide, onModelOK, onModelCancel, toggleAI, onGameOver, clearChess, showHint, regretMove} from './buttonClick'

export const PREFIX = 'chess'

export interface gameState {
  side: number //当前下棋的一方
  click: ChessProps  //目前点击的棋子
  board: string[][]  //当前棋盘状态
  nextPace: Array<[number, number]> //记录当前操控的棋子所有可走的位置
  chessChange: [[number, number], [number, number], number]  //记录棋子在棋盘上的位置变化，数组第三个元素代表红方或黑方
  color: string  //本方棋子颜色
  showModel: boolean //点击开始游戏时显示的静态对话框
  mode: number //游戏模式，1为人机对战，2为机机对战，3为人人对战
  difficulty: number //游戏难度，即AI水平
  winner: number //胜者，1代表玩家胜，－1代表电脑胜
  clearChessMode: boolean //是否开启让子模式
  history: Array<string[][]> //保存棋子历史值，用于悔棋
  paceHistory: string[] //用于检测是否长将
  dispatch: Redux.Dispatch<any>
}

const initState: gameState = {
  side: 0,
  click: null,
  board: [],
  nextPace: null,
  color: 'r',
  chessChange: null,
  showModel: false,
  mode: 1,
  difficulty: 2,
  winner: null,
  clearChessMode: false,
  history: [],
  paceHistory: [],
  dispatch: null
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
  },
  reducers: {
    chessClick,
    boardClick,
    AIClick,
    startClick,
    changeSide,
    onModelOK,
    onModelCancel,
    toggleAI, //机机对弈时的暂停对弈与恢复对弈功能
    onGameOver,
    clearChess, //让子模式
    showHint, //提示模式
    regretMove, //悔棋
  }
}
