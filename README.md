# GraphQl Api Wrapper/Aggregator

## Problem
Dozens of applications need to be built that all consume one large external API. The data each of these applications needs from that service is shaped the same except that some applications need more or fewer fields. Furthermore, those additional fields may constitute an additional API call.

For example, certain products only need certain fields from a GET request to `products/:id`:
```json
{
  "id": "333",
  "category": "Primer",
  "name": "Werwin-Shilliams Oil Based Primer"
}
```

But other products may require additional details supplied by an additional call to `/categories/:name/sizes`:

```json
[
  "1 gallon",
  "10 gallon",
  "1 gallon"
]
```

## GraphQL as a solution
Rather than putting the onus on the dozens of clients to make separate calls and build them back into similarly shaped domain objects, using GraphQl as an API wrapper allows all clients to call the same endpoint and just request the fields they need

Just the product:
```
{
  getProduct(id: "333") {
    id
    category
    name
  }
}
```

When the `getProduct` query is called, a GraphQl resolver will fire off the http request to `/products/:id`

A product with details:
```
{
  getProduct(id: "555") {
    id
    category
    name
    sizes
  }
}
```

Only when the `sizes` field is included will GraphQl fire off the additional `categories/:name/sizes` request

## Benefits
Using GraphQl to wrap and coordinate these API calls gives the following benefits:
* Enforces a common schema/type system
* Allows clients to focus on the data they need and not have to know about how many or which API calls need to be made
* Fields resolve lazily so API calls will only be fired off if a corresponding field is requested
* GraphQl also handles resolving fields in parallel. With firing off ajax calls, this isn't so much of a performance win but the syntactic sugar of not having to handle your own Promises is nice

## Tradeoffs
* Clients need to know the what fields are available and the shape of the product they are fetching otherwise they may kick off superfluous or error-producing API calls
* GraphQl in general doesn't allow for HTTP caching
* Bundling all the external API calls into one GraphQl call means the GraphQl call won't return until all external calls finish and will only be as performant as the slowest call

## Try it out
[Click here](http://graphql-api-wrapper.cfapps.io/graphql) to use the GraphiQl interface. You can try the following Product query with any integer id. The `sizes`, `colors` and `ratings` fields all constitute additional API calls. I've added a couple second delay to all additional queries so you can tell whether or not an additional API call has been made.

  NOTE: not all products have sizes or colors and will show GraphQl errors

Product with additional details
```
{
  getProduct(id: 1) {
    id
    category
    name
    /* the following fields make aditional api calls */
    sizes
    colors
    ratings {
      rating
      comment
    }
  }
}
``` 

The backing API:
 
`/products/:productId`

`/products/:productId/ratings`

`/categories/:name/sizes`

`/categories/:name/colors`