import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


import { ThumbsUp, Trash } from 'phosphor-react' 

export function Comment({content, onDeleteComment}){
const [likeCount, setLikeCount] = useState(0);


function handleDeleteComment() {
    console.log('deletar')
    onDeleteComment(content)
}

function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    });
}

return(
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/fabiocasadossites.png"/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Fabio Augusto</strong>
                        <time title="26 de julho às 08:13h" dateTime="2023-07-26 12:15:00">Cerca de 1h atrás</time>
                    </div>
                        <button onClick={handleDeleteComment} title="lixeira">
                        <Trash size={24}/>
                        </button>
                </header>
                <p>{content}</p>
            </div>


            <footer>
                <button onClick={handleLikeComment}>
                <ThumbsUp/>
                Aplaudir <span>{likeCount}</span>
                </button>

            </footer>
        </div>
    </div>
)
}