import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import "@testing-library/jest-dom/extend-expect";
import LandinPage from '../pages/LandinPage';


test("there should be a Header", ()=> {

    const {getByTestId} = render(<LandinPage/>)
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("A Simple Way to take care of your notes")
    
})

test("features section should exist", ()=> {
    const {getByTestId} = render(<LandinPage/>) 
    const featuresEl = getByTestId("features")

    expect(featuresEl.textContent).toBe("Features")

})


test("feature 1 should exists",()=> {
    const {getByTestId} = render(<LandinPage/>) 
    const featuresEl = getByTestId("feature1")

    expect(featuresEl.textContent).toBe("Create notebooks")

})


test("feature 2 should exists",()=> {
    const {getByTestId} = render(<LandinPage/>) 
    const featuresEl = getByTestId("feature2")

    expect(featuresEl.textContent).toBe("Create and edit notes by using markdown")

})

test("feature 3 should exists",()=> {
    const {getByTestId} = render(<LandinPage/>) 
    const featuresEl = getByTestId("feature3")

    expect(featuresEl.textContent).toBe("Delete your notes on demand")

})

test("feature 4 should exists",()=> {
    const {getByTestId} = render(<LandinPage/>) 
    const featuresEl = getByTestId("feature3")

    expect(featuresEl.textContent).toBe("Share your notes by using twitter")

})


test("has 'border-b-2' in the className ", ()=> {
    const {getByTestId, getAllByTestId} = render(<LandinPage/>) 
    const featuresEl = getAllByTestId("divider")
    featuresEl.forEach((el)=>{
        expect(el.classList.contains("border-b-2")).toBe(true)
    })
    



})

test("has 'border-r-2' in the className",()=>{
    const {getByTestId} = render(<LandinPage />)
    const horizontalEl = getByTestId('h-divider')
    expect(horizontalEl.classList.contains("border-r-2")).toBe(true)

})








