import React from 'react'

const Getter_Setter = () => {
    
    class User {
        constructor(email, password) {
            this._email = email
            this._password = password
        }
        get email() {
            return `encrypt ${this._email} encrypt`
        }
        set email(value) {
            this._email = value;
        }
    }

    const alim = new User("a@gmail.com", "abc");
    console.log(alim.email);    // This is nothing but get email function
    // console.log(alim.password);  // accessing class varaibles
    
  return (
      <div>
          
    </div>
  )
}

export default Getter_Setter