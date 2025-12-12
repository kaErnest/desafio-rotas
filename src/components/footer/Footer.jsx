import styles from './Footer.module.scss'
import logo from '../../assets/logo.png'
import emailIcon from '../../assets/email.png'
import telefoneIcon from '../../assets/telefone.png'
import localizacaoIcon from '../../assets/localizacao.png'

export default function Footer() { 
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.boxLogo1}>
          <div className={styles.boxLogo}>
          <img src={logo} alt="Logo" className={styles.logoIcon} />
          <h3>Médicos & Dentistas</h3>
          </div>
            <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={styles.coluna}>
          <h3>Contato</h3>
        <div className={styles.coluna1}>
          <ul>
            <li>
              <img src={emailIcon} alt="Ícone email" />
              contato@medico-dentista.org
            </li>
            <li>
              <img src={telefoneIcon} alt="Ícone telefone" />
              (11) 3000-0000
            </li>
            <li>
              <img src={localizacaoIcon} alt="Ícone localização" />
              São Paulo, Brasil
            </li>
          </ul>
          </div>
        </div>

        <div className={styles.coluna}>
          <h3>Redes Sociais</h3>
          <div className={styles.coluna1}>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          </div>
        </div>

      </div>

      <p className={styles.copy}>
        © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.
      </p>
    </footer>
  )
}
