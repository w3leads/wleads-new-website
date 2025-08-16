import { useParams } from "react-router-dom";
import PlaceholderPage from "@/components/PlaceholderPage";

const Products = () => {
  const { product } = useParams();
  
  const productTitles: { [key: string]: string } = {
    "domain-finder": "Domain Finder",
    "email-finder": "Email Finder", 
    "email-verifier": "Email Verifier",
    "discover": "Discover",
    "campaigns": "Campaigns"
  };

  const title = product ? productTitles[product] || "Product" : "Products";
  
  return (
    <PlaceholderPage 
      title={title}
      description="This product page is under construction. Ask me to build it out with specific features and demos!"
    />
  );
};

export default Products;
