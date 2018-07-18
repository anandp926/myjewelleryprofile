import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Testing from './component/Testing'
import Header from './component/Header'
import Navigation from './component/Navigation'
import Jewellery from './component/Jewellery'
import { jewelleries,userDetail } from './utils/api'

class App extends Component {
    state = {
        jewell: null,
        user: null
    };

    componentDidMount(){
        this.setState({
            jewell: jewelleries,
            user:userDetail
        })
    }

    addItems = (data) => {
        const forAdd = this.state.user.Jewellery.filter((nsitem) => nsitem.id !== data.id).concat([data]);
        const oldState = {...this.state.user}
        oldState.Jewellery = forAdd
        this.setState({user: oldState},()=>alert("Thank you 1 item is added :)"))
    };

    addNewItems = (newData) => {
        const a = newData.Category
        const forNAdd = this.state.jewell[a].filter((data) =>data.id !== newData.id).concat([newData])
        const oldState = {...this.state.jewell};
        oldState[a] =forNAdd
        this.setState({jewell:oldState})
    };

  render() {
      
    const { jewell,user } = this.state
    return (
      <div>
          <Router>
              <Switch>
                  <Route exact path="/" render = {({match}) => (
                    <div>
                        <Header/>
                        <Navigation jewell={jewell} onAddNewItem={this.addNewItems}/>
                        <Jewellery match={match} jewell={jewell} user={user} onAdd={this.addItems}/>
                    </div>
                    )}>
                  </Route>
                  <Route exact path="/profile" render = {({match}) => (
                    <div>
                        <Header/>
                        <Navigation jewell={jewell} onAddNewItem={this.addNewItems}/>
                        <Testing match={match} user={user}/>
                    </div>
                    )}>
                  </Route>
                  <Route exact path="/profile/orders/:category/:id" render = {({match}) => (
                    <div>
                        <Header/>
                        <Navigation jewell={jewell} onAddNewItem={this.addNewItems}/>
                        <Testing match={match} user={user}/>
                    </div>
                    )}>
                  </Route>
                  <Route exact path="/:category" render = {({match}) => (
                     <div>
                     <Header/>
                     <Navigation jewell={jewell} onAddNewItem={this.addNewItems}/>
                     <Jewellery match={match} jewell={jewell} user={user} onAdd={this.addItems}/>
                     </div>
                     )}>
                  </Route>
                  <Route exact path="/:category/:type" render = {({match}) => (
                     <div>
                     <Header/>
                     <Navigation jewell={jewell} onAddNewItem={this.addNewItems}/>
                     <Jewellery match={match} jewell={jewell} user={user} onAdd={this.addItems}/>
                     </div>
                     )}>
                  </Route>
              </Switch>
              </Router>
      </div>
    );
  }
}

export default App;

