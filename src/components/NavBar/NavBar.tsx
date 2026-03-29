import '../NavBar/NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <>
            <p className="title-navbar">
                Demandas
            </p>

            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/dashboard" 
                            className="btn-tarefas"
                        >
                            Dashboard
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink 
                            to="/nova-tarefa" 
                            className="btn-tarefas"
                        >
                            Nova Tarefa
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink 
                            to="/tarefas-excluidas" 
                            className="btn-tarefas"
                        >
                            Excluídas
                        </NavLink>  
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar