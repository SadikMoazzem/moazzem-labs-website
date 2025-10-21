'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ChevronUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const FloatingDonationBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const recurringTiers = [
    { 
      amount: '£2', 
      period: '/mo',
      stripeLink: 'https://buy.stripe.com/cNi4gzagTgd6ePQ00ccV201'
    },
    { 
      amount: '£5', 
      period: '/mo',
      stripeLink: 'https://buy.stripe.com/28E00j4Wz9OIazAbIUcV204'
    },
    { 
      amount: '£10', 
      period: '/mo',
      stripeLink: 'https://buy.stripe.com/9B67sL9cP8KE6jk7sEcV205'
    },
  ];

  const oneTimeTiers = [
    { 
      amount: '£5',
      stripeLink: 'https://buy.stripe.com/7sY3cvex90e84bc14gcV203'
    },
    { 
      amount: '£10',
      stripeLink: 'https://buy.stripe.com/8x2aEX1Kn4uo5fgfZacV202'
    },
    { 
      amount: '£25',
      stripeLink: 'https://buy.stripe.com/9B68wP4Wz0e82349AMcV200'
    },
  ];

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-2 sm:pb-4">
        <div className="glass-effect rounded-t-2xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Collapsed View */}
          <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-semibold text-white text-sm sm:text-base truncate">Support Moazzem Labs</div>
                <div className="text-xs text-gray-400 hidden sm:block">Help keep services free & ad-free</div>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
              {!isExpanded && (
                <Link href="/support" className="hidden sm:block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="gradient-purple text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    View All Options
                  </motion.button>
                </Link>
              )}
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </button>

              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Expanded View */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-white/10"
              >
                <div className="px-3 sm:px-6 py-4 sm:py-6">
                  {/* Monthly Recurring */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-purple-400 mb-2 sm:mb-3">Monthly (Ongoing Reward)</h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {recurringTiers.map((tier) => (
                        <motion.a
                          key={tier.amount}
                          href={tier.stripeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="glass-effect border border-purple-500/30 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center hover:border-purple-500/60 transition-all"
                        >
                          <div className="text-base sm:text-xl font-bold text-white">
                            {tier.amount}<span className="text-[10px] sm:text-xs text-gray-400">{tier.period}</span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* One-Time */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2 sm:mb-3">One-Time</h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {oneTimeTiers.map((tier) => (
                        <motion.a
                          key={tier.amount}
                          href={tier.stripeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="glass-effect border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center hover:border-white/40 transition-all"
                        >
                          <div className="text-base sm:text-xl font-bold text-white">{tier.amount}</div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* View All Link */}
                  <div className="mt-3 sm:mt-4 text-center">
                    <Link href="/support" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                      View full support page →
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingDonationBar;

