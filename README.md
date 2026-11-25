#1_LAB Dynamic Shopping Cart 
A simple web application to add and remove products in a shopping cart while updating the total price in real time.


## Reflection Questions
### .1. How did you dynamically create and append new elements to the DOM?
Inside the addProduct() function, I used document.createElement() to build a new list item (li), a text container (span), and a delete button (button). Then, I used .appendChild() to put the text and button inside the li, and finally appended the li into the main ul list on the screen.

### .2. What steps did you take to ensure accurate updates to the total price?
I kept track of the money using a totalPrice variable starting at 0. Every time a product is added, I store its numeric price inside li.dataset.price and call updateTotalPrice(price) to add it. When an item is removed, I read that stored price and call updateTotalPrice(-price) to subtract it. I also added a check (if totalPrice is less than 0, set totalPrice to 0) to prevent negative numbers.

### .3. How did you handle invalid input for product name or price?
I used .trim() on the product name to remove extra blank spaces and parseFloat() on the price to turn it into a number. Before creating any element, an if statement checks if the name is empty, if the price is not a number, or if the price is zero or negative. If any of those happen, an alert() message warns the user and return stops the function.

### .4. What challenges did you face when implementing the remove functionality?
The main challenge was making sure each new Remove button deleted only its own row and subtracted the right price. I solved this by attaching addEventListener('click', removeItem) to every button upon creation, using event.target.closest('li') to find the exact parent row, and reading item.dataset.price before calling item.remove().