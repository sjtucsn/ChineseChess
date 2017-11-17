import * as Redux from 'redux'
import {createAction, Action} from 'redux-actions'
import {PREFIX, gameState} from './index'

//响应游戏开始事件
export function startClickAction() { 
  return createAction(`${PREFIX}/startClick`)()
}

export function startClick(state:gameState, action:Action<null>) {
  const newState = {...state}
  newState.side = -1
  return newState
}

//响应对局时换边事件
export function changeSideAction() { 
  return createAction(`${PREFIX}/changeSide`)()
}

export function changeSide(state:gameState, action:Action<null>) {
  const newState = {...state}
  newState.board = newState.board.map((row)=>row).reverse() //先将棋子倒置
  //改变棋子名称，注意：人控制的一方永远阵营为1，因此永远是小写字母的棋子，不论棋子颜色
  newState.board = newState.board.map((row)=>{
    return row.map((key)=>{
      let newKey:string[]=[]
      newKey[0] = key[0]>='a'?key[0].toUpperCase():key[0].toLowerCase()
      newKey[1] = key[1]
      return newKey.join('')
    })
  })
  newState.color = state.color=='r'?'b':'r'  //本方棋子的颜色
  newState.side = -state.side  //换边后应让对手先行一步棋
  const c = state.chessChange  //处理上一步棋的背景框变化
  if (c) {
    newState.chessChange = [[9-c[0][0], c[0][1]], [9-c[1][0], c[1][1]], -c[2]]
  }
  return newState
}
