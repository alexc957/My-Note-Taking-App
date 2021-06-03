import React from 'react'

export default function ItemFeature({ description, position, testid, imgSrc }) {
    return (
    <div data-testid="divider" className="relative top-4 border-b-2 w-80 h-16 p-0 m-0">
        <div className={`absolute -${position}-8 top-0 -bottom-2 w-full flex flex-row${position=='left'? '-reverse':''} justify-between`} >
            
            <p className="text-sm" data-testid={testid}>{description}</p> <img src={imgSrc} className="h-16 mb-4 pb-4"/>
           
        </div>
       
     </div>
    )
}
