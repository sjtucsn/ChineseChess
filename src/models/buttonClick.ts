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
