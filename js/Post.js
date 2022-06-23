class Post {
	post_id = '';
	post_content = '';
	user_id = '';
	likes = '';
	api_url = 'https://62b320bca36f3a973d1c1442.mockapi.io';

	async create() {
		let session = new Session();          //<----OVO JE TRENUTNI ULOGOVANI KORISNIK
		session_id = session.getSession();

		let data = {
			user_id: session_id,
			content: this.post_content,
			likes: 0
		}

		data = JSON.stringify(data);  // pretvaramo ovo u json objekat

		let response = await fetch(this.api_url + '/posts', {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: data
		});

		data = await response.json();

		return data;

	}
}