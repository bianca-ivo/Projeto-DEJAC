import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Rodape from "./components/Rodape";
import { db } from "./firebaseConfig";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";


const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const usersList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersList.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      },
      (error) => {
        toast.error("Erro ao carregar usuários: " + error.message);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
  <>
    <Header /> {/* Aqui você insere o Header */}
    <Container>
      <Title>PONTOS DE ENTREGA VOLUNTÁRIA CADASTRADOS</Title>
      <Form getUsers={() => {}} onEdit={onEdit} setOnEdit={setOnEdit} />
      <br />
      <Title>PONTOS DE ENTREGA VOLUNTÁRIA CADASTRADOS</Title>
      <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} hideIcons={false} />
    </Container>
    <ToastContainer autoClose={3000} position="bottom-left" />
    <GlobalStyle />
    <Rodape />
  </>
);
}

export default App;
