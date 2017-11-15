import * as React from 'react'
import {Button} from 'antd'
import { connect } from 'dva'
import {style} from 'typestyle'

import Chess from '../components/chess/Chess'

declare function require(url:string)
const bg = require('../assets/style/bg.png')
const initMap = [
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

class ChessBoard extends React.Component<any, any> {

  render() {
    const boxStyle = style({
      backgroundImage: `url(${bg})`,
      width: '507px',
      height: '567px',
      margin: 'auto',
      position: 'relative'
    })
    return (
      <div className={boxStyle}>
        {initMap.map((row,i) => {
          return row.map((item,j) => {
            return <Chess name={item} 
                          type={item[0].toLowerCase()} 
                          side={item[0]>='a'?1:-1} 
                          position={[i,j]} />
          })
        })}
      </div>
    )
  }
}

export default connect()(ChessBoard)
