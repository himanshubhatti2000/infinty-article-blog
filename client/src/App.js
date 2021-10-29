import React, {Component} from 'react'
import { Switch, Route, Router} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute'
import History from './History/History'
import Homepage from './Components/Homepage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Categories from './Components/Categories'
import CateogoryPage from './Components/CategoryPage'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Login from './Components/Login'
import Signup from './Components/Signup'
//import Admin from './Components/Dashboard/Admin'
import CreatePost from './Components/Dashboard/CreatePost'
import Authors from './Components/Dashboard/Authors'
import DashboardHome from './Components/Dashboard/DashboardHome'
import storeContext from './Context/storeContext'
class App extends Component{
  state={
    user: {},
    auth: true,
    contactUs: {
      name: {
        firstName: "",
        lastName: ""
      },
      phoneNumber: "",
      email:"",
      message: ""
    },
    homepage: {
        trend: [],
        categoryArray:[]
    },
    name:"HEY",
    dashboard: {
      createArticle: {
        headline: "",
        description: "a",
        articleContent: ""
      }
    }
  }
  render(){
    console.log(this.state,"hahaha")
    return(
        <>
        <storeContext.Provider value={{store: this.state, setStore: this.setState.bind(this)}}   >
         <Router history={History}>
        <Header />
        <Switch>
          <Route path="/" exact  component={Homepage} />
          <Route path="/categories" exact  component={Categories} />
          <Route path="/categories/:category" exact  component={CateogoryPage} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/contact-us" exact  component={ContactUs} />
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <ProtectedRoute exact path="/admin" component={DashboardHome }/>
          <ProtectedRoute exact path="/admin/create-post" component={CreatePost}/>
          <ProtectedRoute exact path="/admin/authors" component={Authors}/>
          <ProtectedRoute exact path="/admin/authors" component={Authors}/>
          </Switch>
        <Footer />
        </Router>
        </storeContext.Provider>
        </>
    )
  }
}
export default App