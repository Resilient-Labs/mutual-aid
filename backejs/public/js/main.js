var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log('clicked trash')
    const message = this.parentNode.parentNode.childNodes[3].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'message': message
      })
    }).then(response => {
      window.location.reload()
    })
  });
});