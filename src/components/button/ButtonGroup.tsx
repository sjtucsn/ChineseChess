import * as React from 'react'
import * as Redux from 'redux'
import {Button} from 'antd'
import {style} from 'typestyle'
import {startClickAction, changeSideAction} from '../../models/buttonClick'

interface ButtonGroupProps {
  dispatch: Redux.Dispatch<any>
}

//与游戏相关的按钮组件
export default class ButtonGroup extends React.Component<ButtonGroupProps, any> {

  render() {
    const ButtonStyle = style({
      margin: '0 15px'
    })
    return (
      <div style={{height:'100%', width:'100%'}}>
        <Button type='primary' size='large' className={ButtonStyle} onClick={()=>{this.props.dispatch(startClickAction())}}>开始游戏</Button>
        <Button size='large' className={ButtonStyle}>提示</Button>
        <Button size='large' className={ButtonStyle}>悔棋</Button>
        <Button size='large' className={ButtonStyle} onClick={()=>{this.props.dispatch(changeSideAction())}}>换边</Button>
        <Button size='large' className={ButtonStyle}>让子</Button>
      </div>
    )
  }
}
