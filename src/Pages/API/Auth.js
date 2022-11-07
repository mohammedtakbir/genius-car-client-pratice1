export const setAuthToken = (res) => {
    const currentUser = {
        email: res.user?.email
    };
    fetch('https://genius-car-server-pratice1.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('genius-token-practice1', data.token);
        })
}