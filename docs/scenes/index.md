# Scenes

## What is a Scene?

You can understand a scene as every room or level at the game; technical aspects are not going to be fully covered here, only the ones which are relevant at the context.

According to [@BrandenEK](https://github.com/BrandenEK) (aka Damocles):

- Nothing fully encloses the scene, just the GEO elements that show up in green with the hitbox viewer
- The transitions just call the levelChanger when you touch their trigger
- Scenes around the current scene are actually loaded in asyncronously, but just not active.  When you change the rooms, it just activates the new scene and deactivates the old one.  Its not unloaded immediately
- TKG usually do a pretty good job of making xy position consistent across scene changes
- Enemies shouldn’t start moving until after you actually enter the scene

As a few additions to this:

- Re-entering a room will reset enemies to original position and refill their hp
- Breakable objects (as candles and boxes) and enemies will respawn after TPO interacts with a Prie Dieu. This is also true to interactive objects designed to give TPO access to some areas (statues that move platforms)
- Puzzle objects will never be restored after puzzle is solved

## Zone List

::: warning
This list will lead you to empty pages.
Please note this project is on early stages, and you can [help by expanding it](/about/CONTRIBUTING)
:::

(Click on a zone name to see its list of scenes)

- z01 - [Repose of the Silent One](z01/)
- z02 - [Ravine of the High Stones](z02/)
- z03 - [Aqueduct of the Costales](z03/)
- z04 - [Sacred Entombments](z04/)
- z05 - [City of the Blessed Name](z05/)
- z06 - [Grilles and Ruin](z06/)
- z07 - [Palace of the Embroideries](z07/)
- z08 - [Choir of Thorns](z08/)
- z09 - [Crown of Towers](z09/)
- z10 - [Elevated Temples](z10/)
- z11 - [Basilica of Absent Faces](z11/)
- z12 - [Sunken Cathedral](z12/)
- z13 - [Two Moons](z13/)
- z14 - [Mother of Mothers](z14/)
- z15 - [Sueños de Incienso](z15/)
- z16 - [The Severed Tower](z16/)
- z17 - [Streets of Wakes](z17/)
- z18 - [Crimson Rains](z18/)
- z19 - [Profundo Lamento](z19/)
- z20 - [Sea of Ink](z20/)
- z21 - [Labyrinth of Tides](z21/)
- z23 - [Beneath Her Sacred Grounds](z23/)
- z24 - [Garden of the High Choirs](z24/)
- z25 - [Chapel of the Five Doves](z25/)
- z26 - [Forlorn Patio](z26/)

**Note:** z22 does not exist
