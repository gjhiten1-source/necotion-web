'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Youtube, Users, Workflow, Sparkles, CheckCircle2, Clock, Shield, TrendingUp, Menu, X } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - can integrate with backend or external service
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div
  className="text-3xl font-bold bg-clip-text text-transparent"
  style={{
    backgroundImage: "linear-gradient(90deg, #134582, #20C0D0)",
    fontFamily: "Mondapick, sans-serif",
    fontWeight: 400 ,
  }}
>
  NECOTION
</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-[#20C0D0] transition-colors">Services</button>
            <button onClick={() => scrollToSection('system')} className="hover:text-[#20C0D0] transition-colors">System</button>
            <button onClick={() => scrollToSection('workflow')} className="hover:text-[#20C0D0] transition-colors">Process</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-[#20c0d0] transition-colors">Benefits</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#134582] hover:bg-[#0e386b] text-gray-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-[#20C0D0] transition-colors">Services</button>
              <button onClick={() => scrollToSection('system')} className="text-left hover:text-[#20C0D0] transition-colors">System</button>
              <button onClick={() => scrollToSection('workflow')} className="text-left hover:text-[#20C0D0] transition-colors">Process</button>
              <button onClick={() => scrollToSection('benefits')} className="text-left hover:text-[#20C0D0] transition-colors">Benefits</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-[#134582] hover:bg-[#0e386b] w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#134582]/20 via-background to-[#20C0D0]/10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134582]/10 border border-[#0e386b]/20 text-[#20C0D0] text-sm mb-6">
              <Sparkles size={16} />
              <span>AI-Powered Content Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Scale Your Content
              <br />
              <span className="bg-gradient-to-r from-[#134582] to-[#20C0D0] bg-clip-text text-transparent">
                With Automation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We transform your content creation process with AI-driven automation, expert freelance teams, and full transparency through our proprietary Unificadas system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-[#134582] hover:bg-[#0e386b] text-lg px-8 text-gray-300">
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button onClick={() => scrollToSection('system')} size="lg" variant="outline" className="text-lg px-8 border-[#134582]/50 hover:bg-[#0e386b]/10">
                See How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#134582]">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Transparent</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#15548C]">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Automation</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#134582]">AI-First</div>
                <div className="text-sm text-muted-foreground mt-1">Approach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#20C0D0]">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for modern content creation and management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Youtube size={32} />,
                title: 'YouTube Automation',
                description: 'End-to-end automated YouTube content creation, from ideation to publishing.'
              },
              {
                icon: <Workflow size={32} />,
                title: 'Content Management',
                description: 'Streamlined content workflows with AI-powered optimization and scheduling.'
              },
              {
                icon: <Users size={32} />,
                title: 'Freelance Coordination',
                description: 'Expert management of distributed freelance teams for maximum efficiency.'
              },
              {
                icon: <Sparkles size={32} />,
                title: 'Workflow Optimization',
                description: 'Custom tools and processes to automate repetitive tasks and boost productivity.'
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card hover:bg-card/80 border-border transition-all duration-300 hover:scale-105 hover:border-[#134582]/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-[#134582]/10 flex items-center justify-center text-[#20C0D0] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unificadas System Section */}
      <section id="system" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
                <Shield size={16} />
                <span>Proprietary Technology</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-blue-400">Unificadas</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-6">
                Our revolutionary in-house system that provides complete transparency and real-time tracking of your project's progress.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Real-time project status updates',
                  'Complete transparency into every workflow step',
                  'Direct communication with your team',
                  'Automated reporting and analytics',
                  'Integrated task management'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request a Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-2xl blur-3xl" />
              <img 
                src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg" 
                alt="Unificadas Dashboard" 
                className="relative rounded-2xl border border-border shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#20C0D0]/70">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined, efficient workflow designed for maximum results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#134582] via-[#20C0D0] to-[#134582]" />

              {[
                {
                  step: '01',
                  title: 'Discovery & Strategy',
                  description: 'We analyze your needs and create a customized content automation strategy aligned with your goals.'
                },
                {
                  step: '02',
                  title: 'Team Assembly',
                  description: 'Our AI matches you with the perfect freelance team from our vetted network of specialists.'
                },
                {
                  step: '03',
                  title: 'Automation Setup',
                  description: 'We configure custom workflows and automation tools to streamline your content production.'
                },
                {
                  step: '04',
                  title: 'Production & Optimization',
                  description: 'Your content is created, refined, and published while you track everything in real-time through Unificadas.'
                }
              ].map((item, index) => (
                <div key={index} className={`relative mb-12 md:mb-16 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="bg-card border-border hover:border-[#20C0D0]/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-5xl font-bold text-[#20C0D0]/20 mb-2">{item.step}</div>
                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="hidden md:flex absolute left-1/2 w-12 h-12 -ml-6 rounded-full bg-[#15548C] items-center justify-center border-4 border-background z-10">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-[#20C0D0]/80">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not your typical agency. We're your automation partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={32} />,
                title: 'Scale Without Limits',
                description: 'Our automation infrastructure grows with you, handling 10x or 100x the content without proportional cost increases.'
              },
              {
                icon: <Shield size={32} />,
                title: 'Full Transparency',
                description: 'Unlike traditional agencies, you see everything. Track progress, communicate directly, and stay in control 24/7.'
              },
              {
                icon: <Clock size={32} />,
                title: 'Lightning Fast Delivery',
                description: 'AI-powered workflows and coordinated teams mean faster turnaround times without compromising quality.'
              },
              {
                icon: <Sparkles size={32} />,
                title: 'AI-First Approach',
                description: 'We leverage cutting-edge AI for ideation, optimization, and quality control at every step of the process.'
              },
              {
                icon: <Users size={32} />,
                title: 'Expert Team Management',
                description: 'We handle the complexity of coordinating freelance specialists, so you get results without the headaches.'
              },
              {
                icon: <Workflow size={32} />,
                title: 'Custom Solutions',
                description: 'Every business is unique. We build tailored automation workflows that fit your specific needs and goals.'
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:border-[#20C0D0]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#20C0D0]/20 to-[#134582]/20 flex items-center justify-center text-[#20C0D0] mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to <span className="text-[#20C0D0]/80">Automate</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss how we can transform your content creation process
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      required
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border min-h-32"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#134582] hover:bg-[#0e386b] text-gray-300">
                    Send Message
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-muted-foreground mb-4">Or reach us directly:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="border-[#134582]/50 hover:bg-[#134582]/10">
                      Schedule a Call
                    </Button>
                    <Button variant="outline" className="border-[#20C0D0]/50 hover:bg-[#20C0D0]/10">
                      WhatsApp Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
  <div
  className="inline-block text-2xl font-bold tracking-tight bg-clip-text text-transparent"
  style={{
    backgroundImage: "linear-gradient(90deg, #134582, #20C0D0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Mondapick, sans-serif",
    fontWeight: 400,
  }}
>
  NECOTION
</div>

              <p className="text-muted-foreground mb-4">
                AI-powered content automation and digital services for modern businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-[#20C0D0] transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('system')} className="hover:text-[#20C0D0] transition-colors">Unificadas System</button></li>
                <li><button onClick={() => scrollToSection('workflow')} className="hover:text-[#20C0D0] transition-colors">Our Process</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="hover:text-[#20C0D0] transition-colors">Benefits</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: hello@unificadas.com</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Next Connect Solutions Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}