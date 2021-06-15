
const form = document.querySelector('form');
const position = navigator.geolocation;


form.addEventListener('submit', (e) => {

    e.preventDefault();

    const long = e.target[0].value;
    const lat = e.target[1].value;

    if (long !== '' || lat !== '') {

        submitHandler({ long, lat });

    }

});

async function submitHandler(formData) {
    const formDataString = JSON.stringify(formData);
    const options = {
        method: "POST",
        body: formDataString,
        tyoe: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch('http://127.0.0.1:3000/api', options);
    const data = await response.json();
    console.log(data);
}