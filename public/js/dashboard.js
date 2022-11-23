const dashboardHandler = async (event) => {
    event.preventDefault();

    const post_title = document.querySelector('#title_dashboard').value.trim();
    const description = document.querySelector('#content_dashboard').value.trim();
   
    console.log(title_dashboard);
    // if (title_dashboard && description) {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ post_title, description }),
        headers: { 'Content-Type': 'application/json' }
      });

    // document.location.reload();
     document.location.replace('/')
    }
// };

  document
    .querySelector('#dashboard-form')
    .addEventListener('click', dashboardHandler);
  