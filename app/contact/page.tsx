import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-custom text-center">
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-primary mb-6">Contact Us</h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ready to discuss your legal matter? Get in touch with our expert team 
              for a free consultation and personalized legal guidance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-6">Why Choose Modi & Company Advocates?</h2>
            <p className="text-body max-w-3xl mx-auto">
              With over 24 years of experience and a 90% success rate, we provide 
              exceptional legal services tailored to your specific needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Expert Legal Team</h3>
              <p className="text-body">
                Our experienced attorneys specialize in various practice areas, 
                ensuring you receive the best legal representation.
              </p>
            </AnimatedSection>

            <AnimatedSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">90% Success Rate</h3>
              <p className="text-body">
                Our proven track record demonstrates our commitment to achieving 
                favorable outcomes for our clients.
              </p>
            </AnimatedSection>

            <AnimatedSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Personalized Service</h3>
              <p className="text-body">
                We provide personalized attention to each client, understanding 
                your unique situation and legal needs.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
} 