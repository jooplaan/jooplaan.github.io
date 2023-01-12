let utils = {};
utils.get = (url) => {
	return new Promise(function (resolve, reject) {
		let req = new XMLHttpRequest();
		req.open('GET', url);
		req.onload = function () {
			// handle both remote 200 responses and local zero responses...
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
		// optional
		req.onreadystatechange = function (m) {
			console.log('m: ' + m);
		};
		req.send();
	});
}

utils.getJSON = async function (url) {

	var data = {};

	var string = null;
	try {
		string = await utils.get(url);
	}
	catch (e) {
		alert('error: ' + e);
	}
	try {
		data = JSON.parse(string);
		success = true;
	}
	catch (e) {
		alert('parse error');
	}
	return data;
}

async function init() {
	let divQotd = document.querySelector('#qotd');
	let url = 'https://favqs.com/api/qotd';
	let qotd = null;
	try {
		qotd = await utils.getJSON(url);
	}
	catch (e) {
		divQotd.textContent = 'error: ' + e;
	}
	console.log(qotd);
	divQotd.innerHTML = display_quote(qotd.quote);
}

function display_quote(quote) {

	let html = ''
	html += '<blockquote cite="' + quote['url'] + '">';
	html += '<p>' + quote['body'] + '</p>';
	html += '<cite>' + quote['author'] + '</cite>';
	html += '</blockquote>';

	// return the html
	return html;
}

async function init_then() {
	let divQotd = document.querySelector('#qotd');
	let url = 'https://favqs.com/api/qotd';

	utils.getJSON(url).then(function (qotd) {
		divQotd.innerHTML = display_quote(qotd.quote);
	}).catch(function (e) {
		alert('error - ' + e);
	});
}
init_then();
