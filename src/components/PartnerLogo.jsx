/** Logo du partenaire, ou badge typographique tant que le fichier officiel n'est pas fourni. */
export default function PartnerLogo({ partner, className = '' }) {
  if (partner.logo) {
    return <img className={`pl-img ${className}`} src={partner.logo} alt={partner.name} loading="lazy" decoding="async" />;
  }
  return (
    <span className={`pl-badge ${className}`} role="img" aria-label={partner.name}>
      {partner.name}
    </span>
  );
}
