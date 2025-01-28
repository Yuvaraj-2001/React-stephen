import {useState, useEffect} from 'react';

function BaseAccordian(){
    const array = [{
        title: 'title 1',
        content: 'content 1'
    }, {
        title: 'title 1',
        content: 'content 1'
    }];
    const [index, setIndex] = useState(-1);
    const [name, setName] = useState('yuvaraj');

    useEffect(() => {
        console.log('name', name);
        console.log('index', index);
    }, [name, index]);

    const handleClick = (i) => {
        if(index === i){
            setIndex(-1);
            setName('hello');
            console.log('name', name);
            console.log('index updated', index);
            return;
        }
        setIndex(i);
    }
    return (
        <div>
            {array.map((item, i) => (
                <div key={i}>
                    <button onClick={() => handleClick(i)}>{item.title}</button>
                    {index === i && <p>{item.content} {name}</p>}
                </div>
            ))}
        </div>
    )
}

export default BaseAccordian;