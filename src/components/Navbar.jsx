/* eslint-disable no-unused-vars */
import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'

export const Navbar = () => {
    const count = useSelector(
        (state) => 
            state
            .counter
            .value
        )

    return (
        <div> I am in navbar and count is {count}</div>
    )
}
