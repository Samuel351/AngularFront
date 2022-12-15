import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.scss']
})
export class ImagemComponent {

  readonly requestURL = "http://localhost:8080/photos";
  readonly requestURL_2 = "http://localhost:8080/photos/file";
  file: File;
  url: any;
  teste: any

  constructor(private http: HttpClient) {
    this.file = new File([], "");
   }

  onFileSelected(event: any){
    this.file = event.target.files[0];
    console.log(this.file)

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => {
      this.url = reader.result
    }
  }

  sendPhoto() {
    const form = new FormData();
    form.append('file', this.file, this.file.name)
    return this.http.post(this.requestURL, form).subscribe(response => console.log(response))
  };

  sendPhoto_2() {
    const form = new FormData();
    form.append('file', this.file, this.file.name)
    return this.http.post(this.requestURL_2, form).subscribe(response => console.log(response))
  };
}
