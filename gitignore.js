class Gitignore {

  constructor(lib){
    this.lib = lib;
  }

  /**
   * Generate gitignore
   */
  generate(isGlobal){
    let request = require('request');
    let fs = require('fs');

    var nameFile = '.gitignore';
    if(isGlobal){
      nameFile = '.gitignore_global';
    }

    request
      .get(Gitignore.URL + this.lib)
      .on('error', function(err) {
        console.log(err)
      })
      .pipe(fs.createWriteStream(nameFile))
  }

  /**
   * List template of gitignore
   */
  static list(){
    let request = require('request');

    request(Gitignore.URL + 'list', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var aList = body.split(',');
        var firstLetter = '';

        for (var i = 0; i < aList.length; i++) {
          if(aList[i].charAt(0) != firstLetter){
            firstLetter = aList[i].charAt(0);
            console.log('--------- ' + firstLetter.toUpperCase() + ' ---------');
          }
          console.log(aList[i]);
        }
      }
    });
  }

}
Gitignore.URL = 'https://www.gitignore.io/api/';

module.exports = Gitignore;
