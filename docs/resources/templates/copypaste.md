# Copypaste

## Table Copypaste

### Scene Table

- Input

```markdown
| **Scene id or name**                |                  |
|-------------------------------------|------------------|
| **No. of Exits**                    |                  |
| [**Exits Position**](##exits)       |                  |
| [**Enemies**](##enemies)            |                  |
| [**Checks**](##checks)              |                  |
```

- Output

| **Scene id or name**                |                  |
|-------------------------------------|------------------|
| **No. of Exits**                    |                  |
| [**Exits Position**](##exits)       |                  |
| [**Enemies**](##enemies)            |                  |
| [**Checks**](##checks)              |                  |

### Technique Table

- Input

```markdown
|  Technique Name           |                           |
|---------------------------|---------------------------|
| **Speedrun Categories**   |                           |
| **Game Version**          |                           |
| **Requirements**          |                           |
| **Setup Required**        |                           |
| **Pixel/Frame related?**  |                           |
| **Change Game Behavior?** |                           |
```

- Output

|  Technique Name           |                           |
|---------------------------|---------------------------|
| **Speedrun Categories**   |                           |
| **Game Version**          |                           |
| **Requirements**          |                           |
| **Setup Required**        |                           |
| **Pixel/Frame related?**  |                           |
| **Change Game Behavior?** |                           |

## Callout

You can modify the callout title by appending it to the end of the type.
For example, `:::info Title` will have "Title" as its title.

It also supports [GFM alerts](https://github.com/orgs/community/discussions/16925) which has a more concise syntax but is less powerful as you can't change titles

- Input

```markdown
::: info
This is an info box.
:::
```

```markdown
::: tip
This is a tip.
:::
```

```markdown
::: warning
This is a warning.
:::
```

```markdown
::: danger
This is a dangerous warning.
:::
```

```markdown
::: details
This is a details block.
:::
```

- Output

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Video autoplay Tag

```html
<video autoplay="autoplay">

</video>
```

## Tabs Component

Doc [here](https://vitepress-plugins.sapphi.red/tabs/#syntax)

- Input

```markdown
:::tabs
== tab a
a content
== tab b
b content
:::
```

- Output

:::tabs
== tab a
a content
== tab b
b content
:::
