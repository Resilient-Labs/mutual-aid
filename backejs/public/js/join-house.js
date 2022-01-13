var join = document.querySelectorAll('.join-house-btn');

Array.from(join).forEach((el)=>{
    el.addEventListener('click', sendHouse)
})

async function sendHouse(){
    const houseId = this.parentNode.childNodes[1]

    try{
        const response = await fetch('/join', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'houseId': houseId.value
            })
        }).finally(() => {
            window.location = "/dashboard"
        })
        const data = await response.json()
        console.log(data)
        window.location = "/dashboard"
    }catch(err){
        console.log(err)
    }
}

