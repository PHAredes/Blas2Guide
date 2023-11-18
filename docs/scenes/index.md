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

## zone List

::: warning
This list will lead you to empty pages.
Please note this project is on early stages, and you can [help by expanding it](/about/CONTRIBUTING)
:::

(Click on a zone name to see its list of scenes)

- z01 - [Repose of the Silent One](z01/z01.md)
- z02 - [Ravine of the High Stones](z02/z02.md)
- z03 - [Aqueduct of the Costales](z03/z03.md)
- z04 - [Sacred Entombments](z04/z04.md)
- z05 - [City of the Blessed Name](z05/z05.md)
- z06 - [Grilles and Ruin](z06/z06.md)
- z07 - [Palace of the Embroideries](z07/z07.md)
- z08 - [Choir of Thorns](z08/z08.md)
- z09 - [Crown of Towers](z09/z09.md)
- z10 - [Elevated Temples](z10/z10.md)
- z11 - [Basilica of Absent Faces](z11/z11.md)
- z12 - [Sunken Cathedral](z12/z12.md)
- z13 - [Two Moons](z13/z13.md)
- z14 - [Mother of Mothers](z14/z14.md)
- z15 - [Sueños de Incienso](z15/z15.md)
- z16 - [The Severed Tower](z16/z16.md)
- z17 - [Streets of Wakes](z17/z17.md)
- z18 - [Crimson Rains](z18/z18.md)
- z19 - [Profundo Lamento](z19/z19.md)
- z20 - [Sea of Ink](z20/z20.md)
- z21 - [Labyrinth of Tides](z21/z21.md)
- z23 - [Beneath Her Sacred Grounds](z23/z23.md)
- z24 - [Garden of the High Choirs](z24/z24.md)
- z25 - [Chapel of the Five Doves](z25/z25.md)
- z26 - [Forlorn Patio](z26/z26.md)

**Note:** z22 does not exist

--------
