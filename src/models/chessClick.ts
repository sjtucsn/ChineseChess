import * as Redux from 'redux'
import {createAction, Action} from 'redux-actions'
import {message} from 'antd'
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
  if (state.mode==2 || state.mode==1&&state.side==-1) {//防止AI模式下误点棋子
    return newState
  }
  //响应让子操作
  if (newState.clearChessMode) {
    newState.clearChessMode = false
    newState.click = null
    newState.nextPace = null
    newState.chessChange = null
    const i = action.payload.position[0]  //将要清空的棋子的位置
    const j = action.payload.position[1]
    if (!newState.board[i][j]) {
      return newState
    }
    if (newState.board[i][j]=='J0'||newState.board[i][j]=='j0') {
      message.error('将和帅是不可以让的哦～')
    } else {
      delete newState.board[i][j]
    }
    return newState
  }
  if (state.click) {  //已经存在正在操控的棋子
    const i = action.payload.position[0]  //将要吃的棋子的位置
    const j = action.payload.position[1]
    const oldi = state.click.position[0]  //正在操控的棋子的位置
    const oldj = state.click.position[1]
    if (checkNextPace(i, j, newState)) {
      delete newState.board[oldi][oldj]  //更新棋盘
      if (state.board[i][j]=='J0') { //游戏胜负判断
        newState.winner = 1
        newState.side = 0
      } else if (state.board[i][j]=='j0') {
        newState.winner = -1
        newState.side = 0
      }
      newState.board[i][j] = state.click.name
      newState.chessChange=[[i,j],[oldi,oldj],state.click.side] //记录每一步棋子的变化
      newState.side = -newState.side  //换成对方下棋
      newState.history = [...state.history, newState.board.map(row=>[...row])]
      newState.paceHistory = [...newState.paceHistory, newState.chessChange.join()]
    }
    newState.nextPace = null
    newState.click = null
  } else {
    const chess = action.payload
    if (state.side!=chess.side) {  //只能点本方的棋子
      return newState
    }
    const i = chess.position[0]  //点击的棋子的位置
    const j = chess.position[1]
    newState.click = action.payload
    newState.nextPace = nextPace[chess.type](j, i, newState.board, chess.side) //记录该棋子可走的全部位置
    //防止长将操作
    const h = newState.paceHistory
    const l = h.length
    if (l>=8 && chess.name!='j0'&& chess.name!='J0' ) {
      newState.nextPace = newState.nextPace.filter((pace)=>{
        if (h[l-2]==h[l-6] && [[pace[1], pace[0]], [i, j], chess.side].join()==h[l-4]) {
          return false
        } else {
          return true
        }
      })
    }
  }
  return newState
}


//响应棋盘点击事件
export function boardClickAction(e: React.MouseEvent<HTMLDivElement>) {
  return createAction<React.MouseEvent<HTMLDivElement>>(`${PREFIX}/boardClick`)(e)
}

export function boardClick(state:gameState, action:Action<React.MouseEvent<HTMLDivElement>>) {
  const newState = {...state}
  if (state.mode==2 || state.mode==1&&state.side==-1) {//防止AI模式下误点棋子
    return newState
  }
  //响应让子操作
  if (newState.clearChessMode) {
    newState.clearChessMode = false
    newState.click = null
    newState.nextPace = null
    newState.chessChange = null
    const e = action.payload
    const j = Math.round((e.clientX - e.currentTarget.offsetLeft - chessSize/2 + 5)/spacexy)  //获取点击棋盘位置
    const i = Math.round((e.clientY - e.currentTarget.offsetTop - chessSize/2 + 5)/spacexy)
    if (!newState.board[i][j]) {
      return newState
    }
    if (newState.board[i][j]=='J0'||newState.board[i][j]=='j0') {
      message.error('将和帅是不可以让的哦～')
    } else {
      delete newState.board[i][j]
    }
    return newState
  }
  if (state.click) {  //已经存在正在操控的棋子
    const e = action.payload
    const j = Math.round((e.clientX - e.currentTarget.offsetLeft - chessSize/2 + 5)/spacexy)  //获取点击棋盘位置
    const i = Math.round((e.clientY - e.currentTarget.offsetTop - chessSize/2 + 5)/spacexy)
    const oldi = state.click.position[0]  //正在操控的棋子的位置
    const oldj = state.click.position[1]
    if (checkNextPace(i, j, newState)) {
      delete newState.board[oldi][oldj]  //更新棋盘
      if (state.board[i][j]=='J0') { //游戏胜负判断
        newState.winner = 1
        newState.side = 0
      } else if (state.board[i][j]=='j0') {
        newState.winner = -1
        newState.side = 0
      }
      newState.board[i][j] = state.click.name
      newState.chessChange=[[i,j],[oldi,oldj],state.click.side]  //记录每一步棋子的变化
      newState.side = -newState.side  //换成对方下棋
      newState.history = [...state.history, newState.board.map(row=>[...row])]
      newState.paceHistory = [...newState.paceHistory, newState.chessChange.join()]
    }
    newState.nextPace = null
    newState.click = null
  } else {
    newState.click = null
  }
  return newState
}

//响应AI点击事件
export function AIClickAction(move: number[]|boolean) {
  return createAction<number[]|boolean>(`${PREFIX}/AIClick`)(move)
}

export function AIClick(state:gameState, action:Action<number[]|boolean>) {
  const newState = {...state}
  const move = action.payload
  if (move[0]===undefined) { //当机机对弈暂停时需要注意的问题，防止下一步棋为空
    return newState
  }
  const oldx = move[0] //获取棋子旧位置
  const oldy = move[1]
  const x = move[2]  //获取棋子新位置
  const y = move[3]
  const key = newState.board[oldy][oldx]  //获取AI要走的棋子
  if (state.board[y][x]=='j0') { //近方输
    newState.winner = -1
    newState.side = 0
  } else if (state.board[y][x]=='J0') { //远方输
    newState.winner = 1
    newState.side = 0
  }
  delete newState.board[oldy][oldx]  //更新棋盘
  newState.board[y][x] = key
  newState.chessChange=[[y,x],[oldy,oldx],state.side]  //记录每一步棋子的变化
  newState.side = -newState.side  //换成对方下棋
  newState.history = [...state.history, newState.board.map(row=>[...row])]
  newState.paceHistory = [...newState.paceHistory, newState.chessChange.join()]
  if (state.mode == 4||state.mode == 12) {//若是提示模式时需要回退模式到正常游戏模式
    newState.mode = state.mode / 4
  }
  return newState
}
