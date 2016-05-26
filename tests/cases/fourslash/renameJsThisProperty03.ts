/// <reference path='fourslash.ts'/>

// @allowJs: true
// @Filename: a.js
////class C {
////  constructor() {
////    this./**/[|x|] = 10;
////  }
////}
////var t = new C();
////t.[|x|] = 11;

goTo.marker();
verify.renameLocations( /*findInStrings*/ false, /*findInComments*/ false);
