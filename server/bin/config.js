const config =
    {

        // =-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=

        notifications:
            {
                consoleLogEnabled: true,

                mailLogInDevMode: false,
                mailLogEnabled: false,
                notificationMails:
                    [
                        "example@gmail.com",
                    ],
            },


        // =-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=

        session:
            {
                secret: "your_secret_here",
                resave: false,
                saveUninitialized: false
            },

        // =-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=

        passwords:
            {
                hashRounds: 10,
                salt: 'your_salt_here'
            },
    };

module.exports = config;
export default config;