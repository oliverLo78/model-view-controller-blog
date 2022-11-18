const dashboardHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-dashboard').value.trim();
    const content = document.querySelector('#content-dashboard').value.trim();
   
  
    if (title && content) {
      const response = await fetch('/api/users/dashboard', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#dashboard-form')
    .addEventListener('submit', dashboardHandler);