<div align="center">
    <img src="sprigatito.png" height="250">
    <h1>pokeapi-graphql</h1>
</div>

> A GraphQL implementation of [PokeAPI](https://pokeapi.co/)!

This was an early project of mine, and will not be updated. It was an exercise that I used to learn GraphQL, and nothing more. There will be no support trying to run it, and it is likely already drastically out of sync with the API. If you need to access PokeAPI data using GraphQL, use their official API [here](https://pokeapi.co/docs/graphql).

[Schema Docs](https://newtykins.github.io/pokeapi-graphql/)

## Progress

**10/10 groups** done!
**48/48 endpoints** done!

-   [x] [Berries](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Berries.ts) (3 endpoints)
-   [x] [Contests](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Contests.ts) (3 endpoints)
-   [x] [Encounters](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Encounters.ts) (3 endpoints)
-   [x] [Evolutions](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Evolutions.ts) (2 endpoints)
-   [x] [Games](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Games.ts) (4 endpoints)
-   [x] [Items](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Items.ts) (5 endpoints)
-   [x] [Locations](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Locations.ts) (4 endpoints)
-   [x] [Machines](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Machines.ts) (1 endpoint)
-   [x] [Moves](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Moves.ts) (7 endpoints)
-   [x] [Pokemon](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Pokemon.ts) (16 endpoints)

## Example Query

```
query {
    berries {
        getBerry(query:"cheri") {
            growthTime
        }
    }
    contests {
        getEffect(id:1) {
            appeal
        }
    }
    encounters {
        getMethod(query:1) {
            name
        }
    }
}
```

<sub>this project uses the <a href="license.md">opinionated queer license v1.1</a> - tl;dr see <a href="https://oql.avris.it/license.tldr">here</a> :]</sub>
