import React from 'react';
import Age from '../Age';

const Person = ({name, age}) => {
    return (
        <div>
            {name}
            <Age age = {age}></Age>
        </div>
    );
};

export default Person;