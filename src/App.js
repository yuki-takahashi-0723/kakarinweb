import React from 'react'
import About from './pages/about/About'
import Message from './pages/message/Message'
import TopView from './pages/Top/TopView'
import './style.css'
// import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'
import Gallery from './pages/ gallery/ Gallery'
import Diary from './pages/diary/Diary'
import Footer from './pages/Footer'
import CustomDiary from './pages/diary/CustomDiary'
import LoggedInRoute from './pages/LoggedInRoute'
import { AuthProvider } from './pages/AuthService'








const App = () =>{


    return(
    
       <>
          <AuthProvider>
                <HashRouter>
                    <Switch>
                            <LoggedInRoute path='/customDiary' component={CustomDiary}/>
                            {/* <Route exact path='/signup' component={SignUp}/> */}
                            <Route exact path='/signin' component={SignIn}/>
                            <Route exact path='/gallery'component={Gallery}/>
                            <Route exact path= '/diary' component={Diary}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/message' component={Message} />
                            <Route exact path='/' component={TopView}/>
                    </Switch>
                </HashRouter>
                <Footer/>
          </AuthProvider>
       </>
       
       
    )
}

export default  App