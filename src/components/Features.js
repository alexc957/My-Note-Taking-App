import React from 'react'
import ItemFeature from './ItemFeature'

export default function Features() {
    return (
        <section className="mb-2">
            <h3 data-testid="features" className="text-center ">Features</h3>
            <div className="flex flex-row justify-center mt-8 pl-0 ml-0">
                <div className="mr-2 flex flex-col">   
                    <ItemFeature  description="Create notebooks" position="left"/>
                    <div className="w-40 h-16"></div>
                    <ItemFeature  description="Delete your notes on demand" position="left"/>
                </div>
                <div data-testid="h-divider" className="border-r-2 h-70 p-0 m-0"></div>
                <div className="ml-2 flex flex-col pl-0 ml-0">
                    <div className="w-40 h-16"></div>
                    <ItemFeature  description="Create and edit notes by using markdown"  position="right"/>
                    <div className="w-40 h-16"></div>
                    <ItemFeature  description="Share your notes by using twitter"  position="right"/>
                

                </div>

            </div>
        </section>
    )
}





/* Line 11 

position: absolute;
width: 70px;
height: 0px;
left: 364px;
top: 280px;

border: 1px solid #000000;

*/ 