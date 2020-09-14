import React, { useState } from 'react';

const Counter = () => {


    const initialCount = 0;
    const initialUserInfo = { firstName: '2', secondName: '3' }

    // State is only the num or a string;
    const [count, setCount] = useState(initialCount)

    // State is object;
    // userInfo is only used to display data...
    const [userInfo, setName] = useState(initialUserInfo)


    // How to handle the state with the value of arry;
    const [item, setItem] = useState([])

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
            <p>--------------------</p>

            <h1>display the iTEM</h1>
            <button onClick={() => setItem([...item, 1])}>Apend the arry</button>
            <ul>
                {
                    item.map(element =>
                        <li>{element}</li>
                    )
                }
            </ul>




        </div>
    );
}

export default Counter;