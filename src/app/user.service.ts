import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends = [
    {
      name: 'Ket',
      pic: 'ket.jpg',
      position: 'นักศึกษาปี 3 (third-year)',
    },
    {
      name: 'Pare',
      pic: 'pare.jpg',
      position: 'นักศึกษาปี 3 (third-year)',
    },
    {
      name: 'Pad',
      pic: 'pat.jpg',
      position: 'นักศึกษาปี 3 (third-year)',
    },
    {
      name: 'Miw',
      pic: 'sirilak.jpg',
      position: 'นักศึกษาปี 3 (third-year)',
    },
    {
      name: 'Tik',
      pic: 'tik.jpg',
      position: 'นักศึกษาปี 3 (third-year)',
    },
    {
      name: 'King',
      pic: 'king.jpg',
      position: 'นักศึกษาปี 3 (third-year)',
    },
    {
      name: 'aof',
      pic: 'aof.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'May',
      pic: 'may.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Boss',
      pic: 'boss.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Lar',
      pic: 'lar.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Fha',
      pic: 'fha.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Folk',
      pic: 'folk.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Frank',
      pic: 'frank.png',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Non',
      pic: 'non.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Benz',
      pic: 'pbenz.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Pham',
      pic: 'pham.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Phon',
      pic: 'phon.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    },
    {
      name: 'Wat',
      pic: 'wat.jpg',
      position: 'นักศึกษาปี 4 (fourth-year)',
    }
  ];
  users: any

  constructor(private http: HttpClient) {
    this._getUsers()
  }

  _getUsers() {
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/60114440396/user/_search',
      {
        query: {
          /*
          wildcard: {
            user: { value: '*an*' }
          }
          */
        }
      }
    ); /*.subscribe( data => {
      this.users = data['result']['hits']
      console.log(this.users)
    }, error => {});
    */
  }

  _saveUser(usr: string, passwd: string) {
    console.log(`user=${usr} passwd:${passwd}`);
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/60114440396/user/_create',
      {
        user: usr,
        password: passwd,
      }
    );
  }

  getFriends() {
    return this.friends;
  }
}
