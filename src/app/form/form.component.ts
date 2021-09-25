import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public calculateService: CalculateService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.calculateService.calculate()
  }
}

