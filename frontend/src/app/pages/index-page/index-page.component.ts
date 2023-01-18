import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  public indexPageMessage: string = "Test message";

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.apiService.getRootMessage().subscribe(
      res => {
        this.indexPageMessage = res.message;
      }
    );
  }

}
