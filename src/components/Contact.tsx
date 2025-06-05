
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactProps {
  isDark: boolean;
}

const Contact = ({ isDark }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form service like Formspree)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`py-20 relative overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect & Create Together
            </span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to discuss opportunities, collaborations, or innovative projects?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always excited to connect with fellow innovators, discuss cutting-edge projects, 
                or explore opportunities in data science and full-stack development. Let's build something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="text-white" size={24} />,
                  gradient: 'from-blue-600 to-purple-600',
                  title: 'Email',
                  value: 'tejaswinibaskarworkspace@gmail.com',
                  href: 'mailto:tejaswinibaskarworkspace@gmail.com'
                },
                {
                  icon: <Phone className="text-white" size={24} />,
                  gradient: 'from-green-600 to-blue-600',
                  title: 'Phone',
                  value: '+91 9789067436',
                  href: 'tel:+919789067436'
                },
                {
                  icon: <MapPin className="text-white" size={24} />,
                  gradient: 'from-purple-600 to-pink-600',
                  title: 'Location',
                  value: 'Chennai, Tamil Nadu, India',
                  href: '#'
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className={`p-4 bg-gradient-to-r ${contact.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{contact.title}</h4>
                    <a href={contact.href} className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300`}>
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-6 text-xl">Follow My Journey</h4>
              <div className="flex space-x-4">
                {[
                   {
      icon: <Github size={28} />,
      href: 'https://github.com/tj0220',
      color: 'hover:text-gray-700 dark:hover:text-white'
    },
    {
      icon: <Linkedin size={28} />,
      href: 'https://www.linkedin.com/in/tejaswini-baskar-650627287/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail size={28} />,
      href: 'mailto:tejaswinibaskarworkspace@gmail.com',
      color: 'hover:text-red-600'
    }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-4 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg ${
                      isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                    } ${social.color} group`}
                  >
                    <div className="transition-transform duration-300 group-hover:rotate-12">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative overflow-hidden`}>
            {/* Form Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send Me a Message
                </span>
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                          isDark 
                            ? 'bg-gray-800 border-gray-600 text-white focus:bg-gray-700' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                          isDark 
                            ? 'bg-gray-800 border-gray-600 text-white focus:bg-gray-700' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white'
                        }`}
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                        isDark 
                          ? 'bg-gray-800 border-gray-600 text-white focus:bg-gray-700' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white'
                      }`}
                      placeholder="Project Collaboration / Job Opportunity / General Inquiry"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-none ${
                        isDark 
                          ? 'bg-gray-800 border-gray-600 text-white focus:bg-gray-700' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white'
                      }`}
                      placeholder="Tell me about your project, share an opportunity, or just say hello! I'd love to hear from you."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-20">
  <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-2xl max-w-4xl mx-auto relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
    <div className="relative z-10">
      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Ready to Innovate Together?
      </h3>
      <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        I'm currently open to exciting opportunities, challenging projects, and meaningful collaborations. 
        Let's create something extraordinary that makes a real impact!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => window.open('https://calendly.com/tejaswinibaskarworkspace/30min', '_blank')}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-transform duration-300 font-semibold shadow-lg"
        >
          Schedule a Call
        </button>
        <button
          onClick={() => window.open('TEJASWINI BASKAR CV...pdf', '_blank')}
          className={`px-8 py-4 border-2 rounded-xl hover:scale-105 transition-all duration-300 font-semibold ${
            isDark
              ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900'
              : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
          }`}
        >
          View Resume
        </button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Contact;
