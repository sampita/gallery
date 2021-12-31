# Scroll to the bottom for my notes on this challenge 👇👇👇

Instructions:
We would like you to build a simple gallery application. This is estimated to take around 2 hours.



## Application requirements / mini-spec

The application must...

- show photos in a grid view on initial load
- support a full-screen mode
    - when the user clicks on an image, it will show the entire image fullscreen
    - when the user clicks on a 'close' button or the background, it will close the fullscreen image and return to the grid
- work in Chrome; we will not be evaluating other browsers for compatibility
- support smartphone/tablet (<800px wide) and desktop viewports
- query an API for a set of photos
    - sample data is provided in the attached photos.json, but you must access it via an http request, as if it was an API endpoint
- use only vanilla JavaScript; we won't accept solutions that use frameworks like React, Vue, jQuery, etc.
    - ES6 and any required polyfills are perfectly acceptable, but not required

Example mockups are provided in the `examples` folder of the challenge download; _you do not need to match them precisely_, but be prepared to explain the reasoning behind your design decisions!

*You must also include a readme file* that, in a few paragraphs, describes what additional changes and technical decisions you would make to your application if more time was available. Provide some detail about how they might be implemented if this project was to be released to Redfin's customers on our website. Think about design, maintainability, reusability, and your technical implementation — don't _just_ add pagination, although it'd be a great improvement!

*We will be evaluating your documentation along with your code!*

You are welcome to use any web server you like. For simplicity, we recommend using python's simpleHTTPServer, if you have python available, or [chrome webserver][cws].

## Quickstart with python SimpleHTTPServer

1. Download the [template code][code] provided and unzip anywhere, such as `~/code/myfolder`
2. from the command line,

	      cd ~/code/myfolder
	      python -m SimpleHTTPServer 8887

3. Open http://localhost:8887/index.html and
http://localhost:8887/data/photos.json in your browser, and you should see a “Hello World” page and some json data.


## Quickstart with chrome webserver

1. Download the [template code][code] provided and unzip anywhere, such as `~/code/myfolder`
2. Launch the chrome webserver
3. Click *choose folder* and set to `~/code/myfolder`
4. Open http://localhost:8887/index.html and http://localhost:8887/data/photos.json in your browser, and you should see a “Hello World” page and some json data.


[cws]: https://chrome.google.com/webstore/detail/web­server­for­chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en
[code]:https://drive.google.com/open?id=1S5mLGgLd9JGM1jmlaely0N2vEMGn6x-I

# Notes From Sam 👩🏻

## Technology Choices
I will begin by saying that I was given instructions that, contrary to the original instructions above, I was allowed to use React or NextJS if I wished. Due to the time constraints, I thought "Aha! I will definitely use React!" React was made for creating web apps relatively quickly that can change data WITHOUT reloading the page, which is perfect for this single page application where a user would be looking at a gallery of photos. Writing in VanillaJS would be more laborious and time-consuming. React also has the ability to hold information for you in its state and easily pass that information as props to child components.

I used *Create React App* for sake of speed for this challenge. It sets up your development environment for you and has client-side rendering. 

I also chose to use JSON Server (https://www.npmjs.com/package/json-server) because the challenge requires using API calls to get the photos. JSON Server is a really easy and quick way to get a full fake REST API in no time at all.

This application meets requirements for mobile responsiveness (tablets and phones) by using Flexbox and other responsive CSS styles.

What I'm most excited about is using React Portals(https://reactjs.org/docs/portals.html) for 
___

## If I had more time...
### SCALABILITY
If this wasn’t a timed challenge and I was thinking about scalability when beginning this app, I would implement NextJS for the sake of having the following:

NextJS comes with
* Server side rendering (speedier performance for customers and more consistent SEO performance)
* Built-in easy and dynamic routing and in-the-box 404 pages for incorrect routes (in case we were going to add more pages like a searchable map page, user profile/settings, etc)

### PERFORMANCE

If filtering and sorting for the photos were to be implemented in the future, I would definitely cache the image data, perhaps in local storage, so that we didn't have to pull that data from the API each time. Front-end filtering would be much quicker and performant from a user's perspective.

Ideally I would also implement GraphQL to be more performance efficient in querying data from the API, so instead of querying ALL the info that comes with each photo object in `photos.json` (which has a lot of stuff I don't need at all for this challenge), I could specify only which specific data I want to pull. This is added data security and privacy, but would also make for a cleaner codebase by avoiding some of the longer, more cumbersome data transformation functions on the front end like the following code found in `Gallery.js`:

```
useEffect(() => {
        apiHelpers.getAll("photos")
            .then((response) => {
                const imageURLs = response.map((obj) => getPhotoURL(obj))
                setPhotos(imageURLs)
            })
    }, [])

const getPhotoURL = (obj) => {
    return {
        id: obj.id,
        smallImg: obj.urls.small,
        fullImg: obj.urls.regular,
        description: obj.description,
        thumbnail: obj.urls.thum
    }
}
```

### STYLING
From a UI perspective, I would do a lot more UI styling (I had NO time to do any styling) to make the app appear clean, simple, and modern. A loading circle would definitely need to be used when loading the full-size images so that the user doesn't experience a laggy or choppy-feeling interface. I've worked with Material UI, a React component library, many times before and I love the polished look and easy customization it provides. I would probably implement Material UI or a similar library for this project. If we did not have UX team, I would find a group of test users to play around with the UI so I can take notes on where the hang ups are and which parts of the application are most cumbersome to users. Changing and tweaking micro elements overtime can have a drastic impact on performance and customer conversion.


How am I handling caching???

Styling:
Originally had unique CSS files, switched to useStyles/makeStyles for cleaner file structure and react’s useStyles has the additional benefit of

Performance:
Using smaller images for the grid view, cached for the shuffle feature in local storage, and only loading the larger files when a photo is clicked into full screen view

CSS grid?? Flex box? Material ui grid?

How did I handle mobile responsiveness???
React JSX <picture> tag

For shuffle function, I wanted to add one fun addition to the app at the end. I could’ve used a library called lodash which has a shuffle helper function, but to keep within the project parameters of only using React and javascript, I wrote out a longford function called “shufflePhotos” 



