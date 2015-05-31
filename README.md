# angular/ionic example (my-expenses)
This is a simple example app for teaching angular and ionic.

### Step 1
- add an input field, where you can type in the expenses
 - put this field into the [header](http://ionicframework.com/docs/components/#bar-inputs)
- built a simple function that adds the given amount to an array
 - use a service for better separation and later use of data persistence
- write a method which sums all expenses
 - display this value to the user (e.g. in the footer)

### Step 2
- add categories
 - specify them in a service
 - display the categories in a (scrollable) [sub-header](http://ionicframework.com/docs/components/#subheader)
 - add the selected category to your saved items

### Step 3
- add data persistence with local storage ([localForage](https://github.com/ocombe/angular-localForage))
- add a resolve to your route and load saved items
- [order](https://docs.angularjs.org/api/ng/filter/orderBy) your items by timestamp
- add a [currency filter](https://docs.angularjs.org/api/ng/filter/currency) to your price tags
