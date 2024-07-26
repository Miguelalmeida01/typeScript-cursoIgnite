import styles from './Comment.module.css';


import { ThumbsUp, Trash } from 'phosphor-react' 

export function Comment(){
    return(
       <div className={styles.comment}>
           <img src="https://avatars.githubusercontent.com/u/115598120?v=4"/>

           <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Miguel de Almeida</strong>
                            <time title="26 de julho às 08:13h" dateTime="2023-07-26 12:15:00">Cerca de 1h atrás</time>
                        </div>
                         <button title="lixeira">
                            <Trash size={24}/>
                         </button>
                    </header>
                  <p>Muito bom Devon, parabéns!! 👏👏</p>
               </div>


               <footer>
                   <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                   </button>

               </footer>
           </div>
        </div>
    )
}