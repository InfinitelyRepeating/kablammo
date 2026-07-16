# kablammo
In-browser fireworks show creation and display

[Open here](https://infinitelyrepeating.github.io/kablammo)

Kablammo was inspired by The Complete Computer Fireworks Celebration Kit (1985), a neat toy game for the Commodore 64 (published by Activision). It was created 100% through Claude by Antropic. 

# Casual Instructions

The much of the display is self-explanatory, and if you don't understand what something does, play with it until you do! Still, here are some helpful tips.

* You have both shells and ground effects. Shells can be launched by clicking in the air. Ground effects can be activated by clicking below the ground line in the scene.
* The radius/trails/persistence (RTP) sliders primarily effect aerial shells, not ground effects.
* The hammer icon refers to the "Shell Builder." The Shell Builder lets you subdivide a particular shell pattern up to two times, color each section of shells differently, deform the distribution of fragments, and set a unique RTP value for that shell (which gets combined with the global RTP sliders). You can also combine up to two shell types. Shell builder only applies to aerial shells.
* The LED sign shows at ground level, and scrolls for lengthy messages
* You can load mp3, m4a and MIDI music. Doing so will automatically add the music to the timeline (see below), but you can also just play it and launch fireworks in real time.
* The "rapid" button will launch a series of random shells that follow your cursor. The red "finale" button will launch a random blast of shells and ground effects.

# The Timeline (designing shows)

The timeline lets you record and play back shows, especially with musical accompaniment. Loaded music will automatically appear at the top of the timeline, shaded by the amount of energy in the song.

A recorded show consists of a series of events. Events can represent a launched shell, a ground effect, or an LED message. Events are shown as rectangles on the timeline, and the left/right sides of the rectangle can be dragged. A couple of notes about different kinds of events

1. Lengthy LED messages will scroll at least once, so the length of its rectangle will determine scroll speed.
2. If the event is a shell, the right side of the rectangle marks the shell's detonation. A shell's launch velocity is calculated so that it detonates at the right altitude and time. 

Events are added at the red play head's position by tapping the "+ Event" button. The red play head can me moved by clicking/tapping on the ruler, and pinching/scolling on the ruler allows you to zoom.

The






