import React from 'react'

const Class = () => {

    // class User {
    //     name: string;
    //     email: string;
    //     password: string;

    //     constructor(name:string, email:string, password:string) {
    //         this.name = name;
    //         this.email = email;
    //         this.password = password;
    //     }
  // }
  

  class User {
    constructor(
      public name: string,
      public email: string,
      public password : string
    ) {
      this.name = name;
      this.email = email;
      this.password = password
    }
    

    get getName(): string {
      return this.name;
    }
    set setName(name:string) {
      this.name = name;
    }
    }

    const Alim = new User("alim", "a@gmail.com", "abc")
    console.log(Alim)
  Alim.name = "Baap"
  console.log(Alim);
  
    return (
      

      <div>
          
    </div>
  )
}

export default Class