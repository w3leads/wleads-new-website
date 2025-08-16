import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";
import Layout from "./Layout";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-300 mb-6">
            {description ||
              "This page is under construction. Continue prompting to have me build it out!"}
          </p>
          <Button
            className="bg-gradient-to-r from-brand-success to-brand-purple hover:from-brand-purple hover:to-brand-success text-white border-0"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
