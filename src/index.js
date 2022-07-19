import reactDOM from 'react-dom'
import { App } from './App'
import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './reducer/user'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    userData: userDataReducer
  }
})

reactDOM.render(<>
  <Provider store={store}>
    <App />
  </Provider>
</>, document.getElementById('root'))