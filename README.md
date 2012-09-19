# Meteor Environment Hooks

A hack to detect if code is running in a *development* or *production* environment

*Note: This is not necessarily reliable, so don't write code that will crash your spaceship if this breaks.* 

## Usage

### Server

For this to work server-side development machines need to have a file called `~/.meteor.cfg`. It can be empty or not, it just needs to be there. I said this was a hack right? (;

And in your code

    if (Meteor.env.isDevelopment)
      console.log('development!');

    if (Meteor.env.isProduction)
      console.log('production!');

### Client

For this to work client-side you have to configure production hosts somewhere in your client code (gross, I know)

    new MeteorEnv({
      hosts: ['myapp.meteor.com']
    });

In your templates

    {{#ifDevelopment}}
      <p>Development!</p>
    {{/ifDevelopment}}

    {{#ifProduction}}
      <p>Production!</p>
    {{/ifProduction}}

And in your code you can write the same code shown above in the server-side example

# Credits

Thanks to [Tom Wijsman](https://github.com/TomWiJ) for figuring out a way to make this work on the client
