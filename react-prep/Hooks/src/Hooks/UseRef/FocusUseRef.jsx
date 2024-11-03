import React, { useEffect, useRef } from 'react';

const FocusUseRef = () => {
    const username = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        username.current.focus();
    }, []);

    return (
        <div>
            <input type='text' ref={username} placeholder="Username" />
            <input type='password' ref={password} placeholder="Password" />
        </div>
    );
}

export default FocusUseRef;
