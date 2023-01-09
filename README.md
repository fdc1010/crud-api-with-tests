# The starting code for a node.js server that renders a single static page using mock data.

## Part 1:

<pre>
- Store the profile data in a MongoDB database instead of in memory. For ease of testing, use mongodb-memory-server (https://github.com/nodkz/mongodb-memory-server) instead of connecting to an external database.
- Add a post route for creating new profiles. Note: you can re-use the same image for all profiles. You do not need to handle picture uploads.
- Update the get route to handle profile ids in the url. The server should retrieve the corresponding profile from the database and render the page accordingly.
</pre>

## Part 2:

<pre>
- Implement a backend API that supports the commenting and voting functionality described in the Figma: https://www.figma.com/file/8Iqw3VwIrHceQxaKgGAOBX/HTML/CSS-Coding-Test?node-id=0:1
- You do not need to implement the frontend. Assume that the frontend will call your backend API in order to create user accounts, post comments, get/sort/filter comments, and like/unlike comments.
- You do not need to implement secure auth or picture uploads. The only attribute needed for user accounts is name. Assume that anyone can access and use any user account.
- All data should be stored in the same database used in Part 1
</pre>

## Part 3:

<pre>
- Add automated tests to verify the implementation of Part 1 and Part 2.
</pre>