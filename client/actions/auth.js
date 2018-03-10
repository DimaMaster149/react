import { createActionAsync } from 'redux-act-async';
import messages from '../utils/messages';


const actions =
    {
        // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#

        login: createActionAsync('AUTH_LOGIN_COMMON', (data) =>
        {
            console.log(data);

            const loginUrl = '/api/auth/login';
            const body = JSON.stringify({ email: data.email, key: data.key});

            console.log(body);

            const settings =
                {
                    headers:
                        {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },

                    credentials: 'same-origin',
                    method: 'POST',
                    body: body,
                };

            return fetch(loginUrl, settings)
                .then(answer => answer.json())
                .then((data) =>
                {
                    if (data.confirmation == false)
                    {
                        throw new Error(messages.wrongCredentials);
                    }
                    else if (data.confirmation == true)
                    {
                        return Promise.resolve(data.answer.user);
                    }
                    // no connection
                    else
                    {
                        throw new Error(messages.connectionError);
                    }
                })
                .catch((error) =>
                {
                    // Wrong data or no connection;
                    return Promise.reject(error.message);
                });
            // !NO RETHROW TO DEAL WITH ERRORS ONLY IN PROMISE
        }, {noRethrow: true}),

        // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#

        signUp: createActionAsync('AUTH_SIGN_UP_COMMON', (data) =>
        {
            const loginUrl = '/api/auth/signUp';
            const body = JSON.stringify({user: {name: data.name, email: data.email, key: data.key, born_year: data.born_year, born_month: data.born_month, born_day: data.born_day,
                education: data.education, children: data.children, region: data.region, territory: data.territory}});

            console.log(body);

            const settings =
                {
                    headers:
                        {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },

                    credentials: 'same-origin',
                    method: 'POST',
                    body: body
                };

            return fetch(loginUrl, settings)
                .then(answer => answer.json())
                .then((data) =>
                {
                    if (data.confirmation == false)
                    {
                        throw new Error(data.answer.message);
                    }
                    else if (data.confirmation == true)
                    {
                        return Promise.resolve(data.answer.user);
                    }
                    // no connection
                    else
                    {
                        throw new Error("Error Connection");
                    }
                })
                .catch((error) =>
                {
                    // Wrong data or no connection;
                    return Promise.reject(error.message);
                });
            // !NO RETHROW TO DEAL WITH ERRORS ONLY IN PROMISE
        }, {noRethrow: true}),

        // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#

        checkAuth: createActionAsync('AUTH_CHECK_COMMON', () =>
        {
            const loginUrl = '/api/auth/status';
            const settings =
                {
                    headers:
                        {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },

                    credentials: 'same-origin',
                    method: 'GET'
                };

            return fetch(loginUrl, settings)
                .then(answer => answer.json())
                .then((data) =>
                {
                    if (data.confirmation == true)
                    {
                        if (data.answer.logged == true)
                        {
                            // move user data to storage
                            return Promise.resolve(data.answer.user);
                        }
                        else
                        {
                            // remove user data from storage
                            return Promise.resolve(null);
                        }
                    }
                    // no connection
                    else
                    {
                        throw new Error(messages.connectionError);
                    }
                })
                .catch((error) =>
                {
                    // Wrong data or no connection;
                    return Promise.reject(error.message);
                });
            // !NO RETHROW TO DEAL WITH ERRORS ONLY IN PROMISE
        }, {noRethrow: true}),

        // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#

        logout: createActionAsync('AUTH_LOGOUT', () =>
        {
            const logoutUrl = '/api/auth/logout';
            const settings =
                {
                    headers:
                        {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },

                    credentials: 'same-origin',

                    method: 'POST',
                };

            return fetch(logoutUrl, settings)
                .then(answer => answer.json())
                .then((data) =>
                {
                    if (data.confirmation == true)
                    {
                        return Promise.resolve();
                    }
                    else if (data.confirmation == false)
                    {
                        throw new Error(messages.logoutError);
                    }
                    // no connection
                    else
                    {
                        throw new Error(messages.connectionError);
                    }
                })
                .catch((error) =>
                {
                    // Wrong data or no connection;
                    return Promise.reject(error.message);
                });
            // !NO RETHROW TO DEAL WITH ERRORS ONLY IN PROMISE
        }, {noRethrow: true}),

        // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#

        clearMessage: (() =>
        {
            function clearMessage()
            {
                return {
                    type: clearMessage.type
                };
            }

            clearMessage.type = 'AUTH_CLEAR_MESSAGE';
            return clearMessage;
        })(),

        testAction: (() =>
        {
            function testAction()
            {
                return {
                    type: testAction.type
                };
            }

            testAction.type = 'AUTH_TEST_ACTION';
            return testAction;
        })(),
    };

export default actions;