"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'family-notes-app',
            templateUrl: './app/app.component.html',
            styles: ["\n\t\theader{\n\t\t\tfont-family: Arial, Helvetica, sans-serif;\n\t\t\t\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t\t\n\t\tnav{\n\t\t\tbackground-color: dimgray; \n\t\t\tborder: 1px solid green;\n\t\t}\n\t\t\n\t\tmain {\n\t\t\tmin-height: 100px;\n\t\t\tbackgroud-color: white;\n\t\t}\t\n\t\t\n\t\tfooter{\n\t\t\tborder: 1px solid black;\n\t\t}\n\t\t\n\t\tfooter span.active {\n\t\t\tbackground-color: gray;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map