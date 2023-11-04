# Scenes

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
