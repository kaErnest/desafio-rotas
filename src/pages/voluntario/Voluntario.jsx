import styles from "./voluntario.module.scss";
import { useState } from "react";

const Voluntario = () => {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }
  return (
    <>
      <section className={styles.sectionVoluntario}>
        <h2>Seja Voluntário</h2>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>

        <div className={styles.boxCards}>
          <article>
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </article>
          <article>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </article>
          <article>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </article>
        </div>
      </section>

      <section className={styles.sectionForm}>
        {!enviado ? (
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h2>Inscrição para Voluntários</h2>

            <div className={styles.grupo}>
              <h4>Dados Pessoais</h4>

              <div className={styles.row}>
                <input type="text" placeholder="Seu Nome *" required />
                <input type="email" placeholder="Seu Email *" required />
              </div>

              <div className={styles.row}>
                <input type="text" placeholder="Seu Telefone *" required />
              </div>
            </div>

            <div className={styles.grupo}>
              <h4>Mensagem Adicional</h4>
              <textarea placeholder="Conte-nos porque você quer ser voluntário..." />
            </div>

            <p className={styles.infoText}>
              Entraremos em contato para mais informações
            </p>

            <button type="submit" className={styles.btnEnviar}>
              Enviar Inscrição
            </button>
          </form>
        ) : (
          <div className={styles.sucessoBox}>
            <div className={styles.icone}>✓</div>
            <p>
              Cadastro realizado com sucesso. Entraremos em contato para mais
              informações.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Voluntario;
