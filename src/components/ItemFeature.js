import React from 'react'

export default function ItemFeature({ description, position }) {
    return (
    <div data-testid="divider" className="relative top-4 border-b-2 w-40 h-16 pl-0 ml-0">
        <p className={`absolute -${position}-8 top-0 -bottom-2 text-center w-40`}>{description}</p>
     </div>
    )
}
