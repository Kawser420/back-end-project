import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Server App Listening On PORT: ${config.port}`);
    });
  } catch (error) {
    console.log('This is server Error:', error);
  }
}

main();
