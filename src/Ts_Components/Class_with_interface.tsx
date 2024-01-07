import React from 'react'

const Class_with_interface = () => {

    interface task1 {
        name: string,
        email: string,
        password: string,
        getDetails():void,
    }


    class User implements task1 {
        constructor(public name: string,public email: string,public password: string) {
            this.name = name;
            this.email = email;
            this.password = password;
        }

        getDetails(): void {
            console.log(this.name,this.email,this.password);
        }
    }

    const user1 = new User("Chacha", "chacha@gmail.com", "abc");
    console.log(user1);

  return (
      <div>
          
    </div>
  )
}

export default Class_with_interface