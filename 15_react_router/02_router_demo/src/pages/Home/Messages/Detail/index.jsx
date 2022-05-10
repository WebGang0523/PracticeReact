import { useParams, useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
  const params = useParams()
  // const [searchParams] = useSearchParams()
  // const location = useLocation()
  // const { id } = location.state
  return (
    <ul>
      <li>ID:{params.id}</li>
      {/* <li>ID:{searchParams.get('id')}</li> */}
      {/* <li>ID:{id}</li> */}
    </ul>
  )
}
