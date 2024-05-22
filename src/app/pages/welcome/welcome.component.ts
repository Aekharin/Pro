import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgZorroModule } from '../../../shared/ng-zorro.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [NgZorroModule,NzInputModule ],
})
export class WelcomeComponent implements OnInit {

suffixTemplateInfo: string|TemplateRef<void>|undefined;
prefixTemplateUser: string|TemplateRef<void>|undefined;
validateForm: any;

constructor(private router: Router) {}

  ngOnInit(): void {
  }
  onClick(): void {
    this.router.navigate(['/home']);
  }
    
}
