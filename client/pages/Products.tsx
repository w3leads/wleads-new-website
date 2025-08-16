import { useParams } from "react-router-dom";
import PlaceholderPage from "@/components/PlaceholderPage";
import DomainFinder from "./DomainFinder";

const Products = () => {
  const { product } = useParams();

  // Route to specific product pages
  if (product === "domain-finder") {
    return <DomainFinder />;
  }

  const productTitles: { [key: string]: string } = {
    "email-finder": "Email Finder",
    "email-verifier": "Email Verifier",
    discover: "Discover",
    campaigns: "Campaigns",
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
