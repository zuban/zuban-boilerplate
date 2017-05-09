// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas, injectRightsChecker } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'loginContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LoginContainer/reducer'),
          import('containers/LoginContainer/sagas'),
          import('containers/LoginContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('loginContainer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/signup',
      name: 'signupContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SignupContainer/reducer'),
          import('containers/SignupContainer/sagas'),
          import('containers/SignupContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signupContainer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/remember',
      name: 'rememberPassContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RememberPassContainer/reducer'),
          import('containers/RememberPassContainer/sagas'),
          import('containers/RememberPassContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('rememberPassContainer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/home',
      name: 'filesContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/FilesContainer/reducer'),
          import('containers/FilesContainer/sagas'),
          import('containers/FilesContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('filesContainer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
