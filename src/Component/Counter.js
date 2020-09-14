import React, { useState } from 'react';

const Counter = () => {


    const initialCount = 0;
    const initialUserInfo = { firstName: '2', secondName: '3' }

    // State is only the num or a string;
    const [count, setCount] = useState(initialCount)

    // State is object;
    // userInfo is only used to display data...
    const [userInfo, setName] = useState(initialUserInfo)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Decre</button>
            <button onClick={() => setCount(count - 1)}>Incre</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>

            <p>--------------------</p>
            <h1>display the firstname: {userInfo.firstName}</h1>
            <input type="text" value={userInfo.firstName} onChange={
                e => {
                    console.log(e.target.value);
                    setName({ ...userInfo, firstName: e.target.value })
                }
            } />

            <h1>display the secondName: {userInfo.secondName}</h1>
            <input type="text" value={userInfo.secondName} onChange={
                e => {
                    console.log(e.target.value);
                    setName({ ...userInfo, secondName: e.target.value })
                }
            } />


        </div>
    );
}

export default Counter;