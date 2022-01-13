var trash = document.getElementsByClassName('bi-trash');

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log('clicked trash')
    const message = this.parentNode.parentNode.childNodes[3].innerText
    fetch('/house/messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'messages': message
      })
    }).then(response => {
      window.location.reload()
    })
  });
});