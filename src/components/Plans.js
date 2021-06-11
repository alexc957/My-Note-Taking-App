import React from 'react'
import Card from './Card'

const freePlan = [
    '15 notebooks per user',
    '30 notes per notebook',
    '0$/Month'
]

const premiumplans = [
    'unlimited notebooks per user',
    'unlimited notes per notebook',
    '5$/Month'
]
export default function Plans() {
    return (
        <section className="mb-8 flex flex-row justify-center">
            
            <Card  plan="Free" features={freePlan}/>
            <Card  plan="Premium" features={premiumplans}/>
            
        </section>
    )
}
