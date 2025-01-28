import { useState, useRef } from 'react';

function BaseDropdown({ options, update, obj }) {
  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef(null);

  const handleOptionClick = (o) => {
    setTimeout(() => {
        setOpen(false);
        debugger
        inputRef.current.blur(); 

    }, 100);
    update(o);

  };


  const renderedItems = options.map((o) => (
    <div
        className="hover:bg-slate-500"
      key={o.label}
      onMouseDown={(e) => e.preventDefault()} // Prevent input losing focus
      onClick={() => handleOptionClick(o)}
    >
      {o.label}
    </div>
  ));

  const closeDropdown = (evt) => {
    setTimeout(() => setOpen(false), 100);
  };

  return (
    <div>
      <input
       ref={inputRef} 
        className="border border-blue-300"
        placeholder="select any option"
        type="text"
        readOnly
        value={obj && obj.label ? obj.label : ''}
        onFocus={() => setOpen(true)}
        onBlur={closeDropdown} // Close dropdown when input loses focus
      />
      {isOpen && renderedItems}
    </div>
  );
}

export default BaseDropdown;
