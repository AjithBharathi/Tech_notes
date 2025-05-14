const react = [
  {
    topic: 'WHAT IS REACT ?',
    points: [
      'React is a JavaScript library developed by Facebook for building fast, interactive user interfaces.',
      `It is component-based, meaning UIs are broken down into reusable pieces, and uses a virtual DOM
  for efficient rendering.`,
    ],
  },
  {
    topic: 'REACT ESSENTIALS / CORE CONCEPTS',
    points: [
      'components',
      'jsx (javascript XML)',
      'props',
      'event handling',
      'state',
      'lists and keys',
      'conditional rendering',
      'styling',
      'hooks',
      'custom hooks',
      'forms',
      'portals and refs',
      'handling side effects',
      'router',
      'optimization',
      'state management libraries - Redux',
      'SSG/SSR - server side rendering (next.js)',
      'hr::',
      'h:: components',
      'the repeated markups can be created as separate component ',
      'hr::',
      'h:: jsx',
      'hr::',
      'h:: props',
      'hr::',
      'h:: state',
      'Varieties of state: multiple state value, lifiting state up, array and object state, derived state, nested list',
      'hr::',
    ],
  },
  {
    topic: '★ COMPONENT',
    points: [
      'react component, the first letter of the file name should begins with capital letter',
      'component name must be Capitalize in form',
      'eg: AuthInput.jsx',
      'hr::',
      //
      'h:: types of components :',
      'Class component',
      'Functional component',
      //
      'h:: Class component',
      'lifecycle hooks available',
      'more code needs to create a component',
      // -----------
      'h:: Function component',
      'life cycle hooks not available',
      'creating component is easy and simple',
      'hooks available',
      'in functional component the file and function name should be same',
    ],
  },
  {
    topic: '★ JSX',
    points: [
      'JavaScript XML',
      '<h1></h1> - this is not html element. its jsx element',
      '<></> - root element',
      '{} - curly braces/expression dynamically binds the data in element, list',
      'hr::',
      '_h_ heading',
      '<button onClick={callFunction}>click me!</button> - passing the functions reference',
      '<button onClick={callFunction()}>click me!</button> - directly calling the function',
      'all jsx elements should wrap inside a single jsx element',
    ],
    links: [],
  },
  {
    topic: '★ PROPS',
    points: [
      'transfer data from one to another component',
      'hr::',
      'h:: additional key components and props concepts',
      "children props - pasing jsx elements inside to any child element and received it by the default prop item as 'children'",
      'forwarded props or proxy props - {...props} with this rest operator, we acess all the other props without destruction for variables, methods ',
      'multiple component slots - to pass additinal jsx code as a prop to another component other that children (here the variable name is totally upto us)(it helps to avoid rendering/wrapping the jsx code where its not need when we use the component is used as child in multiple places)',
      'element identifer as props - build in compoent or custom component can be passed as props. dynamically assign the elemets by assing it as props and stored/remap with varibale like let or const where the name begins with upper case or the prop variable should begins with uppercase',
      'default prop values - use props with default assigned value without passing it from parent component',
      'h:: props drilling:',
    ],
  },
  {
    topic: '★ EVENT HANDLING',
    points: [
      'event.preventDefault()  - prevent to reload the component while submitting a form',
      'html dom events - onClick, onSubmit in html file',
    ],
  },
  {
    topic: '★ STATE',
    points: [
      'update the value dynamically',
      'hooks handles the states',
      `(*) if we are updating the new state depands on the previous state, we can't directly change the value inside the setState method rather we should use arrow function inside of that.

      because states are not performed instantly but at some point in the future(when react has time for it).`,

      `code:: 
      setState(!isEditing) - not recommended
      setState(wasEditing => !wasEditing) - recomended
      `,
      'hr::',
      'h:: characteristics of states',
      'immutable state',
      'lifting state up',
      'derived state',
      'hr::',
      'h:: immutable state',
      'objects and array (which technically are objects) are reference value in javascript. we should not therfore not mutate them directly - instead create a (deep) copy first',

      'h:: lifting the state up',
      'lift the state up to the closest "ancestor" component that has access to all the components that need to work with that state',
      'declaring the state in a common parent component which can be accessed by its several child components',
      '"ANCESTOR" passess the state value via props to the child component',
      `ancestor passes a function that eventually changes the state via props to the child component`,
      'this allows the child component to initiate the state change',

      'h:: deriving state from props (derived state)',
      `a computed variable's value can be derived from a prop of another component state`,
      'keeping a value as state is possible when its small but when we need many related values(when the possibility of re-render the function component with a releated state) then it can derived and computed from the related state update',
    ],
  },
  {
    topic: '★ LISTS AND KEYS',
    points: [
      'h:: Lists',
      'inside curly braces {} use the list',
      'use "map" method to convert an array in list',
      'use "return" to return the every iterated item.',
      //
      'h:: Keys',
      'maintain an unique id to every iterated item of a list',
    ],
  },
  {
    topic: '★ CONDITIONAL RENDERING',
    points: [],
  },
  {
    topic: '★ STYLING',
    points: [
      'h:: approaches of styling in react:',
      'styling with vanilla css (separate file)',
      "css-in-js styling with 'styled components' (inline styling)",
      'static and dynamic(conditional) styling',
      'scoping styles with css modules',
      'styling with third-party packages like styled-components, tailwind css',
      //
      'hr::',
      // vanilla styles
      'h:: styling with vanilla css (separate file)',
      'it is normal css file(including index.css file), we can define all our css rules inside that',
      'it needs to be imported to components where its needs to be used',
      'multiple classes can be add separated by space',
      `code:: 
      imort './index.css';

      <p className="title">my paragraph</p> (class name should be 'className' instead of 'class')

      <p className="title error warnings">my paragraph</p> (multiple class added via separated by space)
      `,
      'the build tool(vite js) takes all styles from the file and adds dynamically to the dom',
      'creating multiple css files are possible based on the component ',
      //
      'ADVANTGES:',
      'CSS code is decoupled from jsx file',
      'you write css code as we know',
      'css code can be written by many developer who needs minimal amount of access to your jsx code',
      //
      'DISADVANTAGES:',
      'you need to know(learn) css',
      'css code is not scoped to the components',
      'css rules may clash accross components (some css calss name used in different components for different purposes)',
      '*** all the styles are in the end will injected to the head section in index.html by vite so it applied globally across the application',
      // inline styles
      'h:: inline styling',
      'can write styles inside of the jsx elements as attribute',
      'write styles as object with inside of curley braces {}',
      "normal vanilla css pattern not work here. we should either use camelCase or quotes('') for separated names",
      //
      `code::
      <p style={{color: 'red', textAlign: 'center'}}>my paragraph</p> - (1st curley brace is syntax and 2nd is object)
      or
      <p style={{color: 'red', 'text-align': 'center'}}>my paragraph</p>
      `,
      'ADVANTAGES:',
      'quick and easy to add to jsx',
      'styles only affect element to where it added',
      'dynamic (conditional) styling is simple',
      'DISADVANTAGES:',
      'need to style every element individually',
      'no separation between jsx and css code',
      // static and dynamic
      'h:: static and dynamic(conditional) styling',
      'INLINE STYLES:',
      `code:: 
      single dynamic(conditional) style:
      <input type='email' style={{backgroundColor: isValid ? 'blue', 'red'}}

      multiple styles static and dynamic:
      <input type='email' style={{color: 'black', backgroundColor: isValid ? 'blue', 'red'}}
      `,
      'VANILLA STYLES:',
      `code::
      single static class:
      <label className="label">email</label>

      more static class(add with space):
      <label className="label valid">email</label> 

      single dynamic class:
      <label className="{isValid ? 'valid' : undefined}">email</label>

      more dynamic class (with template literals and space):
      <label className={\`\${isValid ? 'valid' : undefined} \${isTouched ? 'touched' : undefined}\`}>email</label>

      more class with static and dynamic class (with template literals and space):
      <label className={\`label \${isValid ? 'valid' : undefined} \${isTouched ? 'touched' : undefined}\`}>email</label>
      `,
      // css modules
      'h:: CSS modules',
      'can write vanilla CSS with file specific scoping',
      'css code is decouped from jsx code',
      'css class are scoped to the component which import them',
      'no css class name clashes with other components',
      `code::
      file name:
      <component_name>.module.css like Header.module.css

      import classes from 'Header.module.css'; - ('classes' this is name anything we prefer)

      <p className={classes.my_para}>my paragraph</p> (here the 'classes are name which we provided in the import')

      with coditionally:
      <p className={\`\${isValid ? classes.my_para : undefined}\`}>my paragraph</p>
      `,
      'the build tool creates unique class for all classes which are consumed by adding some random unique string along with the class name which we provided (eg: my_par_axsjdshsj)',
      'DISADVANTAGES:',
      'it may end up with many relatively small css files in the project',
    ],
  },
  {
    topic: '★ HOOKS',
    points: [
      'useState() - accepts one arguments',
      'useEffect() - accepts two arguments',
      'useRef()',
      'useReducer() - accepts two aguments',
      'useContext()',
      'useCallback()',
      'useMemo()',
      'custom hooks',
    ],
  },
  {
    topic: '★ CUSTOM HOOKS',
    points: [],
  },
  {
    topic: '★ PORTALS AND REFS',
    points: [
      'ref is one of a react hook - useRef()',
      'accessing/manipulating DOM elements via refs',
      'managing values with refs',
      'exposing api functions from components',
      'detaching dom rendering from JSX structure with portals',
      `code:: 
        import { useRef() } from 'react';

        const myRef = useRef(); (the can be reterived from 'current' property)

        function handler() {
          console.log(myRef.current.value); 
        }

        <input ref={ myRef } />
      `,
      "use 'current' property read values from ref hook",
      'h:: state vs refs',
      'STATE:',
      'causes compoennt re-evaluation(re execution) when changed',
      'should be used for values that are directly reflected in the UI',
      'should be used for "behind the scenes" values that have no direct UI impact',
      'REFS:',
      "don't component re-evaluation when changed",
      'can be used to gain direct DOM element access (great forreading values or accessing certain browser APIs)',
      'h:: forwardRef',
      `need to import 'forwardRef' from react, for using ref as prop to child compoent in react versions before 19`,
      'have to use the forwardRef as a wrapper for functional component to use it',
      'h:: useImperativeHandle() hook',
      "it helps to handle a component's props, functions from outside of other components",
      `code:: 
        * use imperative handle hook before react 19: 
        
        import {forwardRef} from 'react';
        const <fn_name> = forwardRef(function <function_name> (props, ref) {
          useImperativeHandle(ref, ()=>{
            return {...}
          });
        })

        * use imperative handle hook in react 19:

      `,
    ],
  },
  {
    topic: '★ HANDLING SIDE EFFECTS(effects) and USE EFFECT',
    points: [
      'the piece of code which is not directly related to the main task of the application. (eg: getting geo location from the browser)',
      'USE EFFECT IS ONE A SOULTION FOR SIDE EFFECT',
      ,
      'h: use effect:',
      'use effect will trigger after the component execution',
    ],
  },
  {
    topic: '★ ROUTING',
    points: [
      'different url paths load differnt content on the screen',
      'only one initial HTML request and response',
      'visible content is changed without fetching a new HTML file',
      `code::
      npm install react-router-dom
      `,
    ],
  },
  {
    topic: '★ FORMS',
    points: [
      'h:: Form Submission:',
      'handling submission is relatively easy',
      'entered value can be managed via state',
      'alternatively, they can be extracted via refs',
      "or via 'FormData' and native browser features",
      'h:: Input Validation:',
      'providing a good experience is tricky',
      'we can validate on every keystroke -> errors may be shown too early',
      'we can validate on lost focus -> errors may be shown too long',
      'we can validate on form submission -> errors may be shown too late',
      'hr::',
      'native "for" is truned into "htmlFor" here',
      `code:: 
      <label htmlFor="email">email</label>
      <input id="email" name="email" type="email" />
      `,
      'h:: Form actions:',
      'available in react 19+',
      'extracting values and managing form state',
      'synchronous and asynchornous actions',
      'optimistic UI updating',
    ],
  },
  {
    topic: 'THIRD PARTY STYLING',
    points: [
      'styled components',
      'tailwind css',
      'hr::',
      'h:: styled components',
      "back ticks needs be added to define elements (javascript's tagged template concept)",
      'we can write our standard css here',
      `code::
      install:
      npm install styled-components

      importing:
      import {styled} from 'styled-components';

      defining styles to containers with back ticks(div, p etc) in outside of the component function:
      const MyContainer = styled.div\`
        display: flex;
        flex-direction: column;
        margin: 10px;
      \`

      using in component:
      <MyContainer>
        <p></p>
      </MyContainer>
      `,
      'conditional and dyamic styled-components:',
      'by achieving this, custom attributes needs to be declared to the element',
      `code::
      const MyInput = styled.input\`
        color: \${({$invalid}) => ($invalid ? 'red' : 'transparent')}; - ({} destructuring the props -> ({props.$invalid}))
      \`

      <MyInput $invalid={isInvalid} />

      * adding $ sign is best practice to avoid clash between default attribute and custom attributes in the element
      `,
      'nested elements, pseudo class, media query are all possible with styled component',
      `code::
      const MyContainer = styled.div\`
        display flex;
        align-items: center;

        (adding styles to child elements with '&' symbol)
        & h1 {
          background-color: red;
        }

        & p {
          font-size: 12px;
        }

        (adding pseudo class to the current container. note:- dont add space after & otherwise it will be considered as child element)
        &:hover {
          background-color: blue;
        }

        (media query)
        @media (min-width: 768px) {
          (for current element)
          & {
            border: 1px solid red;
          }
          (or - we can directly write without amberson symbol inside the media query)
          border: 1px solid red;

          & p {
            font-size: 18px;
          }
        }
      \`

      <MyContainer>
        <h1></h1>
        <p></p>
      </MyContainer>
      `,
      'here we can write one wrapper element and use it for our sibling elements aswell',
      'we could also do write styles in separate .jsx file and export it',
      // tailwind css
      'h:: tailwind css',
      'its a css framework created by tailwind team',
      'we can achieve styles with its classes(utility class)',
      'by using tailwind classess we can get its styles without writing our own',
      "after installing, it will give some configuration files like tailwind.config.js, postcss.config.js and add some imports into 'the index.js' file",
      'no need to import tailwind in the components we use',
      'by making changes in the (utility) config files, we can use our custom styles by custom tailwind class ',
      'using colon(:) for media queries, pseudo class infront of the utility class like (md:mr-10, hover:uppercase)',
      `code:: 
      dynamic class:
      let labelClass = 'block mb-2'

      if(isInvalid) {
        labelClass += 'text-red-400'; (here just adding extra class as per the cndt along the classes defined in the variable above)
      } else {
        labelClass += 'text-stone-300';
      }

      <label className={labelClass}>First Name</label>
      `,
    ],
  },
  {
    topic: 'STRICT MODE COMPONENT',
    points: [
      'it is a default built in component of react',
      "strict mode component is in main.jsx. its runs the application's component  two times one is for execution and another is for testing",
      'it will happen only during the development and no longer for production due to performance impact',
      `code::
      <StrictMode>
        <App />
      </StrictMode>
      `,
    ],
  },
  {
    topic: 'REACT DEBUGGING & DEVELOPER TOOLS (CHROME EXTENSION)',
    points: [
      'to maintain the react application while development',
      'it displays props hook states',
      'to track our activites',
      'h:: react developer tools - browser extension:',
      'we can get 2 tabs after adding the extension',
      'profiler - use to find and fix performance issue of react',
      "components - app component's tree can be find. the entire source code can be found here. props, events, states etc",
    ],
  },

  {
    topic: 'REACT UPDATES',
    points: [
      'passing ref as child modified react < 19',
      'form prevent default introduced with form action in react < 19',
    ],
  },
  {
    topic: 'REACT SPECIAL PROPERTIES/ATTRIBUTES',
    points: [
      'className (class)',
      "htmlFor (for in label)(we can't use the native 'for' here, its a kind of reserved name)",
      'ref',
      'children - helps to pass jsx code between the open and close tag of component',
      'key - provide unique id for each iteration of list',
    ],
  },
  {
    topic: 'REDUX',
    points: [
      'Always use "useSelector" and "useDispatch" hooks with functional components.',
    ],
  },
  {
    topic: 'state object',
    points: ['use to maintain multiple states in a single state function'],
  },
  {
    topic: 'react snippet object',
    points: [
      'ES7 + react/redux/react-native snippets',
      'rfce - use to create boilerplate code for the components',
      'rafce - also use to create boilerplate code for the components',
    ],
  },
  {
    topic: 'api handling',
    points: ['fetch method - default js method', 'axios library - npm i axios'],
  },
  {
    topic: 'pure component',
    points: [],
  },
  {
    topic: 'impure component',
    points: [],
  },
  {
    topic: 'strict mode',
    points: [],
  },

  {
    topic: 'context API and useReducer()',
    points: [
      'h:: context API:',
      'avoid problem of shared state : prop drilling',
      'embracing component composition',
      'can sharing state with context',
      'h:: useReducer()',
      'managing complex state with useReducer()',
    ],
  },
  {
    topic: 'prop drilling',
    points: [
      'passing shared data through multiple components layers',
      'multiple components not even directly need the data. so it leads to write extra boiler plate code',
    ],
  },

  {
    topic: 'suspense',
    points: [],
  },
  {
    topic: 'fall back component',
    points: [],
  },
  {
    topic: 'error boundaries',
    points: [],
  },
  {
    topic: 'what is diff',
    points: [],
  },
  {
    topic: 'react memo',
    points: [],
  },
  {
    topic: '',
    points: [],
  },
  {
    topic: 'OTHER TOPICS',
    points: [
      'what is createPortal function',
      'what is useImperative function',
      'useImperativeHandle',
      'what is forwardRef function',
      'component composition',
    ],
  },
  {
    topic: 'freagment component <></> or <Fragment></Fragment>',
    points: [
      'in javascript, we cant return two values, so we need one wrapping element',
      'its a syntactic sugar',
    ],
  },
  {
    topic: 'helping function/variable and why it matters?',
    points: [
      'declare a function on outside of component function when we dont need it to be reexecuted while the component re-renders',
    ],
  },
  {
    topic: 'what is cleanup function in react?',
    points: [],
  },
  {
    topic: 'why immutability matters - using ',
    points: [
      "assigning a value of array or object to an variable won't create a copy of it rather in provide its reference. so making changes in a new variable will affect to its original array or object. to avoid this we can use ... operator to create a copy of it. so that i wont affect the original array/object",
    ],
  },
  {
    topic: '***** INFO *****',
    points: [
      `for input field - react a special attribute called 'defaultValue' it helps to update the typed value while typing `,
      `we dont need to declare all the dom update variable as state. we can provide one variable as state and rest can be normal let or const because that one state variable update rerender the dom so it will take care rest of the variable`,
      'using another state value in a state is not gaurantee to provide the correct value (here the mutable or immutable is coming)',
      'general constants/let/var can defined with uppercases',
      'in react, if we add any component or file or image or anything, we have to add the extension aswell like(.jsx, .js, .png)',
      'react default functions like hooks wont support async/await directly',
    ],
  },
  {
    topic: '***** CHECKS *****',
    points: [
      'what is the d/b mutable and immutable states/components',
      'what is the d/b mutable and immutable variables',
      'why immutability matters - using ',
      'when and where the arrow function to be used while handling events or states (some cases the events are handled with function reference or state reference)',
      'why some variables and functions are defining outside from the component function',
      'when should we outsource  the data into a separate file and putting that along with main, package files folder path',
      'what is lifiting the values up as like lifting the states up',
      'what is react utility file?',
      'what the meaning of utility component?',
    ],
  },
];

export default react;
