import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrls: ['./contact-page.css'],
})
export class ContactPage {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // can also use = new FormGorup
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Using EmailJS (actual email)emailjs
      // .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.contactForm.value, 'YOUR_PUBLIC_KEY')
      emailjs
        .send('service_24gd5bk', 'template_uwf37qe', this.contactForm.value, 'MbcSsRBaC1vIILUO8')
        .then(
          () => {
            alert('Message sent successfully!');
            this.contactForm.reset();
          },
          (err) => {
            console.error(err);
            alert('Failed to send message. Please try again later.');
          },
        );
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}
