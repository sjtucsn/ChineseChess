import * as React from 'react'
import {Button} from 'antd'
import { connect } from 'dva'

class Hello extends React.Component<any, any> {

  render() {
    return (
      <div>
        <h1>hello</h1>
        <Button>click</Button>
      </div>
    )
  }
}

export default connect()(Hello)
