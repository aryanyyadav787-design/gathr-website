import React, { useState } from 'react';
import { Activity } from '../types';
import { Button } from './Button';
import { Clock, MapPin, Flame, Users, Plus, Heart } from 'lucide-react';

const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'STUDY SESH AT 9AM',
    hostName: 'Anjanay',
    hostImage: 'https://picsum.photos/seed/anjanay/100/100',
    time: 'TOMORROW AT 9AM',
    location: 'Central Library',
    description: "We're having a study session at 9AM in library. Finals prep!",
    status: 'trending',
    spotsLeft: 3,
    tags: ['Study', 'Quiet']
  },
  {
    id: '2',
    title: 'UKELELE JAM AT JOGGERS',
    hostName: 'Rishita',
    hostImage: 'https://picsum.photos/seed/rishita/100/100',
    time: 'HAPPENING NOW!',
    location: 'Joggers Park',
    description: "Pleaseee guysss come and see me playinggg. Vibes only.",
    status: 'happening',
    tags: ['Music', 'Chill']
  },
  {
    id: '3',
    title: 'UP FOR FIFA 25?',
    hostName: 'Aryan',
    hostImage: 'https://picsum.photos/seed/aryan/100/100',
    time: 'HAPPENING NOW!',
    location: 'B1-391',
    description: "I am bored join me for FIFA at B1-391. Snacks on me.",
    status: 'happening',
    spotsLeft: 1,
    tags: ['Gaming', 'Fun']
  }
];

export const Activities: React.FC = () => {
  const [filter, setFilter] = useState<'upcoming' | 'happening'>('happening');

  return (
    <div className="h-full w-full pb-24 px-4 overflow-y-auto pt-20 no-scrollbar">
      
      {/* Header & Filters */}
      <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 p-4 border-b-2 border-black">
        <div className="max-w-md mx-auto flex items-center justify-between">
           <h1 className="text-3xl font-display uppercase">Activities</h1>
           <button className="bg-brand border-2 border-black p-2 shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all">
             <Plus size={24} />
           </button>
        </div>
        <div className="max-w-md mx-auto flex gap-2 mt-4">
          <button 
            onClick={() => setFilter('upcoming')}
            className={`flex-1 py-2 font-bold uppercase border-2 border-black text-xs tracking-wider transition-all ${filter === 'upcoming' ? 'bg-brand shadow-neo-sm' : 'bg-white text-gray-400'}`}
          >
            Coming Up
          </button>
          <button 
            onClick={() => setFilter('happening')}
            className={`flex-1 py-2 font-bold uppercase border-2 border-black text-xs tracking-wider transition-all ${filter === 'happening' ? 'bg-white shadow-neo-sm text-black' : 'bg-white text-gray-400'}`}
          >
            Happening Now
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto flex flex-col gap-6 mt-10">
        {ACTIVITIES.map((activity) => (
          <div key={activity.id} className="bg-white border-2 border-black rounded-xl p-4 shadow-neo relative group hover:-translate-y-1 transition-transform duration-300">
            
            {/* Header Badge */}
            <div className="flex justify-between items-start mb-3">
               <div className="text-xs font-bold bg-yellow-100 px-2 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                 {activity.hostName} posted this
               </div>
               <div className={`text-[10px] font-bold px-3 py-1 rounded-full border border-black ${activity.time.includes('NOW') ? 'bg-brand animate-pulse' : 'bg-pink-100'}`}>
                 {activity.time.includes('NOW') ? '● LIVE' : `● ${activity.time}`}
               </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-display uppercase leading-none mb-2">{activity.title}</h3>
            
            {/* Tags/Status */}
            <div className="flex gap-2 mb-4">
              {activity.status === 'trending' && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold border border-black px-2 py-0.5 rounded-full bg-white">
                  TRENDING <Flame size={10} className="fill-orange-500 text-orange-500" />
                </span>
              )}
              {activity.status === 'happening' && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold border border-black px-2 py-0.5 rounded-full bg-white">
                   PEOPLE JOINING <Users size={10} className="fill-blue-500 text-blue-500" />
                </span>
              )}
              {activity.spotsLeft && (
                 <span className="inline-flex items-center gap-1 text-[10px] font-bold border border-black px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                  FILLING FAST
                </span>
              )}
            </div>

            <div className="flex justify-between items-end">
               <div className="flex-1 pr-4">
                 <p className="text-sm font-medium leading-tight mb-4">"{activity.description}"</p>
                 <div className="flex gap-3">
                    <Button size="sm" className="bg-brand text-black">
                      I'M IN! <Heart size={14} className="fill-black ml-1" />
                    </Button>
                    {activity.spotsLeft && (
                      <div className="px-3 py-1 border-2 border-black font-bold text-xs flex items-center shadow-neo-sm bg-white">
                        {activity.spotsLeft} SPOTS LEFT!
                      </div>
                    )}
                    {!activity.spotsLeft && (
                       <Button size="sm" variant="secondary">OPEN INVITE</Button>
                    )}
                 </div>
               </div>

               {/* Host Image */}
               <div className="relative">
                 <img src={activity.hostImage} alt={activity.hostName} className="w-20 h-20 rounded-full border-2 border-black object-cover" />
                 <div className="absolute -bottom-1 -right-1 bg-brand border border-black w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">
                    AI
                 </div>
               </div>
            </div>

          </div>
        ))}

        {/* Create CTA */}
        <div className="bg-black rounded-xl p-6 text-center shadow-neo">
           <h3 className="text-brand font-display text-2xl uppercase mb-2">Host an Activity?</h3>
           <p className="text-gray-400 text-sm mb-4">Need a team for a hackathon or gym buddy? AI will match you with the best.</p>
           <Button variant="primary" fullWidth>CREATE POST</Button>
        </div>
      </div>
    </div>
  );
};