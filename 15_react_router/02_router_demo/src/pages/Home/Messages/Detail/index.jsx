import { useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
  // const params = useParams()
  const [searchParams] = useSearchParams()
  console.log(searchParams)
  return (
    <ul>
      {/* <li>ID:{params.id}</li> */}
      <li>ID:{searchParams.get('id')}</li>
    </ul>
  )
}
