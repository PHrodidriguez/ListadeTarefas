
import React, { useEffect } from 'react';
import './App.css';
import{useState} from 'react';

function App(){

  const [tarefas, setarTarefas] = useState([
/*

    {
      id:0,
      tarefa:'Minha tarefa do dia',
      finalizada:false
    },
    {
      id:0,
      tarefa:'Minha tarefa do dia 2',
      finalizada:true
    },
  */ 
 
  ]);
  const [modal, setModal] = useState(false);







  const abrirModal = () =>{
    setModal(!modal);

  }

const salvarTarefa = () =>{

    var tarefa = document.getElementById('tarefa-');
    
    setarTarefas([
      ...tarefas,
      {
        id:new Date().getTime(),
        tarefa: tarefa.value,
        finalizada:false
      }
    ]);
 
    setModal(false);
}

const marcarConcluida =(id) =>{
  let novasTarefas =tarefas.filter(function(val){
    if(val.id == id){
      val.finalizada = true;

    }
      return val;

  })

  setarTarefas(novasTarefas);
    
}

useEffect(() =>{

},[])
  return(
  <div className="App">
        {
          modal?
          <div className="modal">
            <div  className='modalContent'>
            <h3>Adicionar Tarefa</h3>
            <input id="tarefa-" type='text'placeholder='Escreva sua tarfa'></input>
            <button onClick={()=>salvarTarefa()}>Adicionar</button>
          </div>
          </div>
          :
          <div></div>
        }

    <div onClick={()=>abrirModal()}className="addTarefa">+</div>
      <div className="boxAnotacoes">
        <div className="boxTarefa">
              <h2>Minhas Tarefas</h2>
           {
            tarefas.map((val)=>{
              if(!val.finalizada){
                return(
                  <p onClick={()=>marcarConcluida(val.id)}>{val.tarefa}</p>
                );
              }else{
                return(
                  <p onClick={()=>marcarConcluida(val.id)}style={{textDecoration: 'line-through'}}>{val.tarefa}</p>
                )
              }
            })
           }
            
        </div>
      </div>
  </div>
  );
}


export default App;


