import React from 'react';
import { GameCard } from './GameCard';

const GAMES = [
  {
    title: 'Stack Up',
    description: 'Stack the blocks as high as you can! Timing is everything.',
    iconName: 'Layers',
    color: '#8B5CF6',
  },
  {
    title: 'Neon 2048',
    description: 'Swipe to merge cosmic tiles and reach the 2048 singularity.',
    iconName: 'Grid3X3',
    color: '#10B981',
  },
  {
    title: 'Neon Fly',
    description: 'Tap to keep your drone airborne through energy barriers.',
    iconName: 'Plane',
    color: '#8B5CF6',
  },
  {
    title: 'Tap Frenzy',
    description: 'Tap as fast as you can! 10 seconds of pure speed.',
    iconName: 'Zap',
    color: '#F43F5E',
  },
  {
    title: 'Whack-a-Glow',
    description: 'Tap the neon orbs before they vanish. Watch out!',
    iconName: 'Target',
    color: '#06B6D4',
  },
  {
    title: 'Color Reflex',
    description: "React only to the target color. Don't miss!",
    iconName: 'CircleDot',
    color: '#F59E0B',
  },
  {
    title: 'Simon Glow',
    description: 'Repeat the sequence of light. How far can you go?',
    iconName: 'LayoutGrid',
    color: '#8B5CF6',
  },
  {
    title: 'Tap Sequence',
    description: 'Find and tap numbers 1-25 as fast as possible.',
    iconName: 'Binary',
    color: '#3B82F6',
  },
  {
    title: 'Pattern Lock',
    description: 'Memorize and reveal the hidden neon pattern.',
    iconName: 'Lock',
    color: '#10B981',
  },
  {
    title: 'Cosmic Patches',
    description: 'Divide the cosmic grid into rectangles to match the clues.',
    iconName: 'SquareStack',
    color: '#06B6D4',
  },
];

export const GameGrid = () => {
  return (
    <section id="games" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">THE ARCADE</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Explore our collection of neon-infused challenges. New games added regularly to keep your reflexes sharp.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {GAMES.map((game, idx) => (
          <GameCard key={idx} {...game} />
        ))}
      </div>
    </section>
  );
};
