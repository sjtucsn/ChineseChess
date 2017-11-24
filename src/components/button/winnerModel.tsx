import * as React from 'react'
import * as Redux from 'redux'
import {Modal, Button} from 'antd'
import {startClickAction, onGameOverAction} from '../../models/buttonClick'

interface WinnerModelProps {
  mode: number //游戏模式
  color: string //本方棋子颜色
  winner: number  //胜者，1代表玩家胜，－1代表电脑胜
  dispatch: Redux.Dispatch<any>
}

//游戏结束后的对话框组件，提示游戏胜负
export default class WinnerModel extends React.Component<WinnerModelProps, any> {

  renderText() {
    if (this.props.mode == 1) {
      return this.props.winner==1?'恭喜您战胜了电脑，尝试挑战更高级别的水平吧！':'抱歉，您输啦，再回去修炼修炼，咱们下次再战'
    } else {
      let result:string 
      if (this.props.winner==1) { 
        result = this.props.color=='r'?'红':'黑'  //本方为红且本方获胜，返回红
      } else if (this.props.winner==-1) {
        result = this.props.color=='r'?'黑':'红'  //本方为红但本方失败，返回黑
      } 
      return `游戏结果：${result}方获胜！`
    }
  }

  render() {
    return (
      <Modal
        title={<h2><strong>游戏结果</strong></h2>}
        visible={Math.abs(this.props.winner)==1}
        onCancel={()=>{this.props.dispatch(onGameOverAction())}}
        footer={[
          <Button key='1' size="large" onClick={()=>{this.props.dispatch(startClickAction())}}>重新开始</Button>,
          <Button key='2' type="primary" size="large" onClick={()=>{this.props.dispatch(onGameOverAction())}}>
            确定
          </Button>,
        ]}
      >
        {this.renderText()}
      </Modal>
    )
  }
}
