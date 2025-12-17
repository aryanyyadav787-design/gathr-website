import React, { useState } from 'react';
import { Heart, X, Music, Sparkles } from 'lucide-react';
import { User } from '../types';
import { Button } from './Button';

// Mock Data
const MOCK_USER: User = {
  id: '1',
  name: 'Anjanay',
  age: 20,
  image: 'https://picsum.photos/seed/anjanay/500/700',
  bio: "Looking for peeps who are ready to sneak out at 2:00 AM for street food.",
  compatibilityScore: 92,
  interests: [
    { id: '1', name: 'Outdoor Activities' },
    { id: '2', name: 'Photography' },
    { id: '3', name: 'Coding' },
  ],
  topArtists: [
    { id: '1', name: 'Drake', image: 'https://picsum.photos/seed/drake/60/60' },
    { id: '2', name: 'Ken Carson', image: 'https://picsum.photos/seed/ken/60/60' },
    { id: '3', name: 'Weekend', image: 'https://picsum.photos/seed/week/60/60' },
  ],
  sharedVibe: "Gimme A Hug - Drake",
};

export const Discover: React.FC = () => {
  const [lastDirection, setLastDirection] = useState<string | null>(null);

  const handleSwipe = (direction: 'left' | 'right') => {
    setLastDirection(direction);
    // Logic to fetch next user would go here
    setTimeout(() => setLastDirection(null), 500);
  };

  return (
    <div className="h-full w-full pb-24 pt-4 px-4 overflow-y-auto no-scrollbar">
      <div className="max-w-md mx-auto relative">
        
        {/* Card Container */}
        <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-neo-lg relative">
          
          {/* Image Section */}
          <div className="relative h-[450px] w-full overflow-hidden border-b-2 border-black">
             <img 
               src={MOCK_USER.image} 
               alt={MOCK_USER.name} 
               className="w-full h-full object-cover"
             />
             
             {/* Compatibility Score Badge */}
             <div className="absolute bottom-6 right-6 bg-black text-brand rounded-full w-24 h-24 flex flex-col items-center justify-center border-4 border-brand shadow-lg animate-bounce-slow">
               <span className="text-3xl font-display leading-none">{MOCK_USER.compatibilityScore}%</span>
               <span className="text-[0.6rem] uppercase font-bold text-center leading-tight">AI Match<br/>Score</span>
             </div>
          </div>

          {/* Content Section */}
          <div className="p-5">
            <h2 className="text-4xl font-display uppercase mb-1">
              {MOCK_USER.name}, <span className="text-gray-500">{MOCK_USER.age}</span>
            </h2>

            {/* Shared Interests */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">Shared Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand border border-black font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Outdoor Activities
                </span>
                <span className="px-3 py-1 bg-[#b0eb00] border border-black font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Music
                </span>
                <span className="px-3 py-1 bg-white border border-black text-gray-500 font-bold text-xs uppercase">
                  Tech
                </span>
              </div>
              <p className="mt-2 text-sm font-medium italic text-gray-600">
                "{MOCK_USER.interests[0].name}, Evening Walk..."
              </p>
            </div>

            {/* Shared Music Vibe */}
            <div className="mt-6 border-t-2 border-black pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Music size={16} className="text-purple-500" />
                <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">Shared Music Vibe</span>
              </div>
              
              <div className="flex gap-2 mb-3">
                 <span className="px-2 py-0.5 bg-yellow-300 border border-black font-bold text-[10px] uppercase">POP-ROCK</span>
                 <span className="px-2 py-0.5 bg-brand border border-black font-bold text-[10px] uppercase">HIP-HOP</span>
              </div>

              <div className="bg-black p-3 rounded-xl flex items-center justify-between shadow-neo-sm">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                     <img src={MOCK_USER.topArtists[0].image} className="w-full h-full rounded border border-white/20" alt="artist" />
                  </div>
                  <div>
                    <p className="text-[#C0FF01] font-bold text-xs uppercase">You both love</p>
                    <p className="text-white font-display text-sm uppercase">{MOCK_USER.sharedVibe}</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {MOCK_USER.topArtists.map(artist => (
                    <img key={artist.id} src={artist.image} className="w-8 h-8 rounded-full border-2 border-black" alt={artist.name} />
                  ))}
                </div>
              </div>
              
              <p className="mt-4 font-bold text-xl uppercase leading-6 border-l-4 border-brand pl-3">
                "{MOCK_USER.bio}"
              </p>
            </div>
            
            {/* Actions */}
            <div className="mt-8 flex gap-4">
               <button 
                 onClick={() => handleSwipe('left')}
                 className="flex-1 bg-white border-2 border-black h-14 rounded-xl shadow-neo flex items-center justify-center hover:bg-red-50 transition-colors"
               >
                 <X size={32} strokeWidth={3} />
               </button>
               <Button 
                 onClick={() => handleSwipe('right')}
                 className="flex-[2] text-xl"
                 fullWidth
               >
                 <span className="mr-2">CONNECT</span> <Heart size={24} className="fill-black" />
               </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};