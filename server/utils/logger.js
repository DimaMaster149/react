import _config from '../bin/config';
const config = _config.notifications;

const consoleLogEnabled = config.consoleLogEnabled;
const mailLogInDevMode = config.mailLogInDevMode;
const mailLogEnabled = config.mailLogEnabled;

const modes =
    {
        production: "production",
        development: "development"
    };


// - format utils/messages -
const messages =
    {
        endl: "\n",
        _separator: "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=",
        separator: "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= \n",

        timeMessage: "| Time: ",

        masterStartedMessage: "| Mater started on port: ",
        workerStartedMessage: "| Worker started on port: ",
        workerDiedMessage: "| Worker died: ",
        workerSpawnMessage: "| Processing worker spawn...",
        pidMessage: "| Process ID: ",
        workersExpectedMessage: "| Expected count of workers: ",
        databaseConnectionError: "| Failed to connect to database: ",
        serverModeMessage: "| Server working on mode: ",
        queryMessage: "| Query: ",
        urlMessage: "| Url: ",
        authErrorMessage: "| Auth error: "
    };

// =-=-=-=-=-=-=-=


class Logger
{

    static _logBoth(message)
    {
        this._logToConsole(message);
        this._logToMail(message);
    }

    static _logToConsole(message)
    {
        if (consoleLogEnabled)
        {
            console.log(message);
        }
    }

    static _logToMail(message)
    {
        const prodModeAndEnabled = process.env.NODE_ENV === modes.production && mailLogEnabled;
        const devModeAndDevLogEnabled = process.env.NODE_ENV === modes.development && mailLogEnabled && mailLogInDevMode;

        if(prodModeAndEnabled || devModeAndDevLogEnabled)
        {
            // ======================
        }
    }

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=

    static SQLQueryError(error, query)
    {
        const errorTime = Date();
        const errorQuery = messages.queryMessage + query;

        const errorMessage = messages.separator +
            errorTime + messages.endl +
            messages.timeMessage + errorQuery + messages.endl +
            error + messages.endl +
            messages.separator;

        this._logToConsole(errorMessage);
    }

    static apiError(error, message, url)
    {
        const errorTime = Date();

        const errorMessage = messages.separator +
            message.timeMessage + errorTime + messages.endl +
            messages.urlMessage + url + messages.endl +
            error + messages.endl +
            messages.separator;

        this._logToConsole(errorMessage);
    }

    static userAuthError(error, login)
    {
        const errorTime = Date();

        const errorMessage = messages.separator +
            messages.timeMessage + errorTime + messages.endl +
            messages.authErrorMessage + login + messages.endl +
            messages.separator;

        this._logToConsole(errorMessage);В
    }
}

module.exports = Logger;
export default Logger;