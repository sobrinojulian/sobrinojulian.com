---
title: Eclipse
date: 2023-12-09
thumbnail: eclipse.svg
tags:
  - software
---

## como instalar

```powershell
scoop bucket add extras "https://github.com/sjarbs/bucket"
scoop bucket add java
scoop install "sjarbs/eclipse-java" # V2021-03 (4.19.0)
scoop install openjdk15
```

### ObjectAid
- Para instalar ObjectAid bajar: [[_/files/objectaid-1.2.4.zip|objectaid-1.2.4]]
- Para instalar el plugin y ver como usarlo [ver este video de Charly Cimino](https://youtu.be/WTEDh-9HU20)

Tiene que ser esta version porque ObjectAid esta deprecado y esta es una configuracion de eclipse + openjdk* que funciona.
### Diccionario en español (para Spellchecker)
<!-- TODO -->
Lorem ipsum dolor sit amet

### Someday/Maybe
- como usar `ctrl + scroll`:  para zoom con AutoHotKey

## shorcuts
- `ctrl + +`: zoom in
- `ctrl + -`: zoom out
- `Shift-Alt-J`: javadoc
- `Ctrl+Shift+F`: format code

## como importar proyecto
- open eclipse
  ![[_/images/231209-162549.png]]
- `File > Import`
  ![[_/images/231209-162617.png]]
- `General > Existing Projects into Workspace`
  ![[_/images/231209-163304.png]]
- `Select archive file:`
	- ![[_/images/231209-163429.png]]
	- ![[_/images/231209-163523.png]]
- `Finish`
  ![[_/images/231209-163603.png]]
-   renombrar el proyecto
	- ![[_/images/231209-164248.png]]
	- ![[_/images/231209-164416.png]]
- probar correrlo
	- ![[_/images/231209-164706.png]]
	- ![[_/images/231209-164730.png]]
- fin 🎉
## como exportar proyecto