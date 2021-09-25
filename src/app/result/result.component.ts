import { Component, OnInit} from '@angular/core';

import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  constructor(public calculateService: CalculateService) { }

  ngOnInit(): void {
  }

}
