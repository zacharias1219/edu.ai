import React from 'react'
import FeatureAssistance from './_components/FeatureAssistance'
import History from './_components/History'
import Feedback from './_components/Feedback'

function Dashboard() {
  return (
    <div>
        <FeatureAssistance />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            <History />
            <Feedback />
        </div>
    </div>
  )
}

export default Dashboard