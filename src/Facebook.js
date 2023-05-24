import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import {Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function Facebook() {
  const [login,setLogin] = useState(false);
  const [data,setData] = useState({});
  const [picture,setPicture] = useState('');

  const responseFacebook=(response)=>{
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if(response.accessToken){
      setLogin(true);
    }else{
      setLogin(false);
    }
  }
  
  
  return(
    <div class="container">
      <Card style={{width:"800px"}} className='mx-auto mt-5'>
       <Card.Header className='pb-4'>
        <h1>My React App</h1>
       </Card.Header>

       <Card.Body>
          <Card.Text>
          {!login &&
          <React.Fragment>
            <h3>Please login using one of the following:</h3>
            {/*login form*/}
            <LoginForm/>
             {/*Facebook login button*/}
             <FacebookLogin 
             appId="2567352006754494"
             autoLoad={false}
             fields="name, email, picture"
             scope="public_profile,user_friends"
             callback={responseFacebook}
             icon="fa-facebook"
             />
             </React.Fragment>
            }

            {login &&
            <WelcomeBack fbpic={picture} fbdata={data}/>
            }
          </Card.Text>
       </Card.Body>

      </Card>
    </div>
  )

}


// Login Form Component

function LoginForm(){
  return (
    <form className='border mt-3 mb-5 p-3 bg-white'>
      <label className='m-2'>Name</label>
      <input type='text' name="name" placeholder="Your Name" />
      <label className='m-2'>Email</label>
      <input type='email' name="email" placeholder="Your Email" />
      <input type="submit" value="login" className='btn bg-success text-white my-3'/>
    </form>
  )
}

// Home Commponent

function WelcomeBack(fbpic,fbdata){
  return(
    <React.Fragment>
    <img src={fbpic} alt={fbdata.name} />
    <h3 className='d-inline text-success mx-2'>
      Welcome Back {fbdata.name}!
      </h3>
      <p className='my-5'>This is the home page of the app</p>
      </React.Fragment>
   )

}



export default Facebook;
