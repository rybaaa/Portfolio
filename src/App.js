import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {RemoteJob} from "./remotejob/RemoteJob";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {useEffect} from "react";

function App() {
    useEffect(()=>{
        document.title = 'Anton Rybak Portfolio';
    },[])
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteJob/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
