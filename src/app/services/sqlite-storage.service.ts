import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

/**
 * Helper class to interact with local SQLite database
 */
@Injectable()
export class SqliteStorageService {

  private db: SQLiteObject;

  constructor(private sqlite: SQLite) {
  }


  get(emailId: string) {
    alert('Going to get data for emailId:' + emailId);
    return this.db.executeSql('select emailId, value from kv where emailId = ? limit 1', [emailId]).then
    (
        data => {
          if (data.rows.length > 0) {
            return data.rows.item(0).value;
          }
        }
    );
  }

  set(emailId: string, value: string) {
    alert('Going to save data. emailId:' + emailId + ', value:' + value);
    return this.db.executeSql('insert or replace into kv(emailId,value) values(?,?)', [emailId, value]).then
    (
        data => {
          if (data.rows.length > 0) {
            return JSON.parse(data.rows.item(0).value);
          }
        }
    );
  }

  // to be called after device ready event is fired
  initializeDatabase() {
    return this.sqlite.create({name: 'data.db', location: 'default'}).then
    (
        db => {
          this.db = db;
          return this.db.executeSql('CREATE TABLE IF NOT EXISTS kv(emailId text primary key, value text)', []).then(data => {
            alert('After create table check');
          });
        }
    );
  }
}
