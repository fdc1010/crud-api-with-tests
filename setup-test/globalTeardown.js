const globalTeardown = async () => {
    await global.__DB__.mongoose.disconnect();
    await global.__MONGOINSTANCE__.stop();
};

export default globalTeardown;