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