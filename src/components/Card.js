import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({plan, features}) {
    return (
        <div className="w-56 h-64 p-8 border-2 divide-opacity-10 rounded-lg m-4 flex flex-col justify-between items-center">
            <p className="text-center" data-testid={plan}>{plan}</p>
            <ul>
                {features.map((feature,i)=> <li key={i} data-testid={plan+"Feature"} className="text-sm w-54 p-1">{feature}</li>)}
            </ul>

            <button className="mt-4 w-16 bg-blue-dark border border-2 rounded text-primary text-md"> <a href="/signup">SignUp</a></button>
            
            
        </div>
    )
}
