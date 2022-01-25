import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  'contactForm': FormGroup;
  user: User = new User();

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {

    this.contactForm = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      phone: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.minLength(8), Validators.required]),
      
    });
  }

  saveuser(){
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/user']);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // console.log(this.contactForm.value);
      // console.log(this.user);
      this.saveuser();
    }
    return this.contactForm.reset()
  }

}
