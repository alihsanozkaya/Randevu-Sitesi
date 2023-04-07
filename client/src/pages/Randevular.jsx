import React, {useContext} from 'react'
import Layout from '../components/Layout'
import { GetContext } from '../context/GetContext'

import Kart from '../components/Kart';

const Randevular = () => {
  const {veri, loading} = useContext(GetContext)
  return (
    <div>
      <Layout>
        {!loading ? veri.map((ver, i) => (
          <Kart key={i} ver={ver}/>
        )): ""}
      </Layout>
    </div>
  )
}

export default Randevular