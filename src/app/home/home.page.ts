import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit
{
  
  //public produitall : Produit[];
  public produits : any;
  public mot_cle : String ="";
  public produit:Produit;
  public value:any;
  products: Produit[] = [];
  
  isLoadingResults: boolean;
  ngOnInit() {
    this.getProducts();
  }
  constructor(
    public api: ProduitService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute,public navCtrl
    :NavController) { }
   

  // drop(event: CdkDragDrop<string[]>) {
    //  moveItemInArray(this.products, event.previousIndex, event.currentIndex);
    //}


    async getProducts() {
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();
      await this.api.getAll()
        .subscribe(res => {
          this.products = res;
          console.log(this.products);
          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }


     getProductByname(form:any) {
     
       this.api.getProductByName(form.mot_cle)
        .subscribe(res => {
          this.products=res;
          console.log(this.products);
        }, err => {
          console.log(err);
        });
    }
  
     onDeleteProduct(id:number)
    {
      let conf=confirm("Etes vous sur de supprimer cette produit ? ");
      if(conf)
      this.isLoadingResults = true;
      this.api.deleteProduct(id)
        .subscribe(data => {
          this.getProducts;
          this.isLoadingResults = true;
         // location.reload(); //mn 3ana
          this.router.navigate(['/home']);
        }, err => { console.log(err); })
    }

    editProduct(id: any) {
      this.router.navigate([ '/edit-produit', id ]);
    }
    
    Onchercher(form:any)
    {
      this.mot_cle=form.mot_cle;
      this.produits=this.products;
      {
        if(this.mot_cle!="")
        {
          this.produits=this.api.getProductByName(form);
          console.log(this.produits);

        }
        else
        this.produits=this.products;
      }
    }

}

