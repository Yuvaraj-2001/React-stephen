import {useState} from 'react';

function BaseAccordian(){
    const array = [{
        title: 'title 1',
        content: 'content 1'
    }, {
        title: 'title 1',
        content: 'content 1'
    }];
    const [index, setIndex] = useState(-1);

    const handleClick = (i) => {
        if(index === i){
            setIndex(-1);
            return;
        }
        setIndex(i);
    }
    return (
        <div>
            {array.map((item, i) => (
                <div key={i}>
                    <button onClick={() => handleClick(i)}>{item.title}</button>
                    {index === i && <p>{item.content}</p>}
                </div>
            ))}
        </div>
    )
}

export default BaseAccordian;