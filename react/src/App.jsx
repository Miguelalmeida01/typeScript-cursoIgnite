import {Header} from './components/Header';
import {Post} from './Post';

import style from './App.module.css';


import './global.css';
import {Sidebar} from './components/Sidebar';

export function App() {
  return (
    <div>
       <Header />


       <div className={style.wrapper}>
        <Sidebar />
           <main>
              <Post 
                author="Diego Fernandes" 
                content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione aperiam, eligendi nobis illum ab sunt ad nemo ullam necessitatibus libero, voluptate dolor, possimus unde hic. Eveniet nisi at necessitatibus iure!" 
              />
    
                <Post
                   author="Miguel Almeida"
                   content="Um novo post muito legal"
                />
            </main>
       </div>
    
    </div>  
  )
}


