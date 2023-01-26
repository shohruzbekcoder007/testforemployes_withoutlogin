$(document).ready(function () {
    console.log($('.accordion-title'))
    $( ".accordion-title" ).click(function(event) {
        const name = event.target.getAttribute('data-name');
        const _id = event.target.getAttribute('data-id');
        console.log(name, _id)
        if(document.querySelector(`[data-open='${name}']`)){
            document.querySelector(`[data-open='${name}']`).classList.add('open-content')
        }
      });
    (() => {
        const options = {
            url: '/results/allres',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {}
        }

        axios(options)
            .then(response => {
                const groups = response.data
                console.log(groups)
            })
            .catch(err => {
                console.log(err)
            })
    })()
})