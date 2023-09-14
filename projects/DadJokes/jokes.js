const getDadJoke = async () => {
    const dadJoke = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    });
    const dadJokeJSON = await dadJoke.json();
    if (dadJokeJSON.status === 200) {
        return dadJokeJSON;
    } else {
        return "Error retrieving dad joke!"
    }
};

const loadDadJoke = async () => {
    const joke = await getDadJoke();
    const parts = joke.joke.split('?');
    console.log(parts);

    const jokeText = document.querySelector('.joke');
    const answerText = document.querySelector('.answer');

    if (parts) {
        jokeText.textContent = parts[0];
        if (parts.length > 1) {
            answerText.textContent = parts[1];
        } else {
            answerText.textContent = '';
        }
    }
}

const button = document.querySelector('.nextJoke');
button.addEventListener('click', loadDadJoke)

loadDadJoke();

