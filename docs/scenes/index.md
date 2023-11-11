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

- Z01 - [Repose of the Silent One](z01/Z01.md)
- Z02 - [Ravine of the High Stones](z02/Z02.md)
- Z03 - [Aqueduct of the Costales](z03/Z03.md)
- Z04 - [Sacred Entombments](z04/Z04.md)
- Z05 - [City of the Blessed Name](z05/Z05.md)
- Z06 - [Grilles and Ruin](z06/Z06.md)
- Z07 - [Palace of the Embroideries](z07/Z07.md)
- Z08 - [Choir of Thorns](z08/Z08.md)
- Z09 - [Crown of Towers](z09/Z09.md)
- Z10 - [Elevated Temples](z10/Z10.md)
- Z11 - [Basilica of Absent Faces](z11/Z11.md)
- Z12 - [Sunken Cathedral](z12/Z12.md)
- Z13 - [Two Moons](z13/Z13.md)
- Z14 - [Mother of Mothers](z14/Z14.md)
- Z15 - [Sueños de Incienso](z15/Z15.md)
- Z16 - [The Severed Tower](z16/Z16.md)
- Z17 - [Streets of Wakes](z17/Z17.md)
- Z18 - [Crimson Rains](z18/Z18.md)
- Z19 - [Profundo Lamento](z19/Z19.md)
- Z20 - [Sea of Ink](z20/Z20.md)
- Z21 - [Labyrinth of Tides](z21/Z21.md)
- Z23 - [Beneath Her Sacred Grounds](z23/Z23.md)
- Z24 - [Garden of the High Choirs](z24/Z24.md)
- Z25 - [Chapel of the Five Doves](z25/Z25.md)
- Z26 - [Forlorn Patio](z26/Z26.md)

**Note:** Z22 does not exist

--------
