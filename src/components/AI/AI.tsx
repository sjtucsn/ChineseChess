import * as React from 'react'
import * as Redux from 'redux'
import {style} from 'typestyle'
import {nextPace, chessValue} from '../../models/chessInfo'
import {AIClickAction} from '../../models/chessClick'

interface AIProps {
  treeDepth: number  //AI搜索深度
  board: string[][]  //棋盘
  side: number  //阵营
  dispatch: Redux.Dispatch<any>
  mode: number //游戏模式
  paceHistory: string[] //处理长将问题
}

//用于点击棋子时提示可走位置的点组件
export default class AI extends React.Component<AIProps, any> {

  number: number //记录搜索的分枝数

  //评估当前棋盘分数，红方阵营为1，得分越大越有利，黑方阵营为-1，得分越小越有利（绝对值越大）
  evaluate(board:string[][], side:number) {
    let val=0
    board.forEach((row, i)=>{
      row.forEach((key, n)=>{
        if (key){
          val += chessValue[key[0]][i][n] * (key[0]>='a'?1:-1) //(key[0]>='a'?1:-1)代表棋子的阵营
        }
      })
    })
    val+=Math.round(Math.random() * 20 - 10)  //让AI走棋增加随机性
    this.number++
    return val*side //最后计算的时候都是按最大的算，因此黑方需要乘以-1
  }

  //获取本方所有可以走的棋子
  getAllMyChess(board:string[][], side:number) {
    let chessArray: Array<{x:number,y:number,key:string}> = [] //所有本方棋子的信息：坐标以及名称
    board.forEach((row, i)=>{
      row.forEach((key, n)=>{
        if (key && (key[0]>='a'?1:-1) == side){
          let chess = {x:n, y:i, key:key}
          chessArray.push(chess)
        }
      })
    })
    return chessArray
  }

  //获取本方所有棋子的所有走法
  getMoves(board:string[][], side:number) {
    let chessArray = this.getAllMyChess(board, side)
    let moves: [number, number, number, number, string][] = []
    chessArray.forEach((chess)=>{
      //获取该棋子的所有着法
      let nextMove:number[][] = nextPace[chess.key[0].toLowerCase()](chess.x, chess.y, board, side)
      //防止计算机长将操作
      const h = this.props.paceHistory
      const l = h.length
      if (l>=8 && chess.key!='j0'&& chess.key!='J0') {
        nextMove = nextMove.filter((pace)=>{
          if (h[l-2]==h[l-6] && [[pace[1], pace[0]], [chess.y, chess.x]].join()==h[l-4].substr(0,7)) {
            return false
          } else {
            return true
          }
        })
      }
      nextMove.forEach((move)=>{
        let x=chess.x
        let y=chess.y
        let newX=move[0]
        let newY=move[1]
        moves.push([x, y, newX, newY, chess.key])
      })
    })
    return moves;
  }

  //alpha beta剪枝算法，A代表alpha，B代表beta，搜索深度为depth，棋盘为board，side为阵营
  getAlphaBeta(A:number, B:number, depth:number, board:string[][] ,side:number) { 
    if (depth == 0) {
      return {value: this.evaluate(board , side)}; //局面评价函数; 
  　}
    let moves = this.getMoves(board, side); //生成全部走法; 
    let result:{oldx:number, oldy:number, key:string, x:number, y:number, value:number} = null //存储最佳算法
    for (let move of moves) {
      //走这个走法;
      let key = move[4]
      let oldX= move[0]
      let oldY= move[1]
      let newX= move[2]
      let newY= move[3]
      let clearKey = board[ newY ][ newX ]||""  //存储暂时被清理的棋
      board[ newY ][ newX ] = key
      delete board[ oldY ][ oldX ]
      
      if (clearKey=="j0"||clearKey=="J0") {//被吃老将
        //撤消这个走法
        board[ oldY ][ oldX ] = key
        delete board[ newY ][ newX ]
        board[ newY ][ newX ] = clearKey
        //返回8888作为游戏结束标志
        return {oldx:oldX, oldy:oldY, key:key, x:newX, y:newY, value:8888}
      } else { 
        let val = -this.getAlphaBeta(-B, -A, depth - 1, board, -side).value //递归调用alpha beta剪枝算法
        //撤消这个走法;　 
        board[ oldY ][ oldX ] = key
        delete board[ newY ][ newX ]
        if (clearKey){
          board[ newY ][ newX ] = clearKey
        }
        //判断结果是否大于等于beta，是则跳出循环
        if (val >= B) { 
          return {oldx:oldX, oldy:oldY, key:key, x:newX, y:newY, value:B}
        } 
        //判断结果是否大于alpha，是则更新最佳走法
        if (val > A) { 
        	A = val 
          result={oldx:oldX, oldy:oldY, key:key, x:newX, y:newY, value:A}
        } 
      } 
    } 
    //如果递归下来都没有找到好的走法，返回alpha的值，不影响其后计算
    if (!result){
      return {value:A}
    }
    return result; 
  }

  render() {
    return null
  }

  //克隆数组，避免直接在this.props.board上操作数组
  arrayClone(board:string[][]) {
    return board.map((row)=>[...row])
  }

  //人工智能初始化
  init(depth:number) {
    if (depth == 0) {
      console.error('搜索深度不能为0！')
      return false
    }
    let initTime = new Date().getTime();
    this.number = 0
    //返回计算生成的最佳着法
    let result = this.getAlphaBeta(-9999 ,9999, depth, this.arrayClone(this.props.board), this.props.side) as {oldx:number, oldy:number, key:string, x:number, y:number, value:number}
    let chess = result.key;
    var nowTime= new Date().getTime();
    const log ='AI搜索结果：最佳着法：'+
                    [result.oldx, result.oldy, result.x, result.y]+
                    ' 搜索深度：'+depth+'搜索分支：'+
                    this.number+'个 最佳着法评估：'+
                    result.value+'分'+
                    ' 搜索用时：'+
                    (nowTime-initTime)+'毫秒'
    console.log(log)
    return [result.oldx, result.oldy, result.x, result.y]
  }

  componentDidUpdate() {
    switch (this.props.mode) { //根据游戏模式判断AI是否工作
      case 1: if (this.props.side == -1) { //人机对战模式
                setTimeout(()=>{
                  let result = this.init(this.props.treeDepth)
                  this.props.dispatch(AIClickAction(result))
                }, 500)
              } 
              break
      case 2: if (this.props.side == -1) { //机机对战模式
                setTimeout(()=>{
                  let result = this.init(this.props.treeDepth)
                  this.props.dispatch(AIClickAction(result))
                }, 500)
              } else if (this.props.side == 1) {
                setTimeout(()=>{
                  let result = this.init(this.props.treeDepth)
                  this.props.dispatch(AIClickAction(result))
                }, 500)
              }
              break
      case 3: break //人人对战模式
      default: if (this.props.side == -1) { //人机或人人时的提示模式
                setTimeout(()=>{
                  let result = this.init(this.props.treeDepth)
                  this.props.dispatch(AIClickAction(result))
                }, 500)
              } else if (this.props.side == 1) {
                setTimeout(()=>{
                  let result = this.init(this.props.treeDepth)
                  this.props.dispatch(AIClickAction(result))
                }, 500)
              }
              break
    }
  }
}
