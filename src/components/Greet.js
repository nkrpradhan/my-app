import React from 'react'

const Greet = (props)=>
{
    console.log('greet comp')
    return <div>hello greet {props.test}</div>
}

export default Greet;