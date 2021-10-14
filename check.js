export default taskCompleted;
const taskCompleted = (e, items) => {
  const complete = e.target;
  items = [...JSON.parse(localStorage.getItem('items'))];

  complete.parentElement.classList.add('completed');
  for (let i = 0; i < items.length; i += 1) {
    if (complete.parentNode.id === items[i].id.toString()) {
      items[i].completed = complete.checked;
    }
  }
  localStorage.setItem('items', JSON.stringify(items));
};
