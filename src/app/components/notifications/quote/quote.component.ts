import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'st-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: string = '';
  author: string = '';

  ngOnInit(): void {
    this.getRandomQuotes()
  }
  constructor(private apiClient: ApiClientService) {}

  getRandomQuotes() {
    this.apiClient.getData('https://api.quotable.io/quotes/random')
      .then((res: any) => {
        res.forEach((data: any) => {
          this.quote = data.content;
          this.author = data.author;
        })
        console.log(this.author, this.quote);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
