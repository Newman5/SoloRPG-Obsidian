---
title: Update One
description: Diving into the Maps
---

# In honor of RPG Day 2025

Inspired by RPG Day 2025, I returned to this project after a long break. Even though other priorities pulled me away, this weekend project keeps calling me back — especially the map-making part, which has always been my favorite.

## What I built

This update focuses on generating a hex map and a data structure for individual hexes. Instead of building the map directly inside Obsidian, I created a simple web-based viewer using D3. It reads from a JSON file and displays a grid that matches the Glide RPG layout.

The system is made of three key files (all in the `hexmap` directory):
- `generate-hexmap.cjs`: generates hex data with proper layout and coordinates.
- `hexmap.json`: the structured data file representing the map.
- `index.html`: the viewer that renders the hexes using D3 and `d3-hexbin`.

It took some trial and error to get the coordinates and spacing right, but the result is a working, readable map that matches the Glide grid.

## What’s next

The next step is to integrate this map more directly with the Obsidian vault — either by syncing metadata between notes and the JSON file, or finding a way to link from the viewer back into Obsidian.

Eventually, I’d like to play a few sessions and see what design tensions emerge. I have some ideas for turn templates, stat tracking, and interactive elements, but for now I’m keeping the game hybrid — part digital, part physical. There's something satisfying about rolling dice and flipping cards by hand.

I also plan to create a walkthrough video to show how I actually play Glide with this setup.

Shout out to Cody Barr, the creator of Glide, who gave me his blessing to experiment and hack on the game.

> Because even when we play solo, we can still build together.  
> — Newman5


