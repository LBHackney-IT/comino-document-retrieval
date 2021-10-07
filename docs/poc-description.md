# Proof of concept to retrieve documents from Civica's Comino image server

We are running this proof of concept to demonstrate that we can retrieve documents from Civica's Comino image server and store them into an S3 bucket as described in [this document](https://docs.google.com/document/d/189t-SEf5w15GR06Z8QMIw5bX9P9gamLDaoweLR0Gul8/edit#)

As all network traffic routed out through Hackney AWS hub has access to the Civica's Comino image server, we're going to make a GET request to a lambda. After that, the lambda will make a GET request to the image server to retrieve the document and will save it into an S3 bucket. The response from the lambda should be a download url for the requested document.

A diagram for the process described above can be found on Miro [here](https://miro.com/app/board/o9J_kgEWTBE=/) in the `Comino PoC` frame.
