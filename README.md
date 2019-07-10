# MyReads Project

This is the  final assessment project for Udacity's React Fundamentals course. The goal of this is to create an app that allows the user to search for books using an API and add them to one of three shelves: Want to Read, Currently Reading, and Read.


## How To Use

Click the '+' sign in the lower right corner to search for a book. Start typing the name of the book you wish to add. Use the dropdown arrows to add to the shelves. Change shelves with the dropdown arrows as well.


## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Credits

Original starter template can be found here:

https://github.com/udacity/reactnd-project-myreads-starter

##License

© Jaime A. Araujo
