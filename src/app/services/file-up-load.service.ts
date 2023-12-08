import {Injectable} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {BehaviorSubject, finalize, Observable} from "rxjs";
import firebase from "firebase/compat";
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;

@Injectable({
  providedIn: 'root'
})
export class FileUpLoadService {

  private progressSource = new BehaviorSubject<number>(0);
  currentProgress = this.progressSource.asObservable();

  updateProgress(progress: number | undefined) {
    if (progress != null) {
      this.progressSource.next(progress);
    }
  }
  constructor(private storage: AngularFireStorage) {
  }

  uploadFile(file: File, path:string): Observable<string> {
    const filePath = `${path}/${Date.now()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.percentageChanges().subscribe(percentage => {
      this.updateProgress(percentage);
      console.log(this.currentProgress)
    });

    return new Observable(observer => {
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(downloadURL => {
            observer.next(downloadURL);
            observer.complete();
          });
        })
      ).subscribe();
    });
  }
}
