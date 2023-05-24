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
            <Home fbpic={picture} fbdata={data}/>
            }
          </Card.Text>
       </Card.Body>

      </Card>
    </div>