<div align="center">
    <img src="sylv.png">
    <br>
    <sub>Artwork by <a href="https://www.deviantart.com/purpleninfy">Purpleninfy</a></sub>
    <h1>pokeapi-graphql</h1>
</div>

> A GraphQL implementation of [PokeAPI]()!

## Progress

**8/10 groups** done!
**32/48 endpoints** done!

- [x] [Berries](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Berries.ts) (3 endpoints)
- [x] [Contests](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Contests.ts) (3 endpoints)
- [x] [Encounters](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Encounters.ts) (3 endpoints)
- [x] [Evolutions](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Evolutions.ts) (2 endpoints)
- [x] [Games](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Games.ts) (4 endpoints)
- [x] [Items](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Items.ts) (5 endpoints)
- [x] [Locations](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Locations.ts) (4 endpoints)
- [x] [Machines](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Machines.ts) (1 endpoint)
- [x] [Moves](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Moves.ts) (7 endpoints)
- [ ] [Pokemon](https://github.com/newtykins/pokeapi-graphql/blob/main/src/data/Pokemon.ts) (16 endpoints)

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
        getMethod(query:"1") {
            name
        }
    }
}
```

## FAQ

### PokeAPI already is creating a GraphQL API - why did I make this?

I wanted to brush up on GraphQL, and was inspired to wrap an API by this [article](https://medium.com/swlh/no-idea-how-to-get-started-with-graphql-make-a-wrapper-of-a-rest-api-7159080dc318#4785) - but I wanted to take it a step further and to a much larger scale. PokeAPI was the first API that came to my mind when I was considering what I should wrap, and honestly I don't care if it doesn't get used at all. I'm having fun (:
