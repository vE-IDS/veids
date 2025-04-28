# vE-IDS

## Virtual Enterprise Information Display System

### Developed for VATUSA/VATSIM by Chris Mangan & Connor Allen

Install:

- Run pnpm install
- Populate ENV values. For database url, refer to Prisma docs.
- In schema.prisma, select appropriate values for what database software you are using.
- run npx prisma migrate deploy for initial database population.
- run `nx serve veids` for frontend
- run `nx serve server` for API
