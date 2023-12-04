# Time Stop

|  Time Stop                |                           |
|---------------------------|---------------------------|
| **Speedrun Categories**   | Unrestricted              |
| **Game Version**          | 1.0.5                     |
| **Requirements**          | Mirabras                  |
| **Setup Required**        | No                        |
| **Pixel/Frame related?**  | No                        |
| **Change Game Behavior?** | Yes                       |

## Description

Time Stop is a glitch that uses Mirabrás of the Return to Port to freeze enemies in place permenantly without costing any fervour. The glitch can be activated in a number of different ways and can even be transferred between files. All methods of performing this glitch were patched in version 1.1.0.

When casting prayers, multiple ingame clocks are paused to let the animation play out. The first is the Enemy Clock. When this value is set to 0, all of the enemies on screen freeze in the middle of their animation until the value is reset to 1. This clock is used by Seguiriya to the Memory of your Eyes (the time stop prayer) and is also used when prayers are cast and when loading in from a save file. The second is the Level Clock. When set to 0, other elements of the level are frozen in place. This includes moving platforms, bell platforms, and gates.

When Mirabras is cast, the initial slam animation will set both the Enemy Clock and the Level Clock to 0 but both will be returned to 1 once the slam happens. This is in line with the other prayer animations in the game. However, while waiting for the Mirabras menu to come up, both Enemy Clock and Level Clock are again set to 0 and will be frozen there until an option is chosen. For whatever reason, if an option is never chosen then both Enemy Clock and Level Clock will remain at 0 until the game is turned off.

This glitch can also be used to activate [Invulnerability](invulnerability) but because there are many softlocks and roadblocks created by use this glitch, it's use in speedruns is fairly limited.

## Setup

To make this glitch work, you must be in a room where Mirabras can be successfully cast. If the message "Your prayers have no response." comes up then time will not be stopped permentantly if any technique is used.

## Game Behavior

When Time Stop is activated typically both Enemy Clock and Level Clock are set to 0, and they are not reset by any known action. This includes starting a different file, as Time Stop and it's effects will transfer over to any file you start. The only way to remove the Time Stop effect when activated is to close and restart the game, which will reset behavior to normal.

Enemy Clock is responsible for controlling enemy actions and attacks. When set to 0, the behavior of enemies will act identically to the prayer Seguiriya and the Alterpiece Resonance Alchemical Time. Enemies will stop in place but they will still have an active hitbox. They can be hit but when they die, a single frame of their death animation will linger on screen unless time is restarted. 

Enemies will also not spawn in during gauntlet encounters, but gates and walls will appear. This means any gauntlet becomes impossible to finish and is functionally a softlock. For one reason or another, the living wall enemy in Choir of Thorns that guards Crown of Tower spawns in partially through the room. With Enemy Clock set to 0, it never spawns in at all.

Additionally, Boss animations are also controlled by Enemy Clock. So if a fight is started with Enemy Clock at 0, then the boss will never move from its starting position, which is usually unreachable and off screen. Most bosses also start with hitboxes turned off. So even when the boss is reachable, they cannot be killed.

Level Clock is responsible for the movement of elements of the level that are not enemies. When Level Clock is set to 0:
- Platforms and doors controlled by statues do not update. 
- Bell platforms may appear but will not have collision and will not disappear without reloading the room. 
- Bell gates will open but will never close back up again unless the room is reloaded. 
- Switches can be hit and the gate opening animation will play but the collision of the gate will not disappear until the room is reloaded.
- Falling platforms will not update. Existing platforms will not crumble and missing platforms will not reappear
- Scripted falling platforms (like the one in Profundo Lamento before the wall jump ability) will display a falling animation which will loop. The platforms will remain solid.
- Certain particles such as the sparks TPO creates by sliding down ladders will not disappear. Once too many are on screen, no new particles will be created.
- For some reason, activating a [Hover](../weight_of_sin/hover) will softlock the game. Although all other forms of WoS Tech will work perfectly

Most cutscenes will play normally while Level Clock or Enemy Clock is frozen, but there are some exceptions. Statue cutscenes will stall with Level Clock set to 0, and no platforms or doors will move. This would be a softlock but you can cancel out of the stalled cutscene by reequiping and then casting your quick verse or chant.

## How to Perform

### Menu Time Stop

The most common way to activate this glitch is by using a [Menu Mirabras Cancel](index). Simply cast Mirabras, open your menu and then change your equipped chant before Mirabras's animation is over. So long as the glitch was performed in a room where Mirabras works, Enemy Clock will be set to 0, Level Clock will be set to 0, and time will be stopped.

This version of the trick also activates [Invulnerability](invulnerability) when performed.

### Weapon Swap Time Stop

**Discovered by:** ThymeWalk

An alternative to Menu Time Stop. To perform weapon swap cancel Mirabras by casting Mirabras and then swapping your weapon. Then cast Mirabras again before the menu shows up. This version also pauses Enemy Clock and Level Clock but it does not grant invulnerability. 

### Statue Time Stop

**Discovered by:** Arkadia

A very different form of Time Stop obtained by interupting a statue cutscene instead. To perform, Mirabras cancel in front of a statue and immediatly interact with it. Once the Mirabras menu comes up, select "Return to the City". If the warp goes through before the cutscene ends, then Enemy Clock will be set to 0 but Level Clock will be unfrozen. Once you spawn in East City, you will be unable to move. This can be cancelled by swapping weapons, swinging your weapon, or casting a prayer.

Because Level Clock is unaffected by this trick, only enemies and bosses are affected by the trick. Falling platforms, gates, and other interactable elements are unaffected. This version also does not provide any invulnerability.

This kind of Time Stop also persists through game files but unlike regular Time Stop can be cancelled without turning the game off. Interacting with any statue will return gameplay to normal. 

## List of Usages

- While Time Stop does allow much easier traversal through just about every level, it does come at a significant time penalty and the glitch must be deactivated before running into any required statues, bosses, or gauntlet fights
- It can be used to skip the Living Wall enemy in Choir of Thorns