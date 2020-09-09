FROM cypress/base:10

ARG gitcommithash

COPY ./package.json package.json
COPY ./cypress.json cypress.json
COPY ./cypress/   cypress/