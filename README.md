# comino-document-retrieval
An API able to retrieve documents from Comino

## Active Endpoints

- ping : returns OK if the server is running
- metadata/id : returns the metadata for the id provided
- metadata/download/id : returns the file for the id provided
- metadata/documentUrl/id : returns the document url for the id provided

## Deprecated Endpoints:
- download/id : returns the file for the id provided
- documentUrl/id : returns the document url for the id provided

These endpoints use the id from the image server to return the document from the image server.
This behavior will not be necessary, so these endpoints are being replaced.

## Database
Our database contains 4 tables:
 - CCDocument
 - W2Attachment
 - W2Email
 - W2Image
 - W2Page

Currently CCDocument contains a small set of values while the rest of the tables contain the full set of values. 
In the future all tables will contain the full set of values.
To access the database please follow the guide in docs/diagrams/comino-document-retrieval-poc-sequence-diagram.svg

## S3
Currently, when files are retrieved from Civica they are saved in an S3 folder without any formating.
In future updates files will still be saved in the S3 folder without any formating, 
but there will also be a new folder that will contain the files saved in their respective format 
such as txt and pdf

## Running locally:
To run locally run the command:
```sh
$ npm start
```

## Running tests
To run test run the command:
```sh
$ npm test
```