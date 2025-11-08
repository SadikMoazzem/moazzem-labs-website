'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const MyLocalMasjidAppPreview = () => {
  return (
    <div className="relative flex justify-center items-center h-[700px]">
      <motion.a
        href="https://www.mylocalmasjid.com/solutions/app"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative w-[300px] sm:w-80 h-[600px] cursor-pointer max-w-[calc(100vw-2rem)]"
      >
        {/* Base Phone - Rounded Rectangle */}
        <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-gray-950 rounded-[3rem] shadow-2xl border border-white/10"></div>

        {/* Floating Layer 1: Header Card */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: [-100, -95, -100],
            x: [0, 2, 0],
            opacity: 1 
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 }
          }}
          className="absolute w-[280px] sm:w-72 h-36 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl left-1/2 -translate-x-1/2 border border-white/20"
          style={{ top: '120px' }}
        >
          <div className="h-full px-4 sm:px-6 py-4">
            {/* Location Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="text-white/70 text-xs">London, UK</div>
            </div>
            
            {/* Prayer Info */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold text-4xl mb-1">Asr</div>
                <div className="text-white/70 text-sm">1 hr 39 mins until Maghrib</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Layer 2: Prayer Times List */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: [-60, -55, -60],
            x: [0, -2, 0],
            opacity: 1 
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8, delay: 0.3 }
          }}
          className="absolute w-[280px] sm:w-72 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl left-1/2 -translate-x-1/2 border border-white/20"
          style={{ top: '250px' }}
        >
          <div className="p-4 space-y-2">
            {[
              { name: 'Fajr', time: '5:59 AM' },
              { name: 'Dhuhr', time: '12:50 PM' },
              { name: 'Asr', time: '4:03 PM' },
              { name: 'Maghrib', time: '5:57 PM' },
              { name: 'Isha', time: '7:18 PM' }
            ].map((prayer, index) => (
              <div key={prayer.name} className={`h-11 rounded-lg flex items-center justify-between px-4 ${
                prayer.name === 'Asr' 
                  ? 'bg-gradient-purple border-2 border-purple-400/50 shadow-lg shadow-purple-500/30' 
                  : 'bg-white/10'
              }`}>
                <div className={`font-medium text-sm ${
                  prayer.name === 'Asr' ? 'text-white font-semibold' : 'text-white/90'
                }`}>{prayer.name}</div>
                <div className={`text-sm ${
                  prayer.name === 'Asr' ? 'text-white/90 font-medium' : 'text-white/60'
                }`}>{prayer.time}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating Layer 3: Bottom Navigation */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: [-30, -25, -30],
            x: [0, 1, 0],
            opacity: 1 
          }}
          transition={{ 
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.9, delay: 0.5 }
          }}
          className="absolute left-1/2 -translate-x-1/2 w-[280px] sm:w-72 flex items-center justify-between"
          style={{ top: '540px' }}
        >
          {/* Nav Bar */}
          <div className="flex-1 h-16 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 mr-3">
            <div className="flex items-center justify-around h-full px-4">
              {/* Salah - Active */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-teal-500/20">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v4m0 12v4m10-10h-4M6 12H2"/>
                </svg>
              </div>
              
              {/* Qibla */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m10-10h-4M6 12H2"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2"/>
                </svg>
              </div>
              
              {/* Calendar */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Settings */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* FAB Button with MLM Logo */}
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full shadow-2xl border border-white/20 flex items-center justify-center">
            <Image
              src="/images/mylocalmasjid-logo.png"
              alt="MyLocalMasjid"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-16 h-16 gradient-pink rounded-2xl opacity-60 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-10 -left-10 w-12 h-12 gradient-blue rounded-2xl opacity-60 backdrop-blur-sm"
        />
      </motion.a>
    </div>
  );
};

export default MyLocalMasjidAppPreview;
