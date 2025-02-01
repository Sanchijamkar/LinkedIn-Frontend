import './App.css'
import MainHeader from './components/reusable/MainHeader'
import HomePage from './components/page-level/HomePage'

function App() {
  return (
    <>
      <div className='main-container box-border w-screen pb-10'>
        <MainHeader />
        <HomePage />
      </div>
    </>
  );
}

export default App
