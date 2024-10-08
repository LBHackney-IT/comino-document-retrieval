# comino-document-retrieval
An API able to retrieve documents from Comino

## Notice!
This application & its cloud resources have been **decomisioned**. Read more within the [PR#80](https://github.com/LBHackney-IT/comino-document-retrieval/pull/80) and **document 3** linked within it.

## Context
Hackney run several Comino document management systems developed by Civica. Post cyber-attack, Civica restored the Comino MS SQL Server instances and image servers into their Azure data centre, but Hackney no longer has direct access to them.
The objective of the PoC is to see whether it is possible to retrieve documents into S3.
Because it is a PoC it does not need to have a UI.
If the PoC is successful Hackney will want to pursue a strategy to exit the documents from Comino in bulk in order that the application can be decommissioned.

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
To access the database please follow the [Database Guide](docs/diagrams/comino-document-retrieval-poc-sequence-diagram.svg)

## S3
Currently, when files are retrieved from Civica they are saved in an S3 folder without any formating.
In future updates files will still be saved in the S3 folder without any formating, 
but there will also be a new folder that will contain the files saved in their respective format 
such as txt and pdf

## Documentation
- [Diagrams](/docs/diagrams)
- [Guides](/docs/guides)



# Contributing

### Setup

1. Install [Docker][docker-download].
2. Install [AWS CLI][aws-cli].
3. Clone this repository.
4. Open it in your IDE.


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

[docker-download]: https://www.docker.com/products/docker-desktop
[aws-cli]: https://aws.amazon.com/cli/