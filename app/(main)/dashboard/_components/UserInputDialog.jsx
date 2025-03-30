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

function UserInputDialog({children, coachingOption}) {
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
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default UserInputDialog