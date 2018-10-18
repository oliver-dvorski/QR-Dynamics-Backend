# QR Dynamics

is the next iteration of [my dyanmic QR code generator](https://github.com/oliver-dvorski/qr).

I'm trying to create this without a component CSS framework.

Right now the project is at a stage where all supported types of static codes can be generated. The frontend deals with that. Dynamic codes are far more complex. Getting those to work is the current todo list.

# Installation
This app finally works with Docker. So installation is pretty straightforward.

1. Set up your .env file. You can just copy the _.env.example_ one into _.env_ (`cp .env.example .env`) and then just adjust what you need. Pay close attention to the OAuth data, you'll need to first register the app with the providers (Google, Facebook, Github).
2. Build the app: `docker-compose build && docker-compose up -d` (Remove the `-d` if you want to be able to stop the containers by terminating the consolse command)
3. Set the application key: `docker exec -it qr-dynamics_app_1 php artisan key:generate`
4. Run the migrations: `docker exec -it qr-dynamics_app_1 php artisan migrate`

And you're done. You can now access the app at `localhost:8000`

Errrrr... the front-end can't just yet be compiled with the docker setup. Running the npm scripts locally should work just fine but I'll be adding some magic to the Dockerfile to solve this in one of the following commits.
