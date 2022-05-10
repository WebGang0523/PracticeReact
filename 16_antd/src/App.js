import { Button, DatePicker, Space } from 'antd'
import 'antd/dist/antd.min.css'
import { StepBackwardOutlined } from '@ant-design/icons'

function App() {
  function onChange(date, dateString) {
    console.log(date, dateString)
  }

  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <StepBackwardOutlined />
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
    </>
  )
}

export default App
