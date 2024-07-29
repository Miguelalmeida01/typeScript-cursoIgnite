import { PencilSimpleLine } from 'phosphor-react' 


import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';




export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1719253480609-579ad1622c65?q=40&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="pano de fundo" />

            <div className={styles.profile}>
               <Avatar src="https://avatars.githubusercontent.com/u/115598120?v=4" /> 



                <strong>Miguel de Almeida</strong>
                <span>Full stack</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}