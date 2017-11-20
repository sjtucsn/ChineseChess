import * as React from 'react'
import * as Redux from 'redux'
import {Modal, Radio} from 'antd'
import {style} from 'typestyle'
import {onModelOKAction, onModelCancelAction} from '../../models/buttonClick'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

interface StartModelProps {
  visible: boolean
  dispatch: Redux.Dispatch<any>
}

//开始游戏时的相关选项
export interface gameOptions { 
  mode: number //游戏模式
  difficulty: number //游戏难度
  side: number  //出棋顺序
  color: string //本方颜色
}

//点击开始游戏后的对话框组件，用于设置游戏选项
export default class StartModel extends React.Component<StartModelProps, any> {
   
  options:gameOptions = {mode:1, difficulty:2, side:1, color:'r'}

  constructor(props) {
    super(props)
    this.state={confirmLoading:false} //异步关闭模态对话框
  }

  handleOKButton() {
    this.setState({confirmLoading:true})
    setTimeout(()=>{
      this.setState({confirmLoading:false})
      this.props.dispatch(onModelOKAction(this.options))
    },1000)
  }

  render() {
    const ButtonStyle = style({
      margin: '0 15px'
    })
    
    const RadioButtonStyle = {
      margin: '0 15px'
    }
    return (
      <Modal
        title={<h2><strong>游戏选项</strong></h2>}
        visible={this.props.visible}
        onOk={()=>{this.handleOKButton()}}
        onCancel={()=>{this.props.dispatch(onModelCancelAction())}}
        confirmLoading={this.state.confirmLoading}
      >
        <div style={{fontSize:16}}>
          对战模式：
          <RadioGroup onChange={(e)=>{this.options.mode= (e as any).target.value}} defaultValue={1} size='large'>
            <RadioButton value={1} style={RadioButtonStyle}>人机对战</RadioButton>
            <RadioButton value={2} style={RadioButtonStyle}>机机对战</RadioButton>
            <RadioButton value={3} style={RadioButtonStyle}>人人对战</RadioButton>
          </RadioGroup>
        </div>
        <div style={{fontSize:16,marginTop:16}}>
          游戏难度：
          <RadioGroup onChange={(e)=>{this.options.difficulty= (e as any).target.value}} defaultValue={2} size='large'>
            <RadioButton value={2} style={RadioButtonStyle}>菜鸟级</RadioButton>
            <RadioButton value={3} style={RadioButtonStyle}>入门级</RadioButton>
            <RadioButton value={4} style={RadioButtonStyle}>大师级</RadioButton>
          </RadioGroup>
        </div>
        <div style={{fontSize:16,marginTop:16}}>
          出棋顺序：
          <RadioGroup onChange={(e)=>{this.options.side= (e as any).target.value}} defaultValue={1} size='large'>
            <RadioButton value={1} style={RadioButtonStyle}>红方先行</RadioButton>
            <RadioButton value={-1} style={RadioButtonStyle}>黑方先行</RadioButton>
          </RadioGroup>
        </div>
        <div style={{fontSize:16,marginTop:16}}>
          本方颜色：
          <RadioGroup onChange={(e)=>{this.options.color= (e as any).target.value}} defaultValue={'r'} size='large'>
            <RadioButton value={'r'} style={RadioButtonStyle}>红棋</RadioButton>
            <RadioButton value={'b'} style={RadioButtonStyle}>黑棋</RadioButton>
          </RadioGroup>
        </div>
      </Modal>
    )
  }
}
