import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Curriculum Vitae
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Download my full CV to learn more about my education, experience, and skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/isaac-hasbani-cv.pdf" download>
                  <Download className="h-5 w-5" />
                  Download CV (PDF)
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div className="aspect-[8.5/11] rounded-xl border border-border bg-card overflow-hidden">
              {/* PDF viewer placeholder - in production, embed actual PDF */}
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="rounded-full bg-primary/10 p-6 mb-6">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">CV Preview</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Upload your CV PDF to display it here. For now, users can download 
                  the CV using the button above.
                </p>
                <div className="mt-8 w-full max-w-md space-y-6 text-left">
                  <div>
                    <h4 className="font-semibold text-primary">Education</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      MSc Analytics & Management, London Business School (2024-2025)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Skills</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Python, SQL, AWS, Machine Learning, Product Strategy, Data Analysis
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Languages</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      English (Fluent), Italian (Native), French (Fluent)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CV;
