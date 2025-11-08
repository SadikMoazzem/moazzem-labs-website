"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Heart, Server, Code, Smartphone, Globe, DollarSign, ExternalLink, Shield, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  // Recurring monthly subscriptions
  const recurringTiers = [
    { 
      amount: '£2', 
      period: '/month',
      name: 'Hasanah Supporter 🌙',
      description: 'Build your book of good deeds monthly',
      stripeLink: 'https://buy.stripe.com/cNi4gzagTgd6ePQ00ccV201'
    },
    { 
      amount: '£5', 
      period: '/month',
      name: 'Barakah Builder 💚',
      description: 'Construct ongoing blessings for yourself',
      stripeLink: 'https://buy.stripe.com/28E00j4Wz9OIazAbIUcV204'
    },
    { 
      amount: '£10', 
      period: '/month',
      name: 'Ajr Accumulator ⭐',
      description: 'Maximize your continuous reward',
      stripeLink: 'https://buy.stripe.com/9B67sL9cP8KE6jk7sEcV205'
    },
  ];

  // One-time donations
  const oneTimeTiers = [
    { 
      amount: '£5',
      name: 'Quick Sadaqah 💚',
      description: 'One-time contribution to help maintain services',
      stripeLink: 'https://buy.stripe.com/7sY3cvex90e84bc14gcV203'
    },
    { 
      amount: '£10',
      name: 'Instant Khair ⭐',
      description: 'Make an immediate impact',
      stripeLink: 'https://buy.stripe.com/8x2aEX1Kn4uo5fgfZacV202'
    },
    { 
      amount: '£25',
      name: 'Major Boost 🚀',
      description: 'Significant one-time support',
      stripeLink: 'https://buy.stripe.com/9B68wP4Wz0e82349AMcV200'
    },
  ];

  const costs = [
    {
      icon: Server,
      title: 'Server Hosting',
      description: 'AWS, databases, and infrastructure',
      color: 'text-blue-400',
    },
    {
      icon: Code,
      title: 'Development & Maintenance',
      description: 'Continuous improvements and bug fixes',
      color: 'text-purple-400',
    },
    {
      icon: Smartphone,
      title: 'App Store Fees',
      description: 'Apple and Google Play developer accounts',
      color: 'text-pink-400',
    },
    {
      icon: Globe,
      title: 'Marketing & Outreach',
      description: 'Helping communities discover our services',
      color: 'text-green-400',
    },
    {
      icon: Shield,
      title: 'Domain & Security',
      description: 'SSL certificates and domain registrations',
      color: 'text-yellow-400',
    },
  ];

  const impact = [
    {
      icon: Users,
      title: 'Always Free',
      description: 'No paywalls, no premium features - everyone gets full access, forever',
    },
    {
      icon: Shield,
      title: 'No Ads, Ever',
      description: 'We will never show advertisements. Your experience remains clean and distraction-free',
    },
    {
      icon: Sparkles,
      title: 'Your Data is Sacred',
      description: 'We will never sell your data. Period. Your privacy is a trust we take seriously',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
        <div className="absolute inset-0 gradient-cosmic opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6 border border-white/20">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-gray-300">Support Our Mission</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Help Keep Our Services <span className="text-gradient">Free & Privacy-First</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your support enables us to provide free, ad-free, privacy-focused technology for Muslim communities worldwide. 
              Every contribution is a sadaqah jariyah - continuous charity that benefits both you and the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sadaqah Jariyah Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-gradient" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Sadaqah Jariyah</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                The Prophet Muhammad (ﷺ) said: <em className="text-white">&quot;When a person dies, all their deeds end except three: 
                a continuing charity (sadaqah jariyah), beneficial knowledge, or a righteous child who prays for them.&quot;</em> 
                (Sahih Muslim)
              </p>
              <p>
                By supporting these projects, you&apos;re contributing to technology that serves the Muslim community continuously. 
                Every prayer time notification, every masjid discovered, every connection made through our platforms - 
                <strong className="text-white"> InshāʾAllāh, these become ongoing rewards for both you and me</strong>.
              </p>
              <p>
                Your donation helps maintain services that thousands use daily to stay connected to their prayers and local masajid. 
                This is more than just financial support - it&apos;s an investment in the spiritual wellbeing of our community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Your <span className="text-gradient">Support</span> Goes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete transparency about the costs of running free, community-focused services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costs.map((cost, index) => (
              <motion.div
                key={cost.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <cost.icon className={`w-10 h-10 ${cost.color} mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{cost.title}</h3>
                <p className="text-gray-400">{cost.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Currently, all these costs come directly from my own pocket. Your support helps ensure these services 
              remain sustainable and can continue growing to serve more communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Tiers Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-gradient">Contribution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every amount helps. All donations are voluntary and greatly appreciated.
            </p>
          </motion.div>

          {/* Monthly Recurring Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">Monthly Support (Sadaqah Jariyah)</h3>
              <p className="text-gray-300">Ongoing contributions = ongoing reward</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recurringTiers.map((tier, index) => (
                <motion.div
                  key={tier.amount}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col border border-purple-500/20"
                >
                  <div className="text-center mb-4">
                    <div className="text-sm text-purple-400 font-medium mb-2">{tier.name}</div>
                    <div className="text-4xl font-bold text-gradient mb-1">
                      {tier.amount}<span className="text-xl text-gray-400">{tier.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>
                  <motion.a
                    href={tier.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto gradient-purple text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Subscribe Monthly
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* One-Time Donations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">One-Time Donation</h3>
              <p className="text-gray-300">Give once, impact forever</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {oneTimeTiers.map((tier, index) => (
                <motion.div
                  key={tier.amount}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  <div className="text-center mb-4">
                    <div className="text-sm text-blue-400 font-medium mb-2">{tier.name}</div>
                    <div className="text-4xl font-bold text-gradient mb-1">{tier.amount}</div>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>
                  <motion.a
                    href={tier.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto glass-effect text-white px-6 py-3 rounded-full font-medium border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Donate Once
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-12"
          >
            🔒 Secure payments powered by Stripe. You&apos;ll be redirected to Stripe&apos;s secure checkout.
          </motion.p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Your Support <span className="text-gradient">Enables</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your contributions help us maintain our core values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {impact.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-purple mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Sacred Promise to You</h3>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-6">
              <p>
                <strong className="text-white">✓ Always Free:</strong> These services will forever remain free for the community. 
                No features will ever be locked behind paywalls.
              </p>
              <p>
                <strong className="text-white">✓ No Advertisements:</strong> We will never show ads. Your spiritual journey and 
                connection to your prayers deserves a distraction-free experience.
              </p>
              <p>
                <strong className="text-white">✓ Your Data is Safe:</strong> We will never sell your data to anyone. Your trust 
                is an amanah (trust) we hold sacred, and your privacy will always be protected.
              </p>
              <p className="text-white font-medium pt-4">
                Your donation simply helps keep the lights on and allows us to continue serving communities with integrity.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <p className="text-xl text-gray-300 mb-3">
                If you can&apos;t donate, please keep us in your du&apos;a.
              </p>
              <p className="text-lg text-purple-300 italic">
                May Allah accept this work as sadaqah jariyah for all of us, and may He grant us sincerity in our intentions. Ameen.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                JazakAllahu Khayran for your support, whether through donations or du&apos;a. 🤲
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Link href="/">
                <div className="text-2xl font-bold text-gradient mb-2 cursor-pointer">
                  Moazzem Labs
                </div>
              </Link>
              <p className="text-gray-400">Innovation with Integrity</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about-me" className="text-gray-400 hover:text-white transition-colors">
                About Me
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Moazzem Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}


