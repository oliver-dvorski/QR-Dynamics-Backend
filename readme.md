# QR Dynamics

is the next iteration of [my dyanmic QR code generator](https://github.com/oliver-dvorski/qr).

I'm trying to create this without a component CSS framework.

Right now the project is at a stage where all supported types of static codes can be generated. The frontend deals with that. Dynamic codes are quite a bit more complex. So far only dynamic web codes are being generated.

# Installation
To install the backend just run `docker compose build`. You can then run the application with `docker compose up` (use the `-d` flag to run it detached).

A little bit of initial configuration is required. Starting with copying the `.env.example` file to `.env`. After that you should set the application key with a command like this: `docker exec -it qr-dynamics-backend_api_1 php artisan key:generate` (replace the container name if required).

After all of that you should check your `.env` file. There you'll find some empty OAuth variables. Fill those in with the data you get from the OAuth providers.

# ToDo
- [x] eslint
- [x] Docker
- [ ] Testing
- [x] Hot module reload - Decouple front end
- [ ] A11y optimisation
