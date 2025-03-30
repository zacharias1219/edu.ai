"use client"
import { BlurFade } from '@/components/magicui/blur-fade';
import { Button } from '@/components/ui/button';
import { ExpertList } from '@/services/Options';
import { useUser } from '@stackframe/stack'
import React from 'react'

function FeatureAssistance() {
  const user = useUser();
  return (
    <div>
      <div>
        <div className='flex justify-between items-center'>
          <h2 className='font-medium text-gray-500'>My Workspace</h2>
          <h2 className='text-3xl font-bold'>Welcome back, {user?.displayName}</h2>
        </div>
        <Button>Profile</Button>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-10mt-10'>
        {ExpertList.map((expert, index) => (
          <BlurFade key={expert.icon} delay={0.25 + index * 0.1} inView>
            <div key={index} className='p-3 bg-secondary rounded-3xl flex flex-col justify-between items-center border-b border-gray-100'>
              <Image src={expert.icon} alt={expert.name} width={150} height={150} className="w-[70px] h-[70px] hover:rotate-12 cursor-pointer transition-all"/>
              <h2 className='mt-2 '>{expert.name}</h2>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  )
}

export default FeatureAssistance