import Web3Form from './Web3Form.jsx';
import { useLang } from '../i18n/index.jsx';

const L = {
  title: { fr: 'Nous sommes là pour vous aider', en: 'We are here to help' },
  name: { fr: 'Nom', en: 'Name' },
  namePh: { fr: 'Entrez votre nom', en: 'Enter your name' },
  email: { fr: 'Email', en: 'Email' },
  emailPh: { fr: 'Entrez une adresse e-mail valide', en: 'Enter a valid email address' },
  message: { fr: 'Message', en: 'Message' },
  messagePh: { fr: 'Entrez votre message', en: 'Enter your message' },
  send: { fr: 'Envoyer', en: 'Send' },
  ok: { fr: 'Merci ! Votre message a bien été envoyé.', en: 'Thank you! Your message has been sent.' },
  ko: { fr: 'Impossible d\'envoyer votre message. Veuillez corriger les erreurs puis réessayer.', en: 'Unable to send your message. Please fix errors then try again.' },
};

/** Formulaire de contact (Web3Forms, même clé que le site d'origine). */
export default function ContactForm({ title = true }) {
  const lang = useLang();
  const t = (k) => L[k][lang];
  return (
    <div className="cf">
      {title && <h2>{t('title')}</h2>}
      <Web3Form action="https://api.web3forms.com/submit" className="cf__form" name="form">
        <input type="hidden" name="access_key" value="8d668814-d685-4d27-ae26-fbd31f28b884" />
        <input type="hidden" name="subject" value="Nouveau message de contact de SISIA" />
        <input type="hidden" name="from_name" value="Formulaire SISIA" />
        <input type="checkbox" name="botcheck" className="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
        <label className="cf__field"><span>{t('name')}</span><input type="text" name="name" placeholder={t('namePh')} required autoComplete="name" /></label>
        <label className="cf__field"><span>{t('email')}</span><input type="email" name="email" placeholder={t('emailPh')} required autoComplete="email" /></label>
        <label className="cf__field"><span>{t('message')}</span><textarea name="message" rows="5" placeholder={t('messagePh')} required /></label>
        <div className="cf__actions"><a href="#" className="u-btn-submit btn-pill">{t('send')}</a></div>
        <div className="u-form-send-message u-form-send-success cf__msg cf__msg--ok" style={{ display: 'none' }}>{t('ok')}</div>
        <div className="u-form-send-message u-form-send-error cf__msg cf__msg--ko" style={{ display: 'none' }}>{t('ko')}</div>
      </Web3Form>
    </div>
  );
}
