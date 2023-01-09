import db from '../models/index.js';

const globalTeardown = async () => {
    await global.__DB__.mongoose.disconnect();
    await global.__MONGOINSTANCE__.stop();
};

export default globalTeardown;