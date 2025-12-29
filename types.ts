export interface Interest {
  id: string;
  name: string;
}

export interface MusicArtist {
  id: string;
  name: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  age: number;
  image: string;
  bio: string;
  compatibilityScore: number;
  interests: Interest[];
  topArtists: MusicArtist[];
  sharedVibe: string;
}

export interface Activity {
  id: string;
  title: string;
  hostName: string;
  hostImage: string;
  time: string; // e.g., "Tomorrow at 9AM" or "Happening Now"
  location: string;
  description: string;
  spotsLeft?: number;
  status: 'upcoming' | 'happening' | 'trending';
  tags: string[];
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  user: {
    name: string;
    image: string;
  };
  lastMessage: string;
  matchedOn: string[];
}