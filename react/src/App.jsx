import {Header} from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar';

import style from './App.module.css';


import './global.css';

const posts = [
{
  id: 1,
  author: {
  avatarUrl: 'https://github.com/Miguelalmeida01.png',
  name: 'Miguel de Almeida',
  role:'Full Stack'
  },
  content: [ 
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-07-27 19:32:00'),
},
{
  id: 2,
  author: {
  avatarUrl: 'https://github.com/DevGabrielrr.png',
  name: 'Gabriel Ribeiro',
  role:'Full Stack'
  },
  content: [ 
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-07-10 19:32:00'),
},
{
  id: 3,
  author: {
  avatarUrl: 'https://github.com/fabiocasadossites.png',
  name: 'Fabio Augusto',
  role:'Tech Lead'
  },
  content: [ 
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-07-27 19:32:00'),
},
];



export function App() {
return (
  <div>
      <Header />


      <div className={style.wrapper}>
      <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
      </div>
  
      
  </div>  
)
}


