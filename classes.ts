interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  // constructor runs when class is used
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User created', this.name);
  }

  // methods
  register() {
    console.log(this.name, 'is now registered');
  }

  payInvoice() {
    console.log(this.name, 'has paid their invoice');
  }
}

let seanUser = new User('Sean', 'smwade1115@gmail.com', 28);

console.log(seanUser.email);

seanUser.register();

// classes extending to other classes inherit properties of first class
class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    // super is required for inherited props
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let mikeMember: User = new Member(1, 'Mike', 'mike@mike.com', 33);
mikeMember.payInvoice();
