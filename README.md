# software-botler
Dette er en all-purpose bot til Software 2019s discordserver.

Det er super nemt at programmere en Discordbot. Søg på Google eller YouTube for nemt at komme igang. Vi bruger modulet `discord.js` (ikke `discord.io`).

## Formål
Denne bot er tænkt som en bot, som kun skal bruges på Software 2019s discordserver.

Tanken er at man selv kan implementere den funktionalitet, man synes mangler på serveren.

## Prerequisites
* Git (sjovt nok)
* Node
* En token.json-fil med en token:
```json
{
  "token": "your_token_goes_here",
}
```
Vi holder production-bottens token hemmelig, så der ikke kommer til at køre flere instanser af botten på samme tid. Det betyder at I selv skal lave en bot, som I kan køre lokalt og teste på.

## Code style
Code style bliver primært håndhævet af lintingværktøjet ESLint. Du skal dog være opmærksom på følgende:
* Fil- og mappenavne angives med snake_case
* Begræns brugen af globale variable (`global.bot` og `global.prefix` er godkendt)
