import * as React from 'react'
import * as Redux from 'redux'
import {Button} from 'antd'
import {style} from 'typestyle'
import {startClickAction, changeSideAction, toggleAIAction, clearChessAction, showHintAction, regretMoveAction} from '../../models/buttonClick'
import StartModel from './StartModel'

interface ButtonGroupProps {
  mode: number //游戏模式
  side: number //当前下棋一方
  showModel: boolean  //是否显示模态对话框
  history: string[][][]
  dispatch: Redux.Dispatch<any>
}

//与游戏相关的按钮组件
export default class ButtonGroup extends React.Component<ButtonGroupProps, any> {

  renderThirdButton() {
    const ButtonStyle = style({
      margin: '0 15px'
    })
    if (this.props.mode == 2) {
      //模式为2代表人机对战，side的绝对值为2代表机机对战的暂停状态
      return <Button size='large' onClick={()=>{this.props.dispatch(toggleAIAction())}} className={ButtonStyle} disabled={(this.props.side==0)}>{Math.abs(this.props.side)==2?'恢复':'暂停'}</Button>
    } else {
      return <Button size='large' className={ButtonStyle} disabled={this.props.side==0||this.props.history.length==1} onClick={()=>{this.props.dispatch(regretMoveAction())}}>悔棋</Button>
    }
  }

  render() {
    const ButtonStyle = style({
      margin: '0 15px'
    })
    return (
      <div>
        <div style={{height:'100%', width:'100%'}}>
          <Button type='primary' size='large' className={ButtonStyle} disabled={(this.props.mode==2)&&(Math.abs(this.props.side)==1)} onClick={()=>{this.props.dispatch(startClickAction())}}>开始游戏</Button>
          <Button size='large' className={ButtonStyle} disabled={(this.props.mode==2)||(this.props.side==0)} onClick={()=>{this.props.dispatch(showHintAction())}}>提示</Button>
          {this.renderThirdButton()}
          <Button size='large' className={ButtonStyle} disabled={(this.props.side==0)||(this.props.mode==2)&&(Math.abs(this.props.side)==1)} onClick={()=>{this.props.dispatch(changeSideAction())}}>换边</Button>
          <Button size='large' className={ButtonStyle} disabled={(this.props.side==0)||(this.props.mode==2)} onClick={()=>{this.props.dispatch(clearChessAction())}}>让子</Button>
        </div>
        <StartModel visible={this.props.showModel} dispatch={this.props.dispatch} />
      </div>
    )
  }
}
