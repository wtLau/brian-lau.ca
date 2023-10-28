# Lets Try to Understand Fetch

Topics: Blog

---

About: Its about Fetch and how to use it
Context: 

What do the readers understand: They are using fetch for getting data from apis, but they might not fully understand its capability

What don’t they understood: There are a lot of other feature this api offers

How to help they understand: Explain to them step by step what are the other ones

What’s one thing they could take from this piece of writing: Fetch is a powerful API

---

Hello there! As web dev we might have used fetch or similar technology to establish handshakes with various servers. There are depth in this layer of protocol and it works like magic. I have a distaste of black boxes so I am going to try demystify this layer of abstraction. In my career, I’ve used fetch but I never actually need to dig deep into how it works except for a few occasions where I had odd bugs with redirects and caches. After long hours of debugging and learning about the fetch api, I noticed there are so much more hidden in it and I want to share my learnings with you!

Fetch is a modern and simple way of making network requests that return a [Promise object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). It is platform agnostic, available on all major browser as a global method in both window and worker scope, as well as in JS runtime such as Node.js and Bun. 

## Overview

The Basic Syntax

```tsx
fetch(url)
```

The common approach when using Fetch() is with promise or async/await syntax. While Promise have built-in error handling method with catch(), we’ll need to use Try/Catch block for error handling for Async/Await.

Promise

```jsx
const url = 'www.brian-lau.ca/blog'

function getData(){
	fetch(url)
		.then((resp)=>{
			if (!resp.ok) throw new Error('was not a valid response');
      return resp.json(); //method to extract JSON string and convert it to an Object
		})
		.then()
		.catch((err) => {
      console.warn(err.message);
    });
}
```

Async/Await with Try/Catch ErrorHandling

```tsx
const url = 'www.apiendpoin.com/list'

function async getData(){
	try {
    let response = await fetch(url);
    if (!response.ok) throw new Error('not a valid response');
    let data = await response.json();
  } catch (err) {
    console.warn(err.message);
  }
}
```

The above snippets are more of an simple overview of how to use the fetch api and it should be sufficient for most read-only use case. The api could go alot a deeper on how we want to communicate with the HTTP protocols. Keep reading to learn more about the details.

## URL

As shown above, we need a url pointer to retrieve our resources and sometimes those url are built with logic with different states of our applications. In my experience we often need to play around with url parameters or pathnames to build a desired string representation of the URL, for example retrieving a specific item with an unique id, syncing url with application states, load a page with custom UI based with parameters etc. We could always build it with a string and concatenate the parts together but this method is often vulnerable to bugs and it requires additional steps to encode special characters using `encodeURIComponent`. 

Nowadays, there is a handy [`URL()` web api](https://developer.mozilla.org/en-US/docs/Web/API/URL) which we could use to read and update the pieces to construct a URL.

Basic usages 

```jsx
const url = new URL('https://brian-lau.ca') 

// or with a relative path
const withPath = new URL('../blog', 'https://brian-lau.ca')
```

Interesting bits about the URL object

```jsx
const urlObj = new URL("/blog?id=0", "https://brian-lau.ca")

urlObj.searchParams.get('id') // '0'
urlObj.searchParams.set('id', '1&0') // '1&0'

urlObj.host // 'www.brian-lau.ca'
urlObj.toString() // 'https://brian-lau.ca/blog?id=0'

urlObj.host = 'www.brian.ca'
console.log(urlObj.host) // 'www.brian.ca'
```

We could use this to pass it into `fetch` so we know this will be a URL object with type inferences (when using TS).

```jsx
const url = new URL("/blog?id=0", "https://brian-lau.ca")

fetch(url)
```

## HTTP Request & Response

Another part of fetch is the request object which we also have a `Request()` object which we could pass in to provide additional context to communicate with the sever. In return, we’ll receive a  `Response()` object as a result of our request.

Both request and response are constructed in a similar fashion with a header and a body. The header is where the configuration and setting goes that specify more of how, when. The body is the what is being carried with that flight. A response could be in various format such as text, html, xml, json, image, video etc. We need different handler such as `response.blob()` , `response.text()`, `response.json()` to manage different kind of media

```jsx
const request = new Request(url, {
	headers: {
		'content-type': 'applciation/json',
		'x-brian': 'hello' // custom header
	},
	method: 'GET',
	cache: 'no-store' // get from sever w/o cache lookup
})
```

```jsx
// Initialize a text file
const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});

let response = new Response(file, {
    status: 200,
    statusText: 'boo',
    headers: {
      'content-type': 'text/plain',
      'content-length': file.size,
      'x-brian': 'custom header name',
    },
  });
```

### Generating Content

After receiving a valid response we could update the html to render some useful information using `.setHTML()` method. 

```jsx
let list = document.getElementById('list'); // target element 

fetch(json) // url 
  .then((response) => {
    if (!response.ok) throw new Error('invalid');
    return response.json();
  })
  .then((data) => {
    const contentElement = data
      .map(({ id, name }) => {
        return `<li class="listitem" data-uid="${uid}">
          <p>${name}</p>
        </li>`;
      })
      .join(''); // concate all element as string

		// setHTML is used to parse and sanitize a string of HTML
		// Firefox v94 & Safari not supported yet
		list.setHTML(contentElement) 
  })
  .catch(console.warn);
```

## Authorization & Credentials

It wouldn’t be safe if the apis are not secured by authorization because anyone would be able to access those information. In order for us to retrieve private data we have to provide special keys to proof and verify our identify. There are many different implementation on how to achieve this layer of security, and the most common way are using URL query string, headers and cookies.  

The following code expands on previously learned concepts going in deeper on our fetch configuration to provide a bit more context to our sever. The exact way to communicate successfully is depends on how the backend implemented and its best to communicate with the backend developer on how this should be approached. For simplicity, we could be adding access key in our search param when user enter their API on the input form. To establish identity, we need modify the header to include the application’s api key as well as json web token for user authentication. 

```jsx
let url = new URL('https://www.brian-lau.ca/?privateblog=true')
url.searchParams.append('access-key', 'fg7Z2V6iJfAt$a') 

let header = new Headers()
header.append('x-api-key', 'heUHY85e*VL36R') // API key
header.append('Authorization', 'heUHY85e*VL36R123') // Json web token

let request = new Request(url, {
	method: 'GET', 
	header,
	cache: 'default',
	credentials: 'same-origin',
})

fetch(request)
	.then()
	...
```

## Uploading Information

We often need to upload information back to the sever to perform more complex operation like submitting a form for an application, uploading image to cloud, updating social media status etc. 

Compare to a `GET` request, we’ll need to change the request method to `POST`, specify the content-type (as [MIME Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types))in header on what the user is uploading, and attach the data (as [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)) we odd to upload to the request body. In the example below, I used the [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) constructor to grab multiple MIME type pieces out from the HTML form.  

```jsx
function onSubmit(){
	// The data we want to upload
	let body = new FormData(document.getElementById('contact-form'))

	let headers = new Headers({ 
		'Content-Type': 'multipart/form-data'
	})
	let request = new Request(url, {
		method: 'POST', 
		body,
		headers
	})

	fetch(request).then(...)
} 
```

# CORS

The last thing I wanted to cover is cross origin resource sharing (CORS). It is a protective  access-control protocol in HTTP to gate api calls that’s different from its own resources. 

The main idea is to have a “pre-flight” check with the 3rd party server with a “OPTION” method to get an approval on this request from the server. Upon successful check, the server would be responding with a `Access-Control-Allow-Origin: *` header (or to that particular domain) along with the the resources being requested. This is required step for making a change that would cause a side-effect on a 3rd party server. 

There are cases where cors are not required such as making a `GET` request that retrive a specific media types such as `x-www-form-urlencoded`, `multipart/form-data` or `test/plain`.

## Summary

To think more abstractly, the web is made out of a network of connections that connects with different machines remotely. Fetch is the digital bridges to make request and managing response to ensure the users get their data smoothly and correctly. In fact, this is the JavaScript interface for making HTTP calls. Its one of the pillar that I am yet to explore and get familiar with. There are other protocols that are not as common in web development world such as TCP, FTP and UDP etc. There are library that made those abstraction for us but I believe its important to dive deep and understand each of those technology well so I could flow in different layers. I will be sharing more of my learning in the future. Good luck and happy coding!

## References & Readings

[MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[MDN URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)