import * as Redux from 'redux'
import {ChessProps} from '../components/chess/Chess'
import {chessClick, boardClick} from './chessClick'

export const PREFIX = 'chess'

export interface gameState {
  click: ChessProps  //目前点击的棋子
  board: string[][]  //当前棋盘状态
  dispatch: Redux.Dispatch<any>
}

export const initBoard = [
	['C0','M0','X0','S0','J0','S1','X1','M1','C1'],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,'P0',    ,    ,    ,    ,    ,'P1',    ],
	['Z0',    ,'Z1',    ,'Z2',    ,'Z3',    ,'Z4'],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	['z0',    ,'z1',    ,'z2',    ,'z3',    ,'z4'],
	[    ,'p0',    ,    ,    ,    ,    ,'p1',    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	['c0','m0','x0','s0','j0','s1','x1','m1','c1']
];

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
