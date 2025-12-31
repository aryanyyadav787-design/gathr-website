import React, { useState, useEffect, useRef } from 'react';
import { Button } from './components/Button';
import { BackgroundMusic } from './components/BackgroundMusic';
import { SplashScreen } from './components/SplashScreen';
import { ArrowRight, Music, Clock, Sparkles, Check, Mail, Zap, Users, Star } from 'lucide-react';

// --- Custom Animation Component ---
const Reveal = ({ children, className = "", delay = 0, threshold = 0.1 }: { children: React.ReactNode, className?: string, delay?: number, threshold?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-[2px]'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Custom Logo Component ---
// Using exact spacing requested (-11px) with the Milker font.
// Removed py-2 to ensure exact height calculations for scaling.
const GathrLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center justify-center select-none hover:scale-105 transition-transform duration-300 ${className}`}>
    <span className="font-milker text-brand text-5xl tracking-wider opacity-40 blur-[0.5px] leading-none">GATHR</span>
    <span className="font-milker text-brand text-5xl tracking-wider opacity-70 -mt-[11px] leading-none">GATHR</span>
    <span className="font-milker text-black text-5xl tracking-wider z-10 relative -mt-[11px] leading-none">GATHR</span>
    <span className="font-milker text-brand text-5xl tracking-wider opacity-70 -mt-[11px] leading-none">GATHR</span>
    <span className="font-milker text-brand text-5xl tracking-wider opacity-40 blur-[0.5px] -mt-[11px] leading-none">GATHR</span>
  </div>
);

// --- Components for Landing Page ---

const PhonePreview = () => (
  <div className="relative w-[320px] h-[640px] bg-white border-4 border-black rounded-[3rem] shadow-neo-xl overflow-hidden flex flex-col mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
    {/* Phone Notch/Dynamic Island */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-xl z-30"></div>

    {/* Screen Content */}
    <div className="w-full h-full bg-white flex flex-col relative font-display text-black">

      {/* Top Image Section - Height reduced to 42% to make room for text */}
      <div className="h-[42%] w-full relative">
        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Profile" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Compatibility Score Bubble */}
        <div className="absolute -bottom-8 right-2 bg-black text-brand rounded-full w-24 h-24 flex flex-col items-center justify-center border-4 border-brand z-20 shadow-lg transform rotate-[-5deg]">
          <span className="text-3xl leading-none tracking-tighter">92%</span>
          <span className="text-[0.6rem] leading-none text-center font-sans font-bold text-white mt-1">AI<br />COMPATIBILITY<br />SCORE</span>
        </div>
      </div>

      {/* Bottom Details Section - Pushed up with reduced padding */}
      <div className="flex-1 px-4 pt-6 pb-20 relative flex flex-col bg-white">
        {/* Name */}
        <h2 className="text-3xl uppercase mb-2 leading-none tracking-tight">ANJANAY, 20</h2>

        <div className="space-y-2">
          {/* Shared Interests */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Zap size={12} className="fill-yellow-400 text-yellow-400" />
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans">SHARED INTERESTS</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="bg-brand border border-black px-3 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">OUTDOOR ACTIVITIES</span>
              <span className="bg-[#E0FF60] border border-black px-3 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">MUSIC</span>
            </div>
            <p className="text-[10px] font-sans font-bold italic text-black">Trekking, Evening Walk</p>
          </div>

          {/* Shared Music Vibe */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Music size={12} className="text-purple-500" />
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans">SHARED MUSIC VIBE</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="bg-[#E0FF60] border border-black px-3 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">POP-ROCK</span>
              <span className="bg-[#E0FF60] border border-black px-3 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">HIP-HOP</span>
            </div>
            <p className="text-[10px] font-sans font-bold italic text-black">Drake, Ken Carson</p>
          </div>

          {/* Quote */}
          <div className="mt-1">
            <p className="text-sm font-black uppercase text-center leading-tight tracking-tight">"LOOKING FOR PEEPS WHO ARE READY TO SNEAK OUT AT 2:00 AM"</p>
          </div>
        </div>
      </div>

      {/* Sticky Music Bar */}
      <div className="absolute bottom-[4.5rem] left-0 right-0 bg-brand border-y-2 border-black py-2 px-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 overflow-hidden flex-1">
          {/* Updated to Drake album artwork */}
          <img src="https://upload.wikimedia.org/wikipedia/en/6/6a/PartyNextDoor_and_Drake_-_Some_Sexy_Songs_4_U.png" className="w-10 h-10 rounded border border-black shrink-0 object-cover" alt="album" />
          <div className="flex flex-col overflow-hidden">
            <span className="text-[8px] font-bold uppercase leading-none truncate mb-0.5">YOU BOTH LOVE LISTENING TO</span>
            <span className="text-xs font-black uppercase leading-none truncate">GIMME A HUG - DRAKE</span>
          </div>
        </div>
        <div className="flex -space-x-2 pl-2">
          {[1, 2, 3].map(i => (
            <img key={i} src={`https://picsum.photos/seed/${i + 20}/40/40`} className="w-6 h-6 rounded-full border border-black" />
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="absolute bottom-3 left-3 right-3 flex gap-3 z-20">
        <button className="h-12 w-20 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-neo hover:translate-y-0.5 hover:shadow-none transition-all">
          <span className="text-2xl">✕</span>
        </button>
        <button className="h-12 flex-1 bg-brand border-2 border-black rounded-xl flex items-center justify-center shadow-neo hover:translate-y-0.5 hover:shadow-none transition-all gap-2 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🤝</span>
          <span className="font-black text-xl uppercase tracking-tighter">CONNECT</span>
        </button>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <div className="bg-white border-2 border-black p-6 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all">
    <div className={`w-12 h-12 ${color} border-2 border-black flex items-center justify-center mb-4 shadow-neo-sm`}>
      <Icon size={24} className="text-black" />
    </div>
    <h3 className="font-display text-xl uppercase mb-2">{title}</h3>
    <p className="text-gray-600 font-medium leading-relaxed">{description}</p>
  </div>
);

const Marquee = () => (
  <div className="bg-black text-brand py-3 border-y-2 border-black marquee-container">
    <div className="marquee-content font-display text-xl uppercase tracking-widest">
      FIND YOUR TRIBE • MUSIC TASTE MATCHING • HACKATHONS • GYM BUDDIES • LATE NIGHT DRIVES • STUDY SESSIONS • GAMING • ART JAMS • FIND YOUR TRIBE • MUSIC TASTE MATCHING • HACKATHONS • GYM BUDDIES •
    </div>
  </div>
);

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [startMusic, setStartMusic] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format with proper domain extension
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address with a proper domain extension (e.g., .com, .net, .org)');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      // Web3Forms access key for email collection
      formData.append('access_key', 'acecfde9-5614-4ec0-972e-d80f1f32d35a');
      formData.append('email', email);
      formData.append('subject', 'New Waitlist Signup for GATHR!');
      formData.append('from_name', 'GATHR Waitlist');
      // Auto-reply settings
      formData.append('replyto', email);
      formData.append('redirect', 'false');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setEmail('');
      } else {
        alert('Something went wrong. Please try again!');
      }
    } catch (error) {
      alert('Failed to submit. Please try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSplashEnter = (choice: 'yes' | 'no') => {
    // Dismiss splash immediately for smooth UX
    setShowSplash(false);

    // Add slight delay before starting music to ensure smooth transition on mobile
    setTimeout(() => {
      setStartMusic(true);
    }, 100);

    // Could track the choice for analytics if needed
    console.log('User selected:', choice);
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onEnter={handleSplashEnter} />}

      {/* Background Music - Only starts after user interaction with splash */}
      {startMusic && <BackgroundMusic youtubeVideoId="s6kqFXDL8RQ" />}

      {/* Main content - Only show after splash screen is dismissed */}
      {!showSplash && (
        <div className="min-h-screen bg-[#FDFDFD] text-black overflow-x-hidden">

          {/* Navbar */}
          <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-black h-24 md:h-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between h-full">
              {/* Logo Container - Uses absolute positioning on child to prevent layout issues with scaling */}
              <div className="relative h-full w-32 md:w-40 flex items-center">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 origin-left transform scale-[0.35] md:scale-[0.4]">
                  <GathrLogo />
                </div>
              </div>

              <Button onClick={scrollToWaitlist} size="md" className="hidden md:flex font-milker text-lg tracking-widest">Join Early Access</Button>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal className="flex flex-col gap-6 z-10">
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-yellow-300 border-2 border-black font-bold text-xs uppercase shadow-neo-sm transform -rotate-1">
                <Zap size={14} className="fill-black" />
                <span>AI-Powered Socializing</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">
                Don't Just Scroll. <br />
                <span className="bg-brand px-2">GATHR.</span>
              </h1>

              <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-lg leading-relaxed">
                The social app that connects you based on your <span className="font-bold underline decoration-brand decoration-4">music taste</span> and <span className="font-bold underline decoration-brand decoration-4">real-time interests</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button onClick={scrollToWaitlist} size="lg" className="font-milker text-xl tracking-widest px-10 hover:bg-black hover:text-white transition-colors duration-200">
                  JOIN WAITLIST <ArrowRight size={20} />
                </Button>
                <div className="flex items-center gap-2 px-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" alt="user" />
                    ))}
                  </div>
                  <span className="text-sm font-bold">200+ waitlist</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className="relative flex justify-center lg:justify-end">
              <div className="absolute top-10 right-10 w-64 h-64 bg-brand rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <PhonePreview />

              {/* Floating badges */}
              <div className="absolute top-1/4 -left-4 md:left-10 bg-white border-2 border-black p-3 shadow-neo rotate-[-6deg] animate-float hidden sm:block">
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-500" size={20} />
                  <div>
                    <p className="font-bold text-xs uppercase">Hackathon in 2h</p>
                    <p className="text-[10px] text-gray-500">Looking for a designer</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 -right-4 bg-white border-2 border-black p-3 shadow-neo rotate-[3deg] hidden sm:block animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Music className="text-purple-500" size={20} />
                  <div>
                    <p className="font-bold text-xs uppercase">Vibe Match</p>
                    <p className="text-[10px] text-gray-500">Both love The Weeknd</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Marquee />

          {/* Features Grid */}
          <section className="py-24 px-4 bg-gray-50 border-b-2 border-black">
            <div className="max-w-7xl mx-auto">
              <Reveal className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">Why GATHR?</h2>
                <p className="text-xl font-medium text-gray-600">Stop swiping on faces. Start matching on vibes.</p>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Reveal delay={100} className="h-full">
                  <FeatureCard
                    icon={Music}
                    color="bg-purple-300"
                    title="Music Compatibility"
                    description="Our AI analyzes your listening history to find people who actually understand why that one song makes you cry. No more passing the aux with anxiety."
                  />
                </Reveal>
                <Reveal delay={300} className="h-full">
                  <FeatureCard
                    icon={Clock}
                    color="bg-red-300"
                    title="Time-Limited Activities"
                    description="Need a 4th player for COD right now? Or a study buddy for the next 2 hours? Post a time-limited activity and get grouped instantly."
                  />
                </Reveal>
                <Reveal delay={500} className="h-full">
                  <FeatureCard
                    icon={Sparkles}
                    color="bg-brand"
                    title="Interest Matching"
                    description="We go beyond 'I like travel'. Our AI finds granular interest overlaps so you can skip the small talk and dive straight into the good stuff."
                  />
                </Reveal>
              </div>
            </div>
          </section>

          {/* Waitlist Section */}
          <section id="waitlist" className="py-24 px-4 bg-[#C0FF01] relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <Reveal threshold={0.2} className="w-full">
                <div className="bg-white border-4 border-black p-8 md:p-12 shadow-neo-xl transform md:rotate-1 transition-transform hover:rotate-0">
                  {!submitted ? (
                    <>
                      <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 leading-none">Get In Before <br />It Goes Viral.</h2>
                      <p className="text-lg font-medium text-gray-600 mb-8">
                        We're launching soon to a limited group of users. Secure your spot and find your tribe early.
                      </p>

                      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            required
                            pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}"
                            title="Please enter a valid email with a proper domain extension (e.g., .com, .net, .org)"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border-2 border-black font-bold bg-gray-50 focus:outline-none focus:ring-4 focus:ring-brand/50 transition-all placeholder:text-gray-400"
                          />
                        </div>
                        <Button type="submit" size="lg" disabled={isSubmitting} className="font-milker text-xl tracking-widest bg-brand text-black hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                          {isSubmitting ? 'JOINING...' : 'JOIN WAITLIST'}
                        </Button>
                      </form>
                      <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">No Spam. Only Vibes.</p>
                    </>
                  ) : (
                    <div className="py-12 flex flex-col items-center">
                      <div className="w-20 h-20 bg-brand border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-neo animate-bounce">
                        <Check size={40} className="text-black" />
                      </div>
                      <h3 className="font-display text-3xl uppercase mb-2">You're on the list!</h3>
                      <p className="font-medium text-gray-600">Keep an eye on your inbox. We'll be in touch.</p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black text-white py-12 px-4 border-t-2 border-brand">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl text-brand mb-2 tracking-tighter">GATHR</h2>
                <p className="text-gray-400 text-sm">© 2026 Gathr Social Inc.</p>
              </div>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/joingathrapp.in?igsh=eW82bXM4OGw0cTdv" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-brand transition-colors">INSTAGRAM</a>
              </div>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}