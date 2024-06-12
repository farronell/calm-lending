import "./App.css";
import ArticlesGrid from "./components/ArticlesGrid/ArticlesGrid";
import { ArticlesList } from './components/ArticlesList/ArticlesList'
import Calm from "./components/Calm/Calm";
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Calm/>
      <ArticlesGrid/>
      <Form/>
      <ArticlesList/>
      <Footer/>
    </>
  );
}

export default App;
