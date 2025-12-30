import React from 'react';

interface SplashScreenProps {
    onEnter: (choice: 'yes' | 'no') => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-fade-in">
            <div className="max-w-3xl mx-auto px-6 text-center">
                {/* Question Text */}
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white uppercase mb-16 leading-tight animate-slide-up">
                    Have you ever wanted to find people who share your{' '}
                    <span className="bg-brand text-black px-2 inline-block transform -rotate-1">
                        interests
                    </span>{' '}
                    or{' '}
                    <span className="bg-brand text-black px-2 inline-block transform rotate-1">
                        music vibe
                    </span>
                    ?
                </h1>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-delayed">
                    <button
                        onClick={() => onEnter('yes')}
                        className="group relative px-10 py-5 bg-brand text-black font-display text-xl md:text-2xl uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(192,255,1,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(192,255,1,0.7)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(192,255,1,0.5)] transition-all duration-200 min-w-[200px] touch-manipulation"
                    >
                        <span className="relative z-10">Yes, that's me</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </button>

                    <button
                        onClick={() => onEnter('no')}
                        className="group relative px-10 py-5 bg-transparent text-white font-display text-xl md:text-2xl uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 min-w-[200px] touch-manipulation"
                    >
                        <span className="relative z-10">Not really</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </button>
                </div>

                {/* Decorative element */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand rounded-full blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
        </div>
    );
};
