const dashboardHandler = async (event) => {
    event.preventDefault();
  
    const title_dashboard = document.querySelector('#title_dashboard').value.trim();
    const content_dashboard = document.querySelector('#content_dashboard').value.trim();
   
  
    if (title_dashboard && content_dashboard) {
      await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({ title_dashboard, content_dashboard }),
        headers: { 'Content-Type': 'application/json' }
      });

    document.location.reload();
    }
};

  document
    .querySelector('#dashboard-form')
    .addEventListener('submit', dashboardHandler);
  