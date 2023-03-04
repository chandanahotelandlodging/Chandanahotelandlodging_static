

let navbar_items = [document.querySelector('.item1'), document.querySelector('.item2'), document.querySelector('.item3'), document.querySelector('.item4'), document.querySelector('.item5'), document.querySelector('.item6')];

navbar_items.forEach(nav_item => {
    nav_item.addEventListener('mouseover', () => {
        nav_item.classList.add('text-light');
    })
    nav_item.addEventListener('mouseout', () => {
        nav_item.classList.remove('text-light');
    })
});