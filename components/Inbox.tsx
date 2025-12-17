import React from 'react';
import { Send } from 'lucide-react';

const CONVERSATIONS = [
  {
    id: '1',
    user: { name: 'Aryan', image: 'https://picsum.photos/seed/aryan/100/100' },
    matchedOn: ['Outdoor Activities', 'Pop Rock'],
    suggestions: ['Best Drake Album?', 'Morning Run?', 'Coffee at Campus?']
  },
  {
    id: '2',
    user: { name: 'Sarah', image: 'https://picsum.photos/seed/sarah/100/100' },
    matchedOn: ['Coding', 'Jazz'],
    suggestions: ['Hackathon Idea', 'Study Session']
  }
];

export const Inbox: React.FC = () => {
  return (
    <div className="h-full w-full px-4 pt-8 pb-24 overflow-y-auto no-scrollbar bg-white">
       <h1 className="text-4xl font-display uppercase mb-2">Inbox</h1>
       <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8">Your Connections</p>

       <div className="flex flex-col gap-6">
          {CONVERSATIONS.map(convo => (
            <div key={convo.id} className="border-2 border-black rounded-xl overflow-hidden shadow-neo bg-[#F9F9F9]">
               {/* Header */}
               <div className="bg-white p-3 border-b-2 border-black flex items-center justify-between">
                  <h3 className="font-display uppercase text-lg">{convo.user.name} X YOU</h3>
                  <div className="flex -space-x-2">
                     <img src="https://picsum.photos/seed/me/100/100" className="w-8 h-8 rounded-full border border-black" alt="Me" />
                     <img src={convo.user.image} className="w-8 h-8 rounded-full border border-black" alt={convo.user.name} />
                  </div>
               </div>
               
               {/* Context */}
               <div className="p-4 bg-[#f0fdf4]">
                  <p className="text-xs font-bold mb-3">Matched on: {convo.matchedOn.join(', ')}</p>
                  
                  {/* AI Icebreakers */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {convo.suggestions.map((s, i) => (
                      <button key={i} className={`text-xs font-bold px-3 py-2 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-none transition-all ${i % 2 === 0 ? 'bg-brand' : 'bg-yellow-300'}`}>
                        {s}
                      </button>
                    ))}
                  </div>

                  {/* Input Simulation */}
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Message..." 
                      className="w-full border-2 border-black px-4 py-3 text-sm font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(192,255,1,1)] transition-shadow"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Send size={18} />
                    </button>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </div>
  );
};