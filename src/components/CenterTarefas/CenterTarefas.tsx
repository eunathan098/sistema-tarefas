import { Link } from "react-router-dom";
import "./CenterTarefas.css"

// Importação de imagens
import imagemSalvar from "../../images/btn-salvar.png"
import imagemConcluido from "../../images/btn-concluido.png"
import imagemNaoConcluido from "../../images/btn-nao-concluido.png"


function CenterTarefas(){

    function btnSalvar(){
        alert("Tarefa salva com sucesso!")
    }


    return(
        <>
            <header>

                <div className="logotipo">
                    <p className="header-title"> Logotipo do site </p>
                </div>

            </header>

            <main>
                <div className="header-tarefas">
                    <ul>

                        <li> 
                            <Link to="/nova-tarefa">
                                Nova tarefa 
                            </Link>
                        </li>

                        <li> 
                            <Link to="/editar-tarefa">
                                Editar tarefa 
                            </Link>
                        </li>

                        <li> 
                            <Link to="/tarefas-excluidas">
                                Tarefas excluídas 
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </main>

            <div className="container-tarefas">

                    <form>
                        <label className="tarefas">
                            <span className="subtitle"> Nome: </span>
                            <input type="text" placeholder="Insira a tarefa ..." />
                            <p className="subtitle"> Realizado? </p>
                            <div className="container-realizado">
                                <img src={imagemConcluido} className="icons" />
                                <input type="radio" name="realizado" value="sim" />
                                <img src={imagemNaoConcluido} className="icons" />
                                <input type="radio" name="realizado" value="nao"/>
                            </div>
                        </label>
                        <div className="container-observacoes">
                            <p className="subtitle"> Observações </p>
                            <textarea placeholder="Detalhes da tarefa">
                                
                            
                            </textarea>
                        </div>
                       

                        <div className="container-salvar">
                            <img src={imagemSalvar} className="icons" id="icon-salvar" onClick={btnSalvar}/>
                        </div>
                    </form>

                </div>
        </>
    )
}
export default CenterTarefas;