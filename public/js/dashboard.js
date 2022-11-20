const dashboardHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-dashboard').value.trim();
    const content = document.querySelector('#content-dashboard').value.trim();
   
  
    if (title && content) {
      await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
      });

    document.location.reload();
    }
};

  document
    .querySelector('#dashboard-form')
    .addEventListener('click', dashboardHandler);
  