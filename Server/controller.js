// require('dotenv').config();
// const apiKEY = process.env.API_KEY;

// need to pass above object and the API key into the request to the API.
// we added some .env stuff, not being used as this page is sufficient
// having a .env folder for private info like an API key or database log in info is best practice
// but we didn't have time to implement/didn't need to because of the scope of this project

// init const StretchController, an object that stores the functionality
const StretchController = {
  // The getStretches method is a function that accepts 3 params, req, res, next, and stores the result of a fetch request to the exercises api in our
  getStretches: async (req, res, next) => {
    try {
      // init const muscle as muscle prop of request query
      const { muscle } = req.query;
      // init const apiRes as output from api request
      const response = await fetch(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&type=stretching`,
        {
          method: 'GET',
          headers: { 'X-Api-Key': 'SReYt5aEyGMKzrdSe87wew==boZAObqiLCiQPGrb' },
        }
      );
      // Parse the JSON response
      const apiRes = await response.json();
      // store apiRes in res.locals
      res.locals.apiRes = apiRes;
      // return the invocation of next to move to next middleware
      return next();
    } catch (error) {
      const errorObject = {
        // log to developer
        log: 'Error occurred in StretchController.GetExercise',
        // message to client
        message: { error: 'An error has occurred in getting an exericse' },
        status: 400,
      };
      // pass error object to global error handler
      return next(errorObject);
    }
  },
};

StretchController.getStretches(
  { muscle: 'Ilikemuscles' },
  { locals: {} },
  () => {}
);

module.exports = StretchController;
