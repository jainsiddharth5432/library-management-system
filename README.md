# library-management-system

    commiting by siddharth
    This is a library management API Backend for the management of users and the books.

# Route and the Endpoints

## /users
GET: Get all the list of users in the system
POST: create/register a new users

## /users{id}
GET: get a user by their ID
PUT: update a user by their ID
DELETE: deleting a user by their ID(check if the users still has an issued book)&& {is there and fine/penalty to be collected}

## /users/subscription-details/{id}
GET: get a users subscription details by their ID
    >> date of subscription
    >> valid till?
    >> fine if any?

## /books
GET: get all the books in the system
POST: add a new book to the system

## /books/{id}
GET: get a books by its ID
PUT: update a books by its ID
DELETE: delete a books by its ID

## /books/issued
GET: get all the issued books

## /books/issued/withfine
GET: get all issued books with their fine amount


### subscription types
    >> basic (3 months)
    >> standard (6 months)
    >> premium(12months)

>> if a user mised the renewal date, then user should be collected with $100
>> if a user missed his subscription, then user is expecyed to pay$100
>> if a user missed both renewal& subscription, then the collected amount should be $200



## commands:
npm init 
npm i express
npm i nodemon --save-dev

npm run dev