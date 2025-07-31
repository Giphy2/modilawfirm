import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react';
import { practiceAreas } from '@/data/practice-areas';
import { teamMembers } from '@/data/team';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/modibg.jpg"
            alt="Professional law office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-primary mb-6 text-white">
              <span className="text-gradient">Excellence</span> in Legal Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              With 24 years of experience and a 90% success rate, Modi & Company Advocates LLP 
              provides comprehensive legal solutions across Kenya. Our expert team delivers 
              exceptional results in conveyancing, commercial law, insurance, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/practice-areas" className="btn-secondary bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Our Practice Areas
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCard index={0} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">24</h3>
              <p className="text-secondary-600">Years of Experience</p>
            </AnimatedCard>
            
            <AnimatedCard index={1} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">90%</h3>
              <p className="text-secondary-600">Success Rate</p>
            </AnimatedCard>
            
            <AnimatedCard index={2} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">100+</h3>
              <p className="text-secondary-600">Expert Team</p>
            </AnimatedCard>
            
            <AnimatedCard index={3} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">50+</h3>
              <p className="text-secondary-600">Completed Projects</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-6">Our Practice Areas</h2>
            <p className="text-body max-w-3xl mx-auto">
              We offer comprehensive legal services across multiple practice areas, 
              ensuring our clients receive expert guidance for all their legal needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.slice(0, 6).map((area, index) => (
              <AnimatedCard
                key={area.id}
                index={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{area.title}</h3>
                <p className="text-body mb-4">{area.description}</p>
                <Link 
                  href={`/practice-areas/${area.slug}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </AnimatedCard>
            ))}
          </div>
          
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/practice-areas" className="btn-primary">
              View All Practice Areas
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-6">Meet Our Expert Team</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our experienced legal professionals are dedicated to providing exceptional 
              service and achieving the best possible outcomes for our clients.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedCard
                key={member.id}
                index={index}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                <p className="text-sm text-secondary-600 mb-4">{member.experience}</p>
                <div className="space-y-2">
                  {member.specialties.slice(0, 3).map((specialty, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/team" className="btn-secondary">
              Meet Full Team
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Animated Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let our expert team 
              help you navigate your legal challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Schedule Consultation
              </Link>
              <Link href="/practice-areas" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
} 