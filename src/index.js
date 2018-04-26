import dva from 'dva';
import weather from './models/app';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(weather);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
