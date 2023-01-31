import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';


(async () => {
  try {
    // await mongoose.connect('mongodb+srv://${UserName}:${Password}@${clasterInfo}.mongodb.net/managerApp');
    await mongoose.connect('mongodb+srv://edanilovich:mCW_6qxCk7WBjCw@cluster0.toypvc3.mongodb.net/managerApp');
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
