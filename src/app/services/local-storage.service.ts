import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {SqliteStorageService} from './sqlite-storage.service';

const win: any = window;

/**
 * Helper class that saves data in either browser's storage or Sqlite database
 */
@Injectable()
export class LocalStorageService {

  private sqlMode = false;

  constructor(
      private storage: Storage,
      private sqlStorageService: SqliteStorageService
  ) {
    if (win.sqlitePlugin) {
      this.sqlMode = true;
    } else {
      console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
    }
  }

  // returns a Promise
  getUserConfig(emailId: string) {
    if (this.sqlMode) {
      return this.sqlStorageService.get(emailId).then(value => JSON.parse(value));
    } else {
      return new Promise(resolve => resolve(this.storage.get(emailId).then(value => JSON.parse(value))));
    }
  }

  // returns a Promise
  setUserConfig(emailId, userConfig) {
    if (this.sqlMode) {
      return this.sqlStorageService.set(emailId, JSON.stringify(userConfig)).then(value => value);
    } else {
      return this.storage.set(emailId, JSON.stringify(userConfig));
    }
  }

  initStorage(): Promise<any> {
    if (this.sqlMode) {
      return this.sqlStorageService.initializeDatabase();
    } else {
      return new Promise(resolve => resolve());
    }
  }

}
