var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'Your Database URI here.';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'Your Test Uri here.';
}