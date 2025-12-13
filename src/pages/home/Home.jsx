import styles from "./home.module.scss";
import { Link } from "react-router-dom";
import Saude from "../../assets/saude.png";
import Doutor from "../../assets/doutor.png";

const Home = () => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.conteudo}>
          <div>
            <img src={Saude} alt="" />
          </div>

          <h1>Saúde e cuidado sem barreiras</h1>

          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>

          <div className={styles.buttons}>
            <Link className={styles.btnUm} to="/voluntario">
              Seja Voluntário
            </Link>
            <a className={styles.btnDois} href="">
              Como Ajudar
            </a>
          </div>
        </div>

        <div className={styles.doutorImgBox}>
          <img src={Doutor} alt="Médico voluntário sorrindo" />
        </div>
      </section>

      <section className={styles.sectionMissao}>
        <h2>Nossa Missão</h2>
        <p>
          Transformar vidas através do acesso universal a saúde de qualidade
        </p>

        <div className={styles.boxCards}>
          <article>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>
          <article>
            <h3>Comunidade Forte</h3>
            <p>
              Construir uma rede de profissionais de saúde dedicados a servir
              com compaixão e profissionalismo.
            </p>
          </article>
          <article>
            <h3>Bem-estar Total</h3>
            <p>
              Oferecer atendimento integral em medicina geral e odontologia para
              melhorar a qualidade de vida.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.sectionImpacto}>
        <h2>Nosso Impacto</h2>
        <p>
          Transformando a saúde de nossa comunidade, um paciente de cada vez
        </p>

        <div className={styles.boxCards}>
          <article>
            <h3>2,500+</h3>
            <p>Pessoas Atendidas</p>
          </article>
          <article>
            <h3>150+</h3>
            <p>Profissionais Voluntários</p>
          </article>
          <article>
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
          </article>
          <article>
            <h3>5+</h3>
            <p>Anos de Dedicação</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
