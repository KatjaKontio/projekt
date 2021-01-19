import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'

export const Routes = (props: { children: React.ReactChild }) => {
    const { children } = props
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={'/home'} component={HomePage} />
                <Route exact path={'/about'} component={AboutPage} />

            </Switch>
        </BrowserRouter>
    )
}