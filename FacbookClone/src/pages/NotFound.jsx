import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function NotFound() {
    const err = useRouteError();
    console.log(err);


    return (
        <h1>NotFound Page</h1>
    )
}