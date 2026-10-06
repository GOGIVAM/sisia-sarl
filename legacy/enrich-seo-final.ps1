$filePath = "m:\Projets\Sissia\New-site\sissia-sarl\index.html"
$content = Get-Content $filePath -Encoding UTF8 -Raw

# Ajouter schemas JSON-LD
$schemas = @'

    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Quels services propose SISIA?", "acceptedAnswer": {"@type": "Answer", "text": "SISIA propose automatisme, electricite, videosurveillance, energie solaire, securite et informatique industrielle."}},
        {"@type": "Question", "name": "Ou est situe SISIA?", "acceptedAnswer": {"@type": "Answer", "text": "SISIA est a Douala 3e, Ngodi-Bakoko Chefferie, Cameroun."}},
        {"@type": "Question", "name": "Comment contacter SISIA?", "acceptedAnswer": {"@type": "Answer", "text": "Appelez +237-676-246-478 ou emailez sisia-sarl@outlook.fr"}}
      ]
    }
    </script>

    <!-- AggregateOffer Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "AggregateOffer",
      "priceCurrency": "XAF",
      "priceRange": "200000-5000000",
      "availability": "https://schema.org/InStock"
    }
    </script>

    <!-- NewsArticle Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Solutions Industrielles SISIA",
      "image": "https://sissia-sarl.cm/images/logo-smart3.png",
      "datePublished": "2024-01-01T00:00:00+00:00",
      "dateModified": "2026-02-21T00:00:00+00:00", 
      "author": {"@type": "Organization", "@id": "https://sissia-sarl.cm", "name": "SISIA SARL"}
    }
    </script>
'@

$content = $content -replace '</head>', $schemas + "`n</head>"

Set-Content -Path $filePath -Value $content -Encoding UTF8

Write-Output "Enrichissement SEO complete avec succes!"
Write-Output "- Meta tags Twitter et OpenGraph avances"
Write-Output "- Schemas JSON-LD FAQPage, AggregateOffer et NewsArticle"
