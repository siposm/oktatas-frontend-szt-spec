import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import * as signalR from '@microsoft/signalr';
import { StatusResponse } from '../models/status-response';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {

  // A BehaviorSubject használatának az a lényege, hogy nem csupán egy adatfolyamot (streamet) biztosít,
  // hanem mindig tartalmazza az aktuális értéket is. Ez azt jelenti, hogy bármikor lekérdezhető 
  // a legutolsó állapot (.value), és szükség esetén új értéket is lehet kibocsátani a .next() metódus 
  // segítségével. A szolgáltatásban ezért szokás egy privát BehaviorSubject-et létrehozni, 
  // amely az adatokat kezeli és frissíti, míg a komponensek számára ennek csak az olvasható formáját, 
  // azaz az Observable-t tesszük elérhetővé az asObservable() metódussal. 
  // Így a komponensek megfigyelhetik az adatváltozásokat, de nem tudják közvetlenül módosítani az 
  // állapotot, ami biztonságosabb és átláthatóbb architektúrát eredményez.
  private _products$ = new BehaviorSubject<Product[]>([])
  products$ = this._products$.asObservable()
  private hub?: signalR.HubConnection

  constructor(private http: HttpClient) { }

  init(): void {
    this.getAll()
    this.connectHub()
  }

  // ---------------- REST ----------------

  status(): Observable<StatusResponse> {
    return this.http.get<StatusResponse>(environment.apis.status)
  }

  getAll(): void {
    this.http.get<Product[]>(environment.apis.product)
      .subscribe(list => this._products$.next(list))
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apis.product, product).pipe(
      tap(newProd => {
        // Ha van aktív hub kapcsolat, megvárjuk a szerver broadcastot, hogy ne duplázzuk be lokálisan.
        if (this.hub?.state === signalR.HubConnectionState.Connected) return

        const current = this._products$.value
        this._products$.next([...current, newProd])
      })
    )
  }

  delete(id: string): void {
    this.http.delete(`${environment.apis.product}/${id}`).subscribe(x => console.log(x))
  }

  // ------------- SignalR (Hub) -------------

  private connectHub(): void {
    this.hub = new signalR.HubConnectionBuilder()
      .withUrl(environment.hubs.product, { withCredentials: false })
      .withAutomaticReconnect()
      .build()

    // Broadcastok kezelése
    this.hub.on("products:created", (p: Product) => {
      console.log("*** SignalR Hub Event: CREATED")
      this._products$.next([...this._products$.value, p])
    })

    this.hub.on("products:updated", (p: Product) => {
      console.log("*** SignalR Hub Event: UPDATED")
      const curr = this._products$.value
      const next = curr.map(x => (x.id === p.id ? p : x))
      this._products$.next(next)
    })

    this.hub.on("products:deleted", (payload: { id: number }) => {
      console.log("*** SignalR Hub Event: DELETED")
      const curr = this._products$.value
      this._products$.next(curr.filter(x => x.id !== payload.id))
    })

    this.hub.start()
  }
}
