$(document).ready(function () {
    console.log($('.accordion-title'))
    $(".accordion-title").click(function (event) {
        const name = event.target.getAttribute('data-name');
        const _id = event.target.getAttribute('data-id');
        console.log(name, _id)
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" fill="#000000" width="20px" height="20px" viewBox="0 0 64 64" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">

        <rect id="Icons" x="-768" y="-64" width="1280" height="800" style="fill:none;"/>
        
        <g id="Icons1" serif:id="Icons">
        
        <g id="Strike">
        
        </g>
        
        <g id="H1">
        
        </g>
        
        <g id="H2">
        
        </g>
        
        <g id="H3">
        
        </g>
        
        <g id="list-ul">
        
        </g>
        
        <g id="hamburger-1">
        
        </g>
        
        <g id="hamburger-2">
        
        </g>
        
        <g id="list-ol">
        
        </g>
        
        <g id="list-task">
        
        </g>
        
        <g id="trash">
        
        </g>
        
        <g id="vertical-menu">
        
        </g>
        
        <g id="horizontal-menu">
        
        </g>
        
        <g id="sidebar-2">
        
        </g>
        
        <g id="Pen">
        
        </g>
        
        <g id="Pen1" serif:id="Pen">
        
        </g>
        
        <g id="clock">
        
        </g>
        
        <g id="external-link">
        
        </g>
        
        <g id="hr">
        
        </g>
        
        <g id="info">
        
        </g>
        
        <g id="warning">
        
        </g>
        
        <g id="plus-circle">
        
        <path d="M16.118,29.968l13.754,0l0,-13.747l3.961,0l0,13.747l14.239,0l0,3.961l-14.239,0l0,14.246l-3.961,0l0,-14.246l-13.754,0l0,-3.961Z"/>
        
        <path d="M32.142,56.083c6.179,-0.059 12.297,-2.619 16.696,-6.966c5.225,-5.164 7.916,-12.803 6.978,-20.096c-1.609,-12.499 -11.883,-20.98 -23.828,-20.98c-9.075,0 -17.896,5.677 -21.765,13.909c-2.961,6.302 -2.967,13.911 0,20.225c3.842,8.174 12.517,13.821 21.61,13.908c0.103,0.001 0.206,0.001 0.309,0Zm-0.283,-4.003c-9.23,-0.089 -17.841,-7.227 -19.553,-16.378c-1.208,-6.452 1.071,-13.433 5.818,-18.015c5.543,-5.35 14.253,-7.143 21.496,-4.11c6.481,2.714 11.331,9.014 12.225,15.955c0.766,5.949 -1.369,12.184 -5.565,16.48c-3.68,3.767 -8.841,6.016 -14.164,6.068c-0.085,0 -0.171,0 -0.257,0Z" style="fill-rule:nonzero;"/>
        
        </g>
        
        <g id="minus-circle">
        
        </g>
        
        <g id="vue">
        
        </g>
        
        <g id="cog">
        
        </g>
        
        <g id="logo">
        
        </g>
        
        <g id="radio-check">
        
        </g>
        
        <g id="eye-slash">
        
        </g>
        
        <g id="eye">
        
        </g>
        
        <g id="toggle-off">
        
        </g>
        
        <g id="shredder">
        
        </g>
        
        <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]">
        
        </g>
        
        <g id="react">
        
        </g>
        
        <g id="check-selected">
        
        </g>
        
        <g id="turn-off">
        
        </g>
        
        <g id="code-block">
        
        </g>
        
        <g id="user">
        
        </g>
        
        <g id="coffee-bean">
        
        </g>
        
        <g id="coffee-beans">
        
        <g id="coffee-bean1" serif:id="coffee-bean">
        
        </g>
        
        </g>
        
        <g id="coffee-bean-filled">
        
        </g>
        
        <g id="coffee-beans-filled">
        
        <g id="coffee-bean2" serif:id="coffee-bean">
        
        </g>
        
        </g>
        
        <g id="clipboard">
        
        </g>
        
        <g id="clipboard-paste">
        
        </g>
        
        <g id="clipboard-copy">
        
        </g>
        
        <g id="Layer1">
        
        </g>
        
        </g>
        
        </svg>`
        if (document.querySelector(`[data-open='${name}']`)) {
            document.querySelector(`[data-open='${name}']`).classList.add('open-content');
            const options = {
                url: `/results/allres?answer=${name}`,
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
                    let new_table_body = ``
                    groups.forEach(element => {
                        new_table_body = new_table_body + `<tr><td>${element.answer=="a"?svg:""}</td><td>${element.answer=="b"?svg:""}</td><td>${element.text}</td></tr>`
                    });
                    console.log(groups)
                    document.querySelector(`[data-open-table='${name}']`).innerHTML = new_table_body
                })
                .catch(err => {
                    console.log(err)
                })
        }
    });
})