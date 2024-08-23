import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TodoList from './components/TodoList/TodoList'
import { observer } from 'mobx-react-lite';
import store from './store';



const App = observer(() => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper-content">
          <TodoList store={store} />
        </div>
      </main>
      <Footer />
    </>
  );
});

export default App;
