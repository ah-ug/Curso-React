 import React from 'react';
 import ReactDOM from 'react-dom';
// import { TodoApp } from './componentes/08-useReducer/TodoApp';
// // import { RealExampleRef } from './componentes/04-useRef/RealExampleRef';
// // import { SimpleForm } from './componentes/01-useState/02-useEffect/SimpleForm';
// // import { CounterApp } from './componentes/01-useState/CounterApp';
// // import { CounterWithCustomHooks } from './componentes/01-useState/CounterWithCustomHooks';
// // import { HookApp } from './HookApp';
// // import { FormWithCustomHook } from './componentes/01-useState/02-useEffect/FormWithCustomHook';
// // import { MultipleCustomHooks } from './componentes/03-examples/MultipleCustomHooks';
// // import { FocusScreen } from './componentes/04-useRef/FocusScreen';
// // import { Layout } from './componentes/05-useLayoutEffect/Layout';
// // import { Memorize } from './componentes/06-memos/Memorize';
// // import { MemoHook } from './componentes/06-memos/MemoHook';
// // import { CallbackHook } from './componentes/06-memos/CallbackHook';
// import { Padre } from './componentes/07-tarea-memo/Padre';
import { MainApp } from './componentes/09-useContext/MainApp';


// ReactDOM.render(
//   // <HookApp />,
//   // <CounterWithCustomHooks />,
//   // <SimpleForm />,
//   // <FormWithCustomHook />,
//   // <MultipleCustomHooks />,
//   // <FocusScreen />,
//   // <RealExampleRef />,
//   // <Layout />,
//   // <MemoHook />,
//   // <CallbackHook />,
//   <Padre />,
//   document.getElementById('root')
// );

ReactDOM.render(
    <MainApp />,
  document.getElementById('root')
);

