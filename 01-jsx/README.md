
Section 2 : Video 11
- index.js file is the fist file that executes
- React is used for creating elements and components. While ReactDom is created 
for to display into the browser
- we will just pass 'root.ReactDom(`element`)' to take control into react.

Section 2: Video 12
JSX - <h1>hi</h1> == React.createElement("h1", null, "Hi"); 
https://babeljs.io/repl - select React 

Section 2: Video 13 : Printing JavaScript Variables in JSX
let message = "BYE";
{message}
- string, number, [1,2,3] - Okay it shows for array it joins
- boolean, object, null, boolean - it throws error for object, it won't render others

section 2: Video 14 : Shorthand JS expression
you can direactly call methods in curly brackets

section 2: video 16 : Component layout
<p>I am {name} and my age is {age}</p>

5 Rules to Html propps to JSX
    - camelCase | maxlength maxLength | we get warning
    - for number we wil have to provide like in curly brackets maxLength={5} | sill works but thows error
    - <input spellCheck/> === <input spellCheck={true}/>
    - <div class="Iam"></div> ---> should be <div className="Iam"></div>
    - Styles: <a style="text-decoration:none;"></a> --> <a style={{textDecoration: 'none'}} 
      It should be objects

section 2 : video 21 : Extracting Components
    - Component -> starting Capital Letter, function App(){}


section 2: es6 modules
    - every module have their own state, to share we must export it
    - Named Export 
    - ./ App it's file, 'react' -> it searches in node_modules


// ALRIGHT - for JSX cheat code
https://jsx-notes.vercel.app/
