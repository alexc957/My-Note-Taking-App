import React from 'react'
import ItemFeature from './ItemFeature'

const icons = [
    'https://image.flaticon.com/icons/png/512/3066/3066171.png',
    'https://image.flaticon.com/icons/png/512/3221/3221897.png',
    'https://image.flaticon.com/icons/png/512/880/880906.png',
    'https://image.flaticon.com/icons/png/512/246/246152.png'
    

]

export default function Features() {
    return (
        <section className="mb-8">
            <h3 data-testid="features" className="text-center ">Features</h3>
            <div className="flex flex-row justify-center mt-8 p-0 m-0">
                <div className="mr-2 flex flex-col p-0 m-0 content-center">   
                    <ItemFeature  description="Create notebooks" position="left" testid="feature1" imgSrc = {icons[0]}/>
                    <div className="w-40 h-16"></div>
                    <ItemFeature  description="Delete your notes on demand" position="left" testid="feature2" imgSrc = {icons[1]} />
                </div>
                <div data-testid="h-divider" className="border-r-2 h-70 p-0 m-0"></div>
                <div className="ml-2 flex flex-col p-0 m-0">
                    <div className="w-40 h-16"></div>
                    <ItemFeature  description="Create and edit notes by using markdown"  position="right" testid="feature3" imgSrc = {icons[2]}/>
                    <div className="w-40 h-16"></div>
                    <ItemFeature  description="Share your notes by using twitter"  position="right" testid="feature4" imgSrc = {icons[3]}/>
                

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