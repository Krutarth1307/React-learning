function UserGreetings(Props){

    

        if(Props.isLoggedIn){
           
    }
      
        else{
             
        }

       return( Props.isLoggedIn ? 
          (<h2>Hello {Props.username}</h2>) : 
        (<h2>Please enter username.</h2>)
   )
}

export default UserGreetings
