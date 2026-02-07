import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, image, url, schema }) => {
  const siteTitle = 'Amar Studio | Professional Photography Services';
  const metadata = {
    title: title ? `${title} | Amar Studio` : siteTitle,
    description: description || "Amar Studio offers professional photography and videography services, including wedding, baby, pre-wedding, retirement, drone, and cinematic videography.",
    image: image || 'https://amarstudio.com/default-image.jpg', // Replace with actual default image URL
    url: url || 'https://amarstudio.com',
    keywords: keywords || "photography, wedding photography, baby photography, pre-wedding, drone, cinematic videography, amar studio"
  };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content="Amar Studio" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metadata.url} />
      <meta property="twitter:title" content={metadata.title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content={metadata.image} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      
      {/* Default LocalBusiness Schema if not provided */}
      {!schema && (
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
           "@context": "https://schema.org",
           "@type": "LocalBusiness",
           "name": "Amar Studio",
           "image": metadata.image,
           "telephone": "+919418640694",
           "email": "balkar.amarstudio@gmail.com",
           "address": {
             "@type": "PostalAddress",
             "streetAddress": "Sandhole main bazzar near saklani clinic",
             "addressLocality": "Sandhole",
             "addressRegion": "Himachal Pradesh",
             "postalCode": "176090",
             "addressCountry": "IN"
           },
           "url": "https://amarstudio.com", 
           "priceRange": "$$"
         }) }} />
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  schema: PropTypes.object,
};

export default SEO;
