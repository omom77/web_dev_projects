// Below command puts it in a node list similar to an array
// it can be iterated through
const tabItems = document.querySelectorAll('.tab-item');

const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item 
function selectItem(e) {
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');

    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // add show class
    tabContentItem.classList.add('show');
    console.log(this.id);
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow (){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Event listener
// Listen for click
tabItems.forEach(item => item.addEventListener('click', selectItem));
