## Installation
```js
    npm install "@kamkam1_0/languages"
```

## getName function

Gives you the name of the language in english of the given ISO

```js
    const languages = require("@kamkam1_0/languages")
    let languages = languages.getName("fr")
    //Expected Output: French
```

## getOriginalName function

Gives you the original name of the language of the given ISO

```js
    const languages = require("@kamkam1_0/languages")
    let languages = languages.getName("fr")
    //Expected Output: Français
```

## getAllNames function

Gives you both the name of the language in english and the original language name of the given ISO

```js
    const languages = require("@kamkam1_0/languages")
    let languages = languages.getName("fr")
    //Expected Output: { name: 'French', nativeName: 'Français' }
```

## getISObyName function

Gives you the ISO of the given language name (in english)

```js
    const languages = require("@kamkam1_0/languages")
    let languages = languages.getName("french")
    //Expected Output: fr
```

## getISObyFullName function

Gives you the ISO of the given language name (with the original name)

```js
    const languages = require("@kamkam1_0/languages")
    let languages = languages.getName("français")
    //Expected Output: fr
```