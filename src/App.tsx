import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import {NewTransactionModal} from './components/NewTransactionModal';
import Modal from 'react-modal';
import { useState } from "react"; 

Modal.setAppElement('#root');

export function App() {
  const [ isNewTransactionModalOpen, setNewTransactionModal] = useState(false);


  function handleNewTransactionModalOpen() { 
    setNewTransactionModal(true);
  }

  function handleNewTransactionModalClose() {
    setNewTransactionModal(false);
  }
  return (
    <>

      <Header onOpenTransactionModal={handleNewTransactionModalOpen}  ></Header>
      ]
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      ></NewTransactionModal>

      <Dashboard />
      <GlobalStyle></GlobalStyle>
      
    </>
  );
}

