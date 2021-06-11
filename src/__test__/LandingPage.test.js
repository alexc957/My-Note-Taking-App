import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {firebase} from '../firebase/index'
import "@testing-library/jest-dom/extend-expect";
import Login from '../pages/Login';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import FirebaseContext from '../context/firebase';
import { MemoryRouter } from 'react-router';


import App from '../App';


test("there should be a Header", ()=> {
    

    const {getByTestId} = render(<Provider store={store}><App/></Provider>)
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("A Simple Way to take care of your notes")
    
})

test("features section should exist", ()=> {
    const {getByTestId} = render(<Provider store={store}><App/></Provider>) 
    const featuresEl = getByTestId("features")

    expect(featuresEl.textContent).toBe("Features")

})


test("feature 1 should exists",()=> {
    const {getByTestId} = render(<Provider store={store}><App/></Provider>) 
    const featuresEl = getByTestId("feature1")

    expect(featuresEl.textContent).toBe("Create notebooks")

})


test("feature 2 should exists",()=> {
    const {getByTestId} = render(<Provider store={store}><App/></Provider>) 
    const featuresEl = getByTestId("feature3")

    expect(featuresEl.textContent).toBe("Create and edit notes by using markdown")

})

test("feature 3 should exists",()=> {
    const {getByTestId} = render(<Provider store={store}><App/></Provider>) 
    const featuresEl = getByTestId("feature2")

    expect(featuresEl.textContent).toBe("Delete your notes on demand")

})

test("feature 4 should exists",()=> {
    const {getByTestId} = render(<Provider store={store}><App/></Provider>) 
    const featuresEl = getByTestId("feature4")

    expect(featuresEl.textContent).toBe("Share your notes by using twitter")

})


test("has 'border-b-2' in the className ", ()=> {
    const {getByTestId, getAllByTestId} = render(<Provider store={store}><App/></Provider>) 
    const featuresEl = getAllByTestId("divider")
    featuresEl.forEach((el)=>{
        expect(el.classList.contains("border-b-2")).toBe(true)
    })
    



})


test("has 'border-r-2' in the className",()=>{
    const {getByTestId} = render(<Provider store={store}><App/></Provider>)
    const horizontalEl = getByTestId('h-divider')
    expect(horizontalEl.classList.contains("border-r-2")).toBe(true)

})

test('has plans text', () => {
    const {getByTestId} = render(<Provider store={store}><App/></Provider>)
    const plansEl = getByTestId('plans')

    expect(plansEl.textContent).toBe('Plans')
    
})


test('should exist a Free section', () => {
    const {getByTestId,getAllByTestId} = render(<Provider store={store}><App/></Provider>)
    const freeEl = getByTestId('Free')
    const plans = [
        '15 notebooks per user',
        '30 notes per notebook',
        '0$/Month'
    ]

    const freeFeatures =    getAllByTestId('FreeFeature')

    expect(freeEl.textContent).toBe('Free')
    freeFeatures.forEach((feature,i)=>{
        expect(feature.textContent).toBe(plans[i])
    })
    
})


test('should exist a premium section', () => {
    const {getByTestId,getAllByTestId} = render(<Provider store={store}><App/></Provider>)
    const freeEl = getByTestId('Premium')
    const plans = [
        'unlimited notebooks per user',
        'unlimited notes per notebook',
        '5$/Month'
    ]

    const freeFeatures =    getAllByTestId('PremiumFeature')

    expect(freeEl.textContent).toBe('Premium')
    freeFeatures.forEach((feature,i)=>{
        expect(feature.textContent).toBe(plans[i])
    })
    
})

test('should navigate to SignUp page', () => {
    const {getByTestId,getAllByTestId} = render(
        <Provider store={store}> <MemoryRouter>
        <App/>
        </MemoryRouter> </Provider>)
    const buttonEl = screen.getByTestId("button-Free")
    fireEvent.click(buttonEl)

    const account = screen.getByTestId('title')


 
    expect(account.textContent).toBe("Create an Account")

        
})















