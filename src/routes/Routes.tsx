import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { TimerPage } from '../pages/TimerPage'
import { ExercisesPage } from '../pages/ExercisesPage'
import { SignInPage } from '../pages/SignInPage'
import RoutingPath from './RoutingPath'


export const Routes = (props: { children: React.ReactChild }) => {
    const { children } = props
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.homePage} component={HomePage} />
                <Route exact path={RoutingPath.aboutPage} component={AboutPage} />
                <Route exact path={RoutingPath.timerPage} component={TimerPage} />
                <Route exact path={RoutingPath.exercisesPage} component={ExercisesPage} />
                <Route exact path={RoutingPath.signinPage} component={SignInPage} />
                <Route component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}