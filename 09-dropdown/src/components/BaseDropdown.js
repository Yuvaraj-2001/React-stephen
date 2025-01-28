import {useState} from 'react';
function BaseDropdown({options, update, obj}){
    const [isOpen, setOpen] = useState(false);
    const handleOptionClick = (o) => {
        console.log(o);
        debugger
        setTimeout(() => setOpen(false));
 
    };

    const renderedItems = options.map((o) => <div onClick={()=>handleOptionClick(o)} >{o.label}</div>)

  
    const closeDropdown = (evt) => {
        debugger
        setTimeout(() => setOpen(false), 1000);
    }
    return (
        <div>
            {/*   */}
           <input className="border border-blue-300" placeholder="select any option" type="text" readOnly value={obj && obj.label ? obj.label : ''} onFocus={()=> setOpen(true)}  onBlur={closeDropdown }/>
            {isOpen && renderedItems}
        </div>
    )


}

export default BaseDropdown;