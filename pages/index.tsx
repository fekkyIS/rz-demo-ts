import type { NextPage } from 'next';
import Layout from '../components/Layout'
import Container from '@mui/material/Container';
import styles from '../styles/Main.module.scss';
const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="xl" className={styles.main}>
      <Container  className={styles.main}>
        INDEX
      </Container>
      </Container>
    </Layout>
  )
}

export default Home
