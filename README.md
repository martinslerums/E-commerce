# Getting started

Install all the neccessary dependencies

```bash
npm install
```

## Run the project

1. Start data-base

```bash
npm run db
```

2. Run development server

```bash
npm run dev
```

## Par darbu

### Aprakstīt (īsi), kādas tehnoloģijas izmantojāt projekta izstrādei (var readme.md datnē)

- Projekts izstrādāts izmantojot Typescript + React frameworku. "Mock" dati tiek glabāti ./data/db.json izmantojot JSON-server bibliotēku. Projektā izmantotas pāris ikonas no react-icons bibliotēkas.

### Aprakstīt kādas vēl atvērtā koda komponentes būtu nepieciešamas risinājuma darbībai (OS, datu bāze, tīmekļa risinājumu serveris), var readme.md datnē.

- OS: Lai hostētu aplikāciju vislabak būtu izmantot kādu no Linux distribūcijām (Ubuntu, CentOS, vai Debian). Šīs operētājsistēmas nodrošina stabilitāti, drošību un mērogojamību tīmekļa lietojumprogrammu hostēšanai. Lielākā daļa Linux distribūciju ir "open-source" un pieejamas bez maksas. 

- Datubāze: Lai effektīvāk uzturētu ekomercijas risinajumu izmantotu kādu no SQL datubāzēm ( piemēram PostgreSQL vai MySQL ). 
  Piemērotība: relāciju datu bāzes ir piemērotas e-komercijas veikaliem ar strukturētiem datiem un sarežģītām attiecībām starp entītijām, piemēram, produktiem, pasūtījumiem, klientiem un krājumiem.
  Elastīgums: tās piedāvā jaudīgas vaicāšanas iespējas un atbalstu sarežģītiem savienojumiem.
  
- Back-end: Kā back-end risinajumu izmantotu Express.js (Node.js).

- Papildus varētu pievienot kādu no Javascript UI komponentšu bibliotēkām (kā piemēram MaterialUI vai Shadcn) lai applikācija izskatītos pievilcīgāka. Applikācijā varētu tikt būvēta izmantojot React frameworku NextJS, kas  uzlabotu "performance", dotu iespēju effektīvi implementēt autentificēšanās mehānismu izmantojot Next-auth bibliotēku.
