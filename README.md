# Backend-Exercise

To start the app, in the project directory run npm start.
Then to test the API you should use a suitable platform (I used Postmen).
When sending a POST request , enter the address:
http: // localhost: 3000 / orders
The server listens to port 3000, and the endpoint is orders.

In the body of the request, type as a JSON file the following format, for example:

{
     "food":
        [
             {
                 "name": "Pizza",
                 "description": "Hot pizza with spicy sauce",
                 "price": "f"
             },
             {
                 "name": "wine",
                 "price": 3.5
             }
        ]
}

Now, in order to get all the orders placed on the last day.
We will use the same address and this time the body of the request will stay emtpy.
We only changing the request to GET.
