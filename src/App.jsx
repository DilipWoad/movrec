import Body from "./components/Body/Body"
import {Provider} from 'react-redux'
import appStore from "./utils/Store/appStore"

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  )
}

export default App
