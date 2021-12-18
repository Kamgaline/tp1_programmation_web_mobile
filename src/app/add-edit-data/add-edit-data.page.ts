import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.page.html',
  styleUrls: ['./add-edit-data.page.scss'],
})
export class AddEditDataPage implements OnInit {

  isEdit: boolean;
  type: string;
  title: string;
  subTitle: string;
  amount: string;
  id: any;
  loading: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService
  ) {
    this.route.params.subscribe((data: any) => {
      console.log(data.type);
      if (data.type == 'add') {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
    })
  }

  ngOnInit() {
  }

  addTransaction() {
    this.loading = true;
    let data = {
      type: this.type,
      title: this.title,
      subTitle: this.subTitle,
      amount: this.amount,
    }
    this.firebaseService.add_transaction(data).then((res: any) => {
      console.log(res);
      this.loading = false;
      this.router.navigateByUrl('/home');
    })
  }
}
