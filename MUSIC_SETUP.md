# Background Music Setup

Your Gathr website now has background music functionality! Here's how to use it:

## How to Add Your Music

1. **Get your music file**: Find an MP3 file you want to use as background music
   - Recommended: Choose a calm, ambient track that won't be distracting
   - File size: Keep it under 5MB for faster loading

2. **Add the file to your project**:
   - Place your music file in the `public/music/` folder
   - Rename it to `background.mp3` (or update the path in `App.tsx`)

3. **Alternative paths**: If you want to use a different filename:
   - Open `App.tsx`
   - Find line ~210: `<BackgroundMusic src="/music/background.mp3" autoPlay={true} />`
   - Change the `src` to match your filename, e.g., `src="/music/my-song.mp3"`

## Features

✅ **Auto-plays on first user interaction** (required by browsers)
✅ **Volume set to 30%** for non-intrusive background music
✅ **Loops continuously** throughout the browsing session
✅ **Floating music control button** in the bottom-right corner
✅ **Respects browser autoplay policies**

## Music Control Button

A stylish floating button appears in the bottom-right corner that lets users:
- Play/pause the background music
- Shows the current state (playing/muted)
- Matches your website's design aesthetic

## Where to Find Free Music

If you need royalty-free background music, check out:
- **Pixabay Music**: https://pixabay.com/music/
- **Free Music Archive**: https://freemusicarchive.org/
- **YouTube Audio Library**: https://studio.youtube.com/
- **Incompetech**: https://incompetech.com/music/

## Customization

You can customize the music player in `components/BackgroundMusic.tsx`:
- Change the volume (currently 30%): `audio.volume = 0.3;`
- Disable auto-play: `<BackgroundMusic src="..." autoPlay={false} />`
- Modify the button position or styling

## Technical Notes

- The music will start playing on the first user click/interaction (browser requirement)
- The audio is set to loop automatically
- The volume is optimized for background listening
- All major browsers are supported
