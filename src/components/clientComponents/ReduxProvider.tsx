"use client"
import { store } from '@/Redux/store/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

export default function ReduxProvider({children}:{children : React.ReactNode} ) {
    return <Provider store={store} > {children} </Provider>
}
