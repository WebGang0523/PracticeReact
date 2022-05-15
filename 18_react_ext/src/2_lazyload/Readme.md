路由组件按需加载

import {lazy} from 'react'

const Home = lazy(()=>{return import('./Home')})

<Suspense fallback={}>
</Suspense>
