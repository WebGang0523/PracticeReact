import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import {
  createDecrAction,
  createIncrAction,
  createIncrAsyncAction,
} from '../../redux/count_action'

export default connect((state) => ({ sum: state }), {
  add: createIncrAction,
  sub: createDecrAction,
  addAsync: createIncrAsyncAction,
})(CountUI)
