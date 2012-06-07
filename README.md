# Meteor Environment Hooks

A hack to detect if code is running in a *development* or *production* environment

*Note: This is not necessarily reliable, so don't write code that will crash your spaceship if this breaks.* 

## Usage

Install the package and configure production hosts (if you want this to work on the client):

    new MeteorEnv({
      hosts: ['myapp.meteor.com']
    });

# Credits

Thanks to [Tom Wijsman](https://github.com/TomWiJ) for figuring out how to make this work in production
