import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from '@/components/ui/textarea';
import { CoachingExpert } from '@/services/Options';
import { View } from 'lucide-react';

function UserInputDialog({children, coachingOption}) {
    const [selectedExpert, setSelectedExpert] = React.useState();

    return (
    <Dialog>
        <DialogTrigger>
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{coachingOption.name}</DialogTitle>
                <DialogDescription asChild>
                    <div className='mt-3'>
                        <h2 className='text-black'>Enter a topic to master yout skills in {coachingOption.name}</h2>
                        <Textarea placeholder='Enter a topic' className="mt-2"/>
                        <div className='grid grid-col-3md:grid-col-5 gap-6 mt-3'>
                            {CoachingExpert.map((expert, index) => (
                                <div key={index} onCLick={() => setSelectedExpert(expert.name)}>
                                    <Image src={expert.avatar} alt={expert.name} width={100} height={100} className={`rounded-2xl h-[80px] w-[80px] object-cover hover:scale-105 transition-all cursor-pointer ${selectedExpert==expert.name&&'border-2'} p-1 rounded-2xl`}/>
                                    <h2 className='text-center '>{expert.name}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default UserInputDialog