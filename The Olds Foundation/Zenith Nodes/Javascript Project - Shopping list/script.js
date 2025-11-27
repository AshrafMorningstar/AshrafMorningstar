/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

let addItemBtn = document.querySelector('.addBtn');
let addItemsForm = document.querySelector('.addItemsForm');
let listContainer = document.querySelector('.listContainer');
let listContainerUl = document.querySelector('.listContainer ul');
let text = document.querySelector('#text');
const removeShopping = document.querySelector('#clearItems');
// Shopping list ----
let shoppingList = JSON.parse(localStorage.getItem('shopping')) || [];


// Add items Function =====
function addItems(items){
	listContainerUl.innerHTML = items.map((item) => {
		return `
				<li>${item}</li>
				`;
	}).join('');
}

// Delete Local Storage ======
function clearItems(e){
	e.preventDefault();
	// Empty Local Storage ====
	localStorage.clear();
	// Empty Array ======
	shoppingList = [];
	// Empty UL ====
	listContainerUl.innerHTML = '';
	// Add back in text =====
	text.innerHTML = 'Your Shopping list is empty, add something...';
}

// Add Item Function ========
function addItem(){
	addItemBtn.innerHTML = 'loading...';
	setTimeout(function(){	
		// hiding button
		addItemBtn.classList.add("hide");
		// showing form
		addItemsForm.classList.add("show");
	}, 500);
}	

// Add item to list btn =======
	$('#addtolistBtn').on('click', function(e){
		e.preventDefault();
		text.innerHTML = '';
		var item = $('input').val();
		if(item === '') return;
		
		// Add item to Array.
		shoppingList.push(item);
		// Set item in LocalStorage
		localStorage.setItem('shopping', JSON.stringify(shoppingList));
		addItems(shoppingList);
		$('#itemInput').val('');

	});


// Call addItems Function =====
addItems(shoppingList);

addItemBtn.addEventListener('click', addItem);
removeShopping.addEventListener('click', clearItems);