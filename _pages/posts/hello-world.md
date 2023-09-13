---
title: "Hello World!"
date: 2023-06-16
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices vestibulum nulla, nec fringilla purus iaculis sed. Curabitur nec nibh dolor. Mauris vel volutpat lorem. Aliquam erat volutpat. Ut congue risus et nunc lobortis iaculis. Pellentesque tristique, lectus eu auctor facilisis, sem purus viverra tellus, non faucibus velit lacus at justo. Quisque nec metus eleifend, congue tortor ut, pulvinar lectus.

Fusce non urna id justo volutpat vestibulum. Sed sagittis, neque eu eleifend consectetur, felis lectus interdum nulla, eu convallis ex nunc et turpis. Nullam nec purus lectus. Etiam venenatis congue varius. Nulla vitae felis urna. Nulla feugiat tellus mauris, at posuere metus aliquet sed. Curabitur eu neque feugiat, condimentum est vitae, ullamcorper mauris. Donec ultricies ligula sed elit elementum eleifend. Proin suscipit interd.

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Block code "fences"

```
Sample text here...
```

```js
function foo(bar) {
  return bar++
}

console.log(foo(5))
```

```python
def hello_world():
    print("Hello World!")
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

## Links

[link text](https://www.11ty.dev/)

[link with title](https://www.11ty.dev/docs/getting-started/ 'title text!')

## Images

![ArchLinux](/images/hello-world.webp)
