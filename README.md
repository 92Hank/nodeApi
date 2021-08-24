# nodeApi
Inlämning 3 av Henrik
NodeJS express CRUD API

## Beskrivning:
Detta är ett REST-API i NodeJS med express.
* NodeJS och express
* CRUD funktionalitet med 7 endpoints (GET, DELETE, PUT, POST, PATCH).
* 4 egenskaper för objektet varav en utav dessa är id.
* För att hantera all data så använder jag en JSON-fil.

## För att starta API:iet:
* npm install först så alla paket skall fungera
* npm start
* Det finns en server.http-fil så man kan testa alla olika endpoints

## Alla Endpoints:
* GET http://localhost:3011/api/movies (G-krav)
* GET http://localhost:3011/api/movies/:id (VG-krav)
* GET http://localhost:3011/api/movies/search/?:id&title (Extra funktionalitet/endpoint)
* POST http://localhost:3011/api/movies (G-krav)
* PUT http://localhost:3011/api/movies/:id (G-krav)
* DELETE http://localhost:3011/api/movies/:id (G-krav)
* PATCH http://localhost:3011/api/movies/:id (Extra funktionalitet/endpoint)

## Funktionskrav
Krav för godkänt:
* Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs) **[JA]**
* Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http) **[JA]**
* Datan som API:et hanterar sparas lokalt i serverfilen **[JA]**
* Git & GitHub har använts **[JA]**
* Projektmappen innehåller en README.md fil - (läs ovan för mer info) **[JA]**
* Uppgiften lämnas in i tid! **[JA]**

Krav för väl godkänt:
* Alla punkter för godkänt är uppfyllda **[JA]**
* All data skall vara sparad i en JSON-fil istället för i serverfilen **[JA]**
* Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort **[JA]**
* Ett simpelt klient-gränssnitt skall finnas för att anropa API:ets olika endpoints, samt visa upp resultatet vid GET anrop **[NEJ]**

* Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt **[JA]**

## Checklista för inlämning

- Jag har tagit bort onödig/oanvänd kod
- Jag har tagit bort onödiga kommentarer
- Jag har formaterat min kod fint
- Jag har skrivit rapporten
- Jag har checkat av vilka funktionskrav jag anser att jag klarat genom att skriva **[JA]** eller **[NEJ]** efter dem i Readme.md. Exempel:

> - Alla endpoints ska ta emot eller returnera JSON-data **[JA]**
> - I API:et ska resursen **film** finnas: **[JA]**
>   - Det ska gå att lägga till en ny film **[JA]**
>   - Det ska gå att ändra en film **[JA]**
>   - Det ska gå att hämta alla filmer i en lista **[JA]**
>   - Det ska gå att ta bort en film **[JA]**
>   - Det ska gå att hämta en film **[JA]**

