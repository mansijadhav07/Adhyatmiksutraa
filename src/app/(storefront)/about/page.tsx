"use client";

import Link from "next/link";
import { Calendar, ShoppingBag, Users, Award, Star, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        /* Paper texture and creative effects */
        .paper-texture {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%);
          position: relative;
        }
        
        .paper-texture::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.01) 2px,
              rgba(0, 0, 0, 0.01) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.01) 2px,
              rgba(0, 0, 0, 0.01) 4px
            );
          pointer-events: none;
        }

        .letter-paper {
          background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
          box-shadow: 
            0 1px 3px rgba(0, 0, 0, 0.1),
            0 4px 12px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          position: relative;
        }

        .letter-paper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(90deg, transparent 0%, transparent 40px, rgba(16, 185, 129, 0.1) 40px, rgba(16, 185, 129, 0.1) 42px, transparent 42px),
            repeating-linear-gradient(0deg, transparent 0%, transparent 24px, rgba(0, 0, 0, 0.03) 24px, rgba(0, 0, 0, 0.03) 25px);
          pointer-events: none;
        }

        .vintage-paper {
          background: 
            radial-gradient(circle at 30% 20%, rgba(245, 158, 11, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #fefefe 0%, #faf9f7 100%);
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(0, 0, 0, 0.02);
        }

        .handwritten-style {
          position: relative;
        }

        .handwritten-style::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(16, 185, 129, 0.3) 20%, 
            rgba(20, 184, 166, 0.4) 50%, 
            rgba(16, 185, 129, 0.3) 80%, 
            transparent 100%);
          border-radius: 1px;
          transform: scaleX(0);
          transform-origin: left;
          animation: underline-draw 2s ease-out 0.5s forwards;
        }

        @keyframes underline-draw {
          to {
            transform: scaleX(1);
          }
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .floating-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2));
          border-radius: 50%;
          animation: float-gentle 8s ease-in-out infinite;
        }

        .floating-dot:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .floating-dot:nth-child(2) { top: 60%; left: 85%; animation-delay: 2s; }
        .floating-dot:nth-child(3) { top: 80%; left: 20%; animation-delay: 4s; }
        .floating-dot:nth-child(4) { top: 30%; left: 70%; animation-delay: 6s; }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-10px) rotate(90deg); opacity: 0.6; }
          50% { transform: translateY(-5px) rotate(180deg); opacity: 0.4; }
          75% { transform: translateY(-15px) rotate(270deg); opacity: 0.7; }
        }

        .torn-edge {
          position: relative;
        }

        .torn-edge::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            #ffffff 2%, 
            transparent 4%, 
            #ffffff 6%, 
            transparent 8%, 
            #ffffff 10%, 
            transparent 12%);
          background-size: 20px 6px;
          background-repeat: repeat-x;
        }

        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          font-size: 8rem;
          color: rgba(16, 185, 129, 0.03);
          font-weight: 100;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .content-layer {
          position: relative;
          z-index: 1;
        }

        .ink-blot {
          position: absolute;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
          border-radius: 50% 40% 60% 30%;
          animation: ink-spread 3s ease-out infinite;
        }

        .ink-blot:nth-child(1) { top: 15%; right: 10%; animation-delay: 1s; }
        .ink-blot:nth-child(2) { bottom: 20%; left: 15%; animation-delay: 3s; }

        @keyframes ink-spread {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.2); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.1; }
        }

        .folded-corner {
          position: relative;
          overflow: hidden;
        }

        .folded-corner::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background: linear-gradient(-45deg, transparent 46%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.02) 54%, transparent 54%);
          transform: rotate(0deg);
        }

        .stamp-effect {
          position: relative;
          border: 2px dashed rgba(16, 185, 129, 0.3);
          background: rgba(16, 185, 129, 0.02);
        }

        .stamp-effect::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 4px;
        }
      `}</style>

    <div className="min-h-screen bg-stone-50 text-stone-800 paper-texture">
      {/* Floating decorative elements */}
      <div className="floating-elements">
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/80 to-stone-50"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/assets/image2.jpg" 
            alt="Healing background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-blue-50/40"></div>
        
        {/* Watermark */}
        <div className="watermark">Sutraa</div>
        
        {/* Ink blots */}
        <div className="ink-blot"></div>
        <div className="ink-blot"></div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-24 content-layer">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/80 backdrop-blur-sm border border-emerald-200 text-sm text-emerald-700 mb-8 shadow-sm stamp-effect">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              About Adhyatmik Sutraa
            </div>
            <h1 className="text-5xl font-semibold text-stone-900 mb-6 leading-tight handwritten-style">
              Every Moment, A <span className="text-gradient-peacock">Companion</span> in Healing
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Sonali Bhattacharya bridges ancient occult wisdom, angel healing, and modern coaching to help seekers align with their higher purpose and restore harmony.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 stamp-effect">10+ Years Practice</div>
              <div className="px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-sm text-teal-700 stamp-effect">10,000+ Seekers</div>
              <div className="px-3 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sm text-sky-700 stamp-effect">50+ Courses</div>
              <div className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-sm text-blue-700 stamp-effect">Angel Healer</div>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg shadow-emerald-500/25"
              >
                <Calendar className="w-4 h-4" />
                Book a Session
              </Link>
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 bg-white/80 backdrop-blur-sm rounded-lg font-medium hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-stone-200 vintage-paper">
        <div className="max-w-7xl mx-auto px-8 py-16 content-layer">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient-peacock mb-2 handwritten-style">10,000+</div>
              <div className="text-sm font-medium text-stone-700 mb-1">Seekers Guided</div>
              <div className="text-xs text-stone-500">Towards purpose-driven living</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient-peacock mb-2 handwritten-style">50+</div>
              <div className="text-sm font-medium text-stone-700 mb-1">Occult Courses</div>
              <div className="text-xs text-stone-500">Mastering Tarot & Angel Healing</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient-peacock mb-2 handwritten-style">10+</div>
              <div className="text-sm font-medium text-stone-700 mb-1">Years Practice</div>
              <div className="text-xs text-stone-500">In holistic energy healing</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient-peacock mb-2 handwritten-style">10,000+</div>
              <div className="text-sm font-medium text-stone-700 mb-1">Lives Transformed</div>
              <div className="text-xs text-stone-500">With occult & healing wisdom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="border-b border-stone-200 letter-paper">
        <div className="max-w-7xl mx-auto px-8 py-24 content-layer">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shadow-lg folded-corner">
                <img 
                  src="/assets/image2.jpg" 
                  alt="Sonali Bhattacharya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-lg p-4 shadow-lg letter-paper">
                <div className="text-lg font-semibold text-stone-900 handwritten-style">Sonali Bhattacharya</div>
                <div className="text-sm text-stone-600 mb-3">Founder & Healer · Adhyatmik Sutraa</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded stamp-effect">Tarot Reader</span>
                  <span className="px-2 py-1 text-xs bg-teal-50 text-teal-700 border border-teal-200 rounded stamp-effect">Numerologist</span>
                  <span className="px-2 py-1 text-xs bg-sky-50 text-sky-700 border border-sky-200 rounded stamp-effect">Angel Healer</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-emerald-200 text-sm text-emerald-700 mb-6 shadow-sm stamp-effect">
                <Star className="w-3 h-3" />
                The Founder
              </div>
              <h2 className="text-3xl font-semibold text-stone-900 mb-4 handwritten-style"><span className="text-gradient-peacock">Sonali Bhattacharya</span></h2>
              <p className="text-stone-600 mb-6">Holistic Healer, Occult Consultant & Life Coach</p>
              
              <div className="space-y-4 mb-8">
                <p className="text-stone-700 leading-relaxed">
                  Sonali Bhattacharya is a holistic healer and life coach, providing divine and tarot services for the last 10 years. She started as a Reiki healer but went on to offer services like tarot, numerology, angel healing, occult, etc. Sonali helps her clients with spiritual and emotional awakening.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  With deep compassion and over a decade of practice, she has guided over 10,000 seekers globally. She specializes in Tarot card reading, numerology, angel healing, and ancient spells, helping individuals unlock their ultimate potential.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  As the founder of Adhyatmik Sutraa, Sonali creates sacred, transformative environments where seekers can clear blocks, realign their energies, and discover deep self-awareness.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors shadow-sm letter-paper torn-edge">
                <h3 className="text-sm font-medium text-emerald-700 mb-4 uppercase tracking-wide handwritten-style">Key Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-700">Guided over 10,000 individuals towards their authentic path and awakening</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-700">Offers over 50 comprehensive courses in occult sciences and spiritual healing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-700">Created a safe remote healing space for seekers worldwide</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-700">Expertise in 10+ core spiritual modalities including Angel Healing & Merlin Magic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-b border-stone-200 vintage-paper">
        <div className="max-w-7xl mx-auto px-8 py-24 content-layer">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-teal-200 text-sm text-teal-700 mb-6 shadow-sm stamp-effect">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-sky-500"></div>
              Our Story
            </div>
            <h2 className="text-3xl font-semibold text-stone-900 mb-4 handwritten-style">The <span className="text-gradient-peacock">Adhyatmik Sutraa</span> Journey</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-stone-700 leading-relaxed">
                In an ever-evolving and hyper-dynamic world, one vital aspect that has quietly receded to the background — both in thought and action — is our spiritual and mental alignment. The modern individual, perpetually short on time, finds quick fixes and surface distraction, while the ancient wisdom of practices like tarot, angel healing, and numerology is forgotten.
              </p>
              <p className="text-stone-700 leading-relaxed">
                The irony runs deep: we understand the need for change, we've heard echoes of the solution — but a truly holistic, accessible, and enduring approach remains elusive. What we find are fragments: a tarot card reader here, a numerologist there — all in isolation, often beyond reach.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Before founding Adhyatmik Sutraa, Sonali Bhattacharya spent a decade practicing reiki, tarot reading, and angel healing, treating seekers and teaching occult science to aspiring practitioners. The growing demand compelled her to launch this unified platform.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-stone-200 rounded-lg p-6 hover:border-emerald-200 hover:bg-emerald-50/20 transition-colors shadow-sm letter-paper folded-corner">
                <blockquote className="text-lg text-stone-800 italic mb-4 handwritten-style">
                  "Our vision is to open doors of healing and awakening for more people so that they achieve what they have always wanted in their lives, changing life with teaching."
                </blockquote>
                <cite className="text-sm text-emerald-700 font-medium">— Sonali Bhattacharya</cite>
              </div>
              
              <div className="bg-white border border-stone-200 rounded-lg p-6 hover:border-teal-200 hover:bg-teal-50/20 transition-colors shadow-sm letter-paper">
                <p className="text-stone-700 leading-relaxed">
                  At Adhyatmik Sutraa, our approach emphasises <span className="text-emerald-600 font-medium handwritten-style">simplicity</span> — introducing daily rituals that integrate seamlessly into one's existing lifestyle, without disrupting its rhythm, yet <span className="text-teal-600 font-medium handwritten-style">gently transforming it from within.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="border-b border-stone-200 letter-paper">
        <div className="max-w-7xl mx-auto px-8 py-24 content-layer">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-sky-200 text-sm text-sky-700 mb-6 shadow-sm stamp-effect">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500"></div>
              The Adhyatmik Sutraa Way
            </div>
            <h2 className="text-3xl font-semibold text-stone-900 mb-4 handwritten-style">Our <span className="text-gradient-peacock">Approach</span></h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Healing should be simple, practical, and accessible to everyone
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Simple", desc: "No complexity, no overwhelm — just intuitive tools and easy-to-follow guidance that anyone can use from day one.", image: "/assets/approach-simple.jpg" },
              { num: "02", title: "Practical", desc: "Designed to integrate seamlessly into busy modern lives without disrupting your existing rhythm or routine.", image: "/assets/approach-practical.jpg" },
              { num: "03", title: "Accessible", desc: "Affordable, understandable, and available to anyone seeking inner growth — no prior experience required.", image: "/assets/approach-accessible.jpg" },
              { num: "04", title: "Energy-Driven", desc: "Every session is intentionally charged to support specific emotional, physical and spiritual outcomes.", image: "/assets/approach-energy.jpg" },
              { num: "05", title: "Holistic", desc: "We address the root — not just symptoms — across emotional, mental, physical, and spiritual layers of being.", image: "/assets/approach-holistic.jpg" },
              { num: "06", title: "Transformative", desc: "Real, lasting change through consistent practice, personalized guidance, and genuine compassion.", image: "/assets/approach-simple.jpg" }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:border-stone-300 hover:shadow-lg transition-all duration-200 shadow-sm letter-paper folded-corner">
                <div className="aspect-video relative bg-stone-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-2xl font-bold text-stone-400 handwritten-style">{item.num}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 mb-3 handwritten-style">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="border-b border-stone-200 vintage-paper">
        <div className="max-w-7xl mx-auto px-8 py-24 content-layer">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-blue-200 text-sm text-blue-700 mb-6 shadow-sm stamp-effect">
              <Award className="w-3 h-3" />
              Modalities
            </div>
            <h2 className="text-3xl font-semibold text-stone-900 mb-4 handwritten-style">What Sonali Bhattacharya <span className="text-gradient-peacock">Practices</span></h2>
            <p className="text-stone-600">Expert in tarot card reading, numerology, angel healing and wiccan spells</p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Tarot Card Reading", "Numerology", "Angel Healing", "Salt Magic",
              "Merlin Magic", "Wiccan Spell Craft", "Runes Prediction", "Reiki Healing",
              "Occult Consulting", "Spiritual Counseling", "Meditation Guidance", "Energy Clearing"
            ].map((modality, index) => {
              const colors = [
                { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', hover: 'hover:border-emerald-300 hover:bg-emerald-100' },
                { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', hover: 'hover:border-teal-300 hover:bg-teal-100' },
                { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700', hover: 'hover:border-sky-300 hover:bg-sky-100' },
                { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:border-blue-300 hover:bg-blue-100' },
                { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', hover: 'hover:border-indigo-300 hover:bg-indigo-100' }
              ];
              const colorSet = colors[index % colors.length];
              return (
                <span 
                  key={index} 
                  className={`px-3 py-2 ${colorSet.bg} ${colorSet.border} rounded-lg text-sm ${colorSet.text} ${colorSet.hover} transition-colors shadow-sm stamp-effect`}
                >
                  {modality}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="border-b border-stone-200 letter-paper">
        <div className="max-w-7xl mx-auto px-8 py-24 content-layer">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-indigo-200 text-sm text-indigo-700 mb-6 shadow-sm stamp-effect">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500"></div>
              Our Environment
            </div>
            <h2 className="text-3xl font-semibold text-stone-900 mb-4 handwritten-style">Healing <span className="text-gradient-peacock">Spaces</span> & Moments</h2>
            <p className="text-stone-600">Creating sacred spaces for transformation and growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 aspect-[16/10] rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shadow-lg folded-corner">
              <img 
                src="/assets/image1.jpg" 
                alt="Main healing space"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="aspect-square rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shadow-lg folded-corner">
                <img 
                  src="/assets/image2.jpg" 
                  alt="Healing session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-6 text-center hover:border-emerald-200 hover:bg-emerald-50/20 transition-colors shadow-sm letter-paper">
                <div className="text-2xl font-bold text-gradient-peacock mb-2 handwritten-style">1000+</div>
                <div className="text-sm text-stone-600">Successful Healing Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vintage-paper">
        <div className="max-w-7xl mx-auto px-8 py-24 content-layer">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-emerald-100 to-blue-100 border border-emerald-200 rounded-lg flex items-center justify-center shadow-sm folded-corner">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-stone-900 mb-6 handwritten-style">
              Ready to Begin Your <span className="text-gradient-peacock">Healing Journey?</span>
            </h2>
            <p className="text-xl text-stone-600 mb-8">
              Join our community and discover the transformative power of holistic healing — simple, practical, and made for your life.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg shadow-emerald-500/25"
              >
                <Calendar className="w-4 h-4" />
                Book a Session
              </Link>
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 bg-white/80 backdrop-blur-sm rounded-lg font-medium hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}