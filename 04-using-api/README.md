All we have learnt is how to handle the object in state.

1. State Updates
`const [colors, setColors] = useState(['red', 'green', 'blue']);

const changeColor = () => {
  // Bad!  This directly changes the 'colors' state!
  colors[0] = 'orange';

  setColors(colors);
};`


2. Adding Elements to an Array
`const [colors, setColors] = useState(['red', 'orange']);

const addColor = (color) => {
    const updateColor = [color, ...colors]; // if reverse [...colors, color];
    setColors(updateColor);
}`

3. Addding into specific index
const [colors, setColors] = useState(['red', 'green']);
const addColorAtIndex = (color, index) => {
    const updateColor = [
    ...colors.slice(0, index),
    color,
    ...colors.slice(index colors.length)
    ]
}

4. Removing Elements form array
const [colors, setColors] = useState(['red', 'green', 'blue']);
const removeColorAtIndex = (color, index) => {
    // arr.splice(index,1);
    const updateColor = colors.filter((c) => {
        return c.id !== color.id;
    });
}

5. Changing Elements
`const [books, setBooks] = useState([
  { id: 1, title: 'Sense and Sensibility' },
  { id: 2, title: 'Oliver Twist' },
]);

const changeTitleById = (id, title) => {
    const updatedBooks = books.map((book) =>{
        if(book.id === id){
            return { ...book, title: newTitle };
        }
        return book;
    })
};`
