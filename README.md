# vE-IDS

## Virtual Enterprise Information Display System

### Developed for VATUSA/VATSIM by Chris Mangan & Connor Allen

Install:

- Run pnpm install
- Populate ENV values. For database url, refer to Prisma docs.
- In schema.prisma, select appropriate values for what database software you are using.
- run npx prisma migrate deploy
- run `npm run server` for api routing
- run `ng serve` for frontend and enjoy
