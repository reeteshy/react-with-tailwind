import React from 'react';
import {Route, Routes} from "react-router-dom";
import { ContactUs } from './pages/ContactUs';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Blogs } from './pages/Blogs';
import { PageNotFound } from './pages/PageNotFound';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import MainLayout from './MainLayout';
import GenralLayout from './GenralLayout';

function App() {

  const navs = [
    {id: 1, layoutType:1, name: 'Home', path: '/', element: <Home/>},
    {id: 2, layoutType:1, name: 'About', path: '/about', element: <AboutUs/>},
    {id: 3, layoutType:1, name: 'Contact', path: '/contact', element: <ContactUs/>},
    {id: 3, layoutType:1, name: 'Blog', path: '/blog', element: <Blogs/>},
    {id: 3, layoutType:2, name: 'Login', path: '/login', element: <SignIn/>},
    {id: 3, layoutType:2, name: 'Register', path: '/register', element: <SignUp/>},
    {id: 4, layoutType:1, name: 'PageNotFound', path: '/*', element: <PageNotFound/>},
];

  return (
    <React.Fragment>
      <Routes>
                {
                    navs.map((nav) => {
                        return (
                            (nav.layoutType === 1) ? (
                              <Route path='/' element={<MainLayout />} >
                            <Route key={nav.id} path={nav.path} element={nav.element}/>
                          </Route>
                            )  : (
                              <Route element={<GenralLayout />} >
                            <Route key={nav.id} path={nav.path} element={nav.element}/>
                          </Route>
                            )
                        );
                    })
                }
            </Routes>
    </React.Fragment>
  );
}

export default App;
