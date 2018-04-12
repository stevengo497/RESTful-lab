Get all ice cream flavors "/flavors"
Get ice cream by flavor "/flavors/:id" // strawberry
Get categories "/category"
Get all flavors by category "/category/:id/flavors"

Get specific flavor by category "category/:id/flavors/:id" //also strawberry (category could be fruits)

// JSON - need to list api and version on URL

example: 
https://www.comedyvideos.com/api/v1/categories/:id/flavors/:id

https://www.comedyvideos.com/api/v2/users/:id/flavors/:id
//maybe new users don't care about categories, so changed version so the user can go straight to flavors

