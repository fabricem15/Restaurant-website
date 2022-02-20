

let restaurant_A = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			9: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			10: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			11: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			12: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			13: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
};

let restaurant_B = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let restaurant_C = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

let restaurants = [restaurant_A, restaurant_B, restaurant_C];


let req = new XMLHttpRequest();
let currentRest = {}
let empty = document.createElement('img');

let itemsInCart = [];
let subtotal = 0;
let numImages = 0;
let total = 0;

let restId = 0;


// html elements
const menu = document.getElementById("menu");
const links = document.getElementById("links");
const info = document.getElementById("info");
const order = document.getElementById("order");
const dropdown = document.getElementById("selection");


function init(){
	populateSelection();
}
	


// Dynamically add items to the drop down menu
function populateSelection () {
	for (let i = 0; i < restaurants.length; i++){
		const option = document.createElement("option");
		option.textContent = restaurants[i].name;
		option.value = i;
		option.className = "options";
		dropdown.appendChild(option);
	}
	displayMenu();
	// displayCart();
	dropdown.addEventListener("change", selectRestaurant);	
}
// listen to dropdown menu events
function selectRestaurant (){
	
	menu.innerHTML = "";
	links.innerHTML = "";
	info.innerHTML = "";
	order.innerHTML = "";
	numImages = 0;

	
	// If there are items in cart confirm the user's selection
	if (subtotal > 0){
		let cancelOrder = window.confirm("You currently have items in order. Do you want to cancel your order and switch restaurants?");
		if (cancelOrder){
			itemsInCart = [];
			subtotal = 0;
			displayMenu();
		}
		else {
			currentRest = restaurants[dropdown.value];
			dropdown.value = restId;
			displayMenu();
			displayCart(subtotal);
		}
		return;
	}


	displayMenu();


	empty.src = '/images/empty_cart.png';
	empty.id = "emptyCart";
	order.append(empty);

}




// Process adding/removing items in cart
function handleCart(i, choice){

	let restaurant = currentRest;

	for (let category in restaurant.menu){
		for (let index in restaurant.menu[category]){
			if (index == i)
			{
				if (choice == 0){ // 0 for add
					itemsInCart[i]++; 
					subtotal += restaurant.menu[category][index].price;
				}
				else{ // 1 for remove
					itemsInCart[i]--;
					subtotal -= restaurant.menu[category][index].price;
				}
				
				displayCart(subtotal);
				return;
			}	
		}
	}
}
	

function displayCart(subtotal)
{
	order.innerHTML = "";

	// if there are items in cart, display the order summary
	if (subtotal > 0){
		let list = document.createElement("ul");
		order.appendChild(list);
		let rest = restaurants[dropdown.value];

		let min_spent= rest.min_order;
		let delivery_charge = rest.delivery_charge;

		for (let cat in rest.menu){
			for (let key in rest.menu[cat]){	
				if (itemsInCart[key] > 0){
					let img = document.createElement('img');
					img.src = '/images/remove.png';

					img.title = "Click to remove item from your cart";
					img.alt = "Remove item from cart";
					img.id = key;
					img.className = 'rmvImg';
					img.addEventListener('click', function (){handleCart(key, 1)});
				
					createCartItem(list, img, `${itemsInCart[key]} x ${rest.menu[cat][key].name} `, 
					`$${(rest.menu[cat][key].price * itemsInCart[key]).toFixed(2)}`, '');
				}
			}
		}
		
		let listItem = document.createElement("li");
		listItem.innerText = subtotal;
		listItem.id = "subtotal";

		
		// Order pricing
		let tax = subtotal * .10;
		list.append(document.createElement('hr'));

		createCartItem(list, null, 'Subtotal: ', `$${subtotal.toFixed(2)}`, 'subtotal');
		createCartItem(list, null, 'Tax: ',`$${(tax).toFixed(2)}`, 'tax', '');
		createCartItem(list, null, 'Delivery fee: ', `$${delivery_charge.toFixed(2)}`,'deliv_charge');

		if (subtotal < min_spent){ // invalid order
			createCartItem(list, null,'Minimum order: ',`$${min_spent.toFixed(2)}`, 'min_order' );
		
			let minimum = document.createElement('strong');
			minimum.innerText = `$${(min_spent - subtotal).toFixed(2)}`;
			let p = document.createElement('p');
			list.appendChild(p);
			p.append('You must add ');
			p.append(minimum);
			p.append(' to your order before submitting.');
		}
		else{
			list.append(document.createElement('hr'));

			total = subtotal + tax + delivery_charge;
			createCartItem(list, null, 'Total: ', `$${total.toFixed(2)}`, 'total');

			let checkout = document.createElement('div');
			checkout.id = "checkBtn";
			list.appendChild(checkout);
			
			let btn = document.createElement('button');
			btn.id = 'checkout';
			btn.textContent = "Checkout";
			checkout.appendChild(btn);
			btn.addEventListener('click', submitOrder);

		}
		return;
	}
	order.append(empty);
	
}

function displayMenu(){
	rest = restaurants[dropdown.value];
	currentRest = restaurants[dropdown.value];

	restId = dropdown.value;
	document.getElementById('container').style.display = 'flex';
	

	createElement('p', '', 'info', `Name: ${rest.name}`, "info");
	createElement('p', '', 'info',`Minimum order: $${rest.min_order.toFixed(2)}`, "info");
	createElement('p', '', 'info',`Delivery charge: $${rest.delivery_charge.toFixed(2)}`, "info");
	
	let counter = 0;
	let itemCounter = 0;

	for (let category in rest.menu){
		// menu categories
		let catDiv = document.createElement("div");
		catDiv.id = "Cat_"+ counter;
		catDiv.className = 'category';
		const menuCat = document.createElement("h3");
		menuCat.value = category;
		menuCat.textContent = category;
		menuCat.id = "MenuCat_"+ counter;
		menu.appendChild(menuCat);
		menu.appendChild(catDiv);
		// links to menu categories
		let cat = document.createElement("a");
		cat.className = 'link';
		cat.href = `#${menuCat.id}`
		cat.textContent = `${category}`;
		cat.append(document.createElement('br'));
		links.append(cat);

		
		// Add menu items
		for (let key in rest.menu[category]){
			
			let img = document.createElement('img');
			img.src = '/images/add.png'; // add an id to this image
			img.title = "Click to add item to your order";
			img.alt = "Add order to cart";
			img.id = itemCounter;
			img.className = "addImg";
			img.addEventListener('click', function (){handleCart(img.id, 0)});

			item = rest.menu[category][key];

			let menuItem = document.createElement("dl");
			menuItem.className = "menuItem";
			let itemName = document.createElement("dt");
			const itemDescription = document.createElement("dd");
			itemDescription.className = 'description'
			let price = document.createElement("dd");
			price.className= "price";
			price.textContent = `$${item.price.toFixed(2)}`
			itemName.value = 0;
			itemName.textContent = `${item.name}`;
			itemDescription.textContent = `${item.description}`;

			itemsInCart.push(0);

			catDiv.appendChild(menuItem);
			menuItem.appendChild(itemName);
			itemName.append(img);
			menuItem.append(itemDescription);
			// menuItem.append(document.createElement("br"));
			menuItem.append(price);
			itemCounter++;
		}
		counter++;
	}
}


function submitOrder(){
	let cartItems = {restaurantID: dropdown.value,restaurantName: currentRest.name, subtotal: subtotal, total: total, 
		fee: currentRest.delivery_charge, tax: currentRest.tax, order: {}}

	let confirm = window.confirm("Are you sure you want to submit your order?");
	if (confirm)
	{

		getItemsInCart(cartItems.order);  
		
		// make http post request to send restaurant data to server
		req = new XMLHttpRequest();
		req.onreadystatechange = function (){
			if (this.readyState === 4 && this.status == 200){

				alert(`Your order has been placed. Thank you for choosing ${currentRest.name}!`);
				subtotal = 0;
				total = 0;
				numImages = 0;
				// clear cart
				order.innerHTML = "";
				order.append(empty);

				// reset number of items in cart
				for (let i = 0; i < itemsInCart.length; i++)
				{
					if (itemsInCart[i] !=0){
						itemsInCart[i] = 0;
					}
				}
			}
		};
		req.open("POST", '/orders', true);
		req.setRequestHeader("Content-Type", 'application/JSON');
		req.send(JSON.stringify(cartItems));
	}
}
// initialize object to be sent to the server
function getItemsInCart(order){
	Object.keys(currentRest.menu).forEach(cat =>{
		Object.keys(currentRest.menu[cat]).forEach(id =>{
			if (itemsInCart[id] > 0){
				order[id] = {}
				order[id].quantity = itemsInCart[id];
				order[id].name = currentRest.menu[cat][id].name;
			}
		})
	});
}

// helper function to create html elements
function createCartItem(parentNode, childNode, text, price, id){
	let cartItem = document.createElement('li');

	if (id)
		cartItem.id = id;
	let span = document.createElement('span');
	span.className = 'values';
	span.textContent = price;

	
	if (childNode != null){
		cartItem.append(childNode);
	}

	cartItem.append(text);
	cartItem.appendChild(span);
	parentNode.appendChild(cartItem);
}

function createElement(type, id, clss, txt, parentId){
	let el = document.createElement(type);
	el.class = clss;
	el.id = id;
	el.innerText = txt;
	document.getElementById(parentId).appendChild(el);
}

