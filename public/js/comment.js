const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('#comment-id"]').innerHTML;
    const body = document.querySelector('#description-body').value;
    // send a fetch request to add a new comment 
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);