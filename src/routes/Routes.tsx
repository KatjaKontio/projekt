import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages/homepage/HomePage'
import { AboutPage } from '../pages/aboutpage/AboutPage'
import { TimerPage } from '../pages/timerpage/TimerPage'
import { ExercisesPage } from '../pages/exercisespage/ExercisesPage'
import { SignInPage } from '../pages/signinpage/SignInPage'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'



export const Routes = (props: { children: React.ReactChild }) => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const { children } = props

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setAuthUser({ username: localStorage.getItem('user') })
        }
    }, [])


    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.homePage} component={HomePage} />
                <Route exact path={RoutingPath.aboutPage} component={AboutPage} />
                <Route exact path={RoutingPath.timerPage} component={TimerPage} />
                <Route exact path={RoutingPath.exercisesPage} component={ExercisesPage} />
                <Route exact path={RoutingPath.signinPage} component={SignInPage} />
                <Route component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}