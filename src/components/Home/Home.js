import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;


// Watch video 1 and 2

// 1ans) A React side effects occurs when we use something that is outside the scope of React js in our react components, eg: Web API's like LocalStorage.



// 2ans) It can go into infinite loop or it get stucks in infinite rendering.



// 3ans) useEffect (() => {...}, [dependencies] );

// useEffect is a hook, it solves the problem of sideeffect such as infinite rendering process,

// in useEffect we have one function and a dependcies of Array, we kept array [ ] empty it solves infitinite rendering problem.



// Watch video 3 from above link and answer the following:



// 1ans) Its not storing login data.

// 2ans) To store data we use LocalStaorage, localStorage.setItem to set the data, to get data we use localStorge.getItem() and remove data we use LocalStorege.remove and with help of useEffect hook.



// 3) 2nd argument is called Array dependency



// Watch video 4 and 5 from above link and answer the following



// 1ans) if we dont use dependency ,useEffect function runs olny one time, dependency is ver important to solved sideeffects.

// As in given project Email and password were dependency, If we don't use them, if we change email or password it will not change of UI



// 2 ans) enteredEmail and enteredPassword is used as dependency in useEffect, if a user changes password and email we get side effect to tackle that we use dependency of email and password of State.







