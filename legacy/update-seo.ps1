# Script PowerShell pour enrichir le SEO du fichier index.html

$filePath = "m:\Projets\Sissia\New-site\sissia-sarl\index.html"
$content = Get-Content $filePath -Encoding UTF8 -Raw

# Ajouter les meta tags Twitter et OpenGraph avances
$newMeta = @"
    <meta name="twitter:creator" content="@sissiasarl">
    <meta name="twitter:domain" content="sissia-sarl.cm">
    <meta property="og:image:type" content="image/png">
    <meta property="og:site_name" content="SISIA SARL">
    <meta name="google" content="nositelinkssearchbox">
    <meta name="google" content="notranslate">
    <meta name="referrer" content="strict-origin-when-cross-origin">
"@

# Ajouter les schemas avances
$newSchemas = @"
    
    <!-- Schemas JSON-LD Avances -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Quels services propose SISIA?", "acceptedAnswer": {"@type": "Answer", "text": "SISIA propose des services d'ingenierie industrielle incluant: automatisme, electricite industrielle, videosurveillance, energie solaire, securite et informatique industrielle."}},
        {"@type": "Question", "name": "Ou est situe SISIA?", "acceptedAnswer": {"@type": "Answer", "text": "SISIA est basee a Douala 3e, Ngodi-Bakoko Chefferie, Cameroun."}},
        {"@type": "Question", "name": "Comment contacter SISIA?", "acceptedAnswer": {"@type": "Answer", "text": "Vous pouvez contacter SISIA au +237-676-246-478 ou par email: sisia-sarl@outlook.fr"}}
      ]
    }
    </script>
    <script type="application/ld+json">
    {"@context": "https://schema.org", "@type": "AggregateOffer", "priceCurrency": "XAF", "priceRange": "200000-5000000", "availability": "https://schema.org/InStock"}
    </script>
"@

# Remplacer les anciennes balises par les nouvelles
$pattern = '<meta name="twitter:image" content="https://sissia-sarl\.cm/images/logo-smart3\.png">\s+<meta name="referrer" content="origin"><meta data-intl-tel-input-cdn-path="intlTelInput/"></head>'
$replacement = '<meta name="twitter:image" content="https://sissia-sarl.cm/images/logo-smart3.png">' + [Environment]::NewLine + $newMeta + $newSchemas + [Environment]::NewLine + '<meta data-intl-tel-input-cdn-path="intlTelInput/"></head>'

$content = $content -replace $pattern, $replacement

# Sauvegarder le fichier
Set-Content -Path $filePath -Value $content -Encoding UTF8

Write-Host "✓ SEO enrichi avec succes!"
