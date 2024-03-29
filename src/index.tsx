import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import './index.css'
import ThemeAppWrapper from './ThemeAppWrapper'
import { PersistGate } from 'redux-persist/integration/react'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeAppWrapper />
    </PersistGate>
  </Provider>
)
