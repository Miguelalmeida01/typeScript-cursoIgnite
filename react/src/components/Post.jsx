
import { Comment } from './Comment';
import styles from './Post.module.css';



export function Post() {
    return(
        <article className={styles.post}>
             <header>
                 <div className={styles.author}>
                      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/115598120?v=4"/>
                      <div className={styles.authorInfo}>
                        <strong>Miguel de Almeida</strong>
                        <span>Full Stack</span>
                      </div>
                 </div>

                 <time title="26 de julho às 08:13h" dateTime="2023-07-26 12:15:00">Públicado há 1h</time>
             </header>

             <div className={styles.content}>
                 <p>Fala galeraa 👋</p>
                 <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                 <p><a href="">jane.design/doctorcare</a></p>
                 <p>
                    <a href="">#novoprojeto #nlw #rocketseat</a>{' '}
                    <a href=""> #nlw</a>{' '}
                    <a href=""> #rocketseat</a>
                </p>
             </div>
       
              <form className={styles.commentForm}>
                 <strong>Deixe seu feedback</strong>


                 <textarea placeholder='Deixe um comentário'>
                 </textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
              </form>
       
             <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
           </div>
       
        </article>
    )
}