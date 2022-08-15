# Light Weight Caching in React
This is a simple app to display the idea of light weight caching of HTTP responses in React apps. To get a good feel for how this works, pull down the repo and inspect the items in the `/src` directory.

## What is Light Weight Caching
Light weight caching is a method to cache small HTTP data payloads in the front end for easier retrieval. If you have a page that has some data which has one filter / search / sort operation then this works very well. After the initial page load and data request, we create two state objects for data. The first is the inital data which will be unchanged through the lifetime of the page. The second state is a copy of the initial data that we use to render the data.

Some pages will make a call to the back end for every filter / search / sort operation which can lead to extra strain on the server. This may be necessary if you are mixing these operations and creating heavier queries. However, if you will only allow a single operation on the data, we can perform these operations on the functional state data object to display the operated on data. Then, when we want to reset the operation, we can copy the original data object into the display data object.

Again, this is light weight as we are not performing heavy operations, nor are we adding databases for caching the results. The idea is to store the data on the client to avoid any extra calls. This won't work for all or many applications, but when it does work it is effective for less calls and hopefully quicker operations.
