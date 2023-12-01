# Scene ID - Scene Name (Optional)

|               |                 |
|:--------------|:----------------|
|no. exits      | exit triggers amount (int) |
|Exits position | xyPosition of trigger | use xyPosition, like <x10,y21> and link each to the section
| Enemies       | number of enemies |
| Checks        |  xyPosition | use xyPosition, link each to the section

## Description

Here you can _Provide a scene description_

## Skips

For every skip, create a file with the skip description inside docs/public/skips/scene_id_path, and [include](https://vitepress.dev/guide/markdown#markdown-file-inclusion) it here if it is a page or just ad as a normal asset if it is a .mp4 or .gif. You can see an example of include [here](../../scenes/z01/z0101)

``` md
<!--@include: @/skips/(skip file).md-->
```

::: warning Include bug
Although the files should work as any page, for some buggy reason they can't be referenced with relative pathand must have the _.md_ extension. Use **@/skips/(file name).md**
:::

## Exits

:::tip Type nothing here
You don't have to type nothing here, this H2 is for linking purposes
:::

### Exit 1

![image of the trigger, show hitbox and positionXY on debug](image link)

:::tip
add as many exit H3 headers as necessary
:::

### Exit n

## Enemies

- Provide info about enemy, how many and if possible their original position
- You can find their original position by timefreezing and entering the room

## Checks

:::tip Type nothing here
You don't have to type nothing here, this H2 is for linking purposes
:::

### Check (Item Name)

![image of the trigger, show hitbox and positionXY on debug](image link)

:::tip
Add as many exit H3 headers as necessary
:::

### Check n
