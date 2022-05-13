import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import {
  createDecrAction,
  createIncrAction,
  createIncrAsyncAction,
} from '../../redux/count_action'

// 函数返回值作为状态传递给了UI组件
function mapStateToProps(state) {
  return { sum: state }
}

// 函数返回值作为操作状态的方法传递给了UI组件
function mapDispatchToProps(dispatch) {
  return {
    add: (data) => {
      dispatch(createIncrAction(data))
    },
    sub: (data) => {
      dispatch(createDecrAction(data))
    },
    addAsync: (data, time) => {
      dispatch(createIncrAsyncAction(data, time))
    },
  }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

export default CountContainer
