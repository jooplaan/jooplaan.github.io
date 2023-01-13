async function getMyFavQuotes() {
	let divQotd = document.querySelector('#qotd');
	let url     = 'https://favqs.com/api/quotes/?filter=joop&type=user';

	utils.getJSON(url).then(function (quotes) {
		let randQuote     = randomQuote(quotes['quotes']);
		divQotd.innerHTML = displayQuote(randQuote);
	}).catch(function (e) {
		console.error('error - ' + e);
	});
}

function displayQuote(quote) {
	let html = ''
	html += '<blockquote cite="' + quote['url'] + '">';
	html += '<p>' + quote['body'] + '</p>';
	html += '<cite>' + quote['author'] + '</cite>';
	html += '</blockquote>';
	return html;
}

function randomQuote(obj) {
	var keys = Object.keys(obj);
	return obj[keys[ keys.length * Math.random() << 0]];
}

let utils = {};
utils.get = (url) => {
	return new Promise(function (resolve, reject) {
		let req = new XMLHttpRequest();
		req.open('GET', url);
		req.setRequestHeader('Authorization', 'Token token="87e978b732c0bb81f382495caa143e98"');
		req.onload = function () {
			if (req.status == 200) {
				resolve(req.response);
			}
			else {
				reject(Error('promise error with ' + req.status));
			}
		};
		req.onerror = function (err) {
			reject(Error('Network Error with ' + url + ': ' + err));
		};
		req.send();
	});
}

utils.getJSON = async function (url) {
	var data   = {};
	var string = null;
	try {
		string = await utils.get(url);
	}
	catch (e) {
		console.error('error: ' + e);
	}
	try {
		data = JSON.parse(string);
		success = true;
	}
	catch (e) {
		console.error('parse error');
	}
	return data;
}

getMyFavQuotes();
