import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {

  it('should say hello', (done)=> {
      const index = fs.readFileSync('./src/index.html', "utf-8");
      jsdom.env(index, (err, window) => {
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equals('Hello Youssef ?');
        done();
        window.close();
      });
  })
  /*it('should contain users table', (done) =>{
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, (err, window) => {
      const users = window.document.getElementsByTagName('users')[0];
      expect(users.innerHTML).to.equals('Users');
      done();
      window.close();
    });
  })*/
});

